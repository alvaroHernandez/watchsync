const db = require('../../../lib/db')
const escape = require('sql-template-strings')

export default async (req, res) => {
    console.log("Rooms API: Request received: ",req);
    try{
        if (req.method === 'POST') {
            const rooms = await db.query(escape`
          SELECT uuid from rooms
          WHERE uuid = ${req.query.roomId}
        `)
            console.log("Rooms API: rooms query result", rooms);
            if(rooms.length === 0){
                console.log("Rooms API: room doesn't exist, creating");
                const rooms = await db.query(escape`
              INSERT INTO rooms (uuid,movieUrl) VALUES (${req.query.roomId},${req.query.movieUrl})
            `)

                if(rooms.error){
                    console.log("Rooms API: room have error doesn't exist, creating");
                    res.status(500).json( { error : rooms.error } )
                }else{
                    console.log("Rooms API: room created", rooms);
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
          SELECT hostId from rooms
          WHERE uuid = ${req.query.roomId}
        `)
            res.status(201).json(rooms[0])
        }

    }catch(e){
        console.log("Error in Rooms API: ", e);
        res.status(500).json({error: e});
    }
}
