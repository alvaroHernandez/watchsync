const db = require('../../../../../lib/db')
const escape = require('sql-template-strings')

export default async (req, res) => {
    console.log(req.query);
    if (req.method === 'POST') {
        const rooms = await db.query(escape`
          SELECT uuid from rooms
          WHERE uuid = ${req.query.roomId}
        `)
        console.log(rooms);
        if(rooms .length === 0){
            console.log("empty");
            const rooms = await db.query(escape`
              INSERT INTO rooms (uuid,movieUrl) VALUES (${req.query.roomId},${req.query.movieUrl})
            `)

            if(rooms.error){
                res.status(500).json( { error : rooms.error } )
            }else{
                res.status(201).json({ rooms })
            }
        }else{
            res.status(200).json({ rooms })
        }
    }else if (req.method === 'PUT') {
        const rooms = await db.query(escape`
          UPDATE rooms set hostId = ${req.query.hostId}
          WHERE uuid = ${req.query.roomId}
        `)
        res.status(201).json({ rooms })
    }else if (req.method === 'GET') {
        const rooms = await db.query(escape`
          UPDATE rooms set guestId = ${req.query.guestId}
          WHERE uuid = ${req.query.roomId}
        `)
        res.status(201).json({ rooms })
    }
}
