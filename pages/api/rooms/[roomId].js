const db = require('../../../lib/db')
const escape = require('sql-template-strings')

export default async (req, res) => {
    console.log("Rooms API: Request received: ",req.query);
    try{
        if (req.method === 'POST') {
            console.log("Rooms API: creating room in database", req.query.roomId);
            const rooms = await db.query(escape`
          SELECT uuid from rooms
          WHERE uuid = ${req.query.roomId}
        `)
            console.log("Rooms API: rooms query result", rooms);
            if(rooms.error){
                console.log("Rooms API: room have error doesn't exist, creating");
                return res.status(500).json( { error : rooms.error } )
            }
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
            console.log("Rooms API: Geeting room information", req.query.roomId);
            const [room]= await db.query(escape`
            SELECT hostId from rooms
            WHERE uuid = ${req.query.roomId}
            `)
            console.log("Room API: room retrieved (raw): ", room);
            console.log("Room API: room retrieved, ", JSON.parse(JSON.stringify( { room } )) );
            res.status(201).json( JSON.parse(JSON.stringify({ room } )));
        }
    }catch(e){
        console.log("Error in Rooms API: ", e);
        res.status(500).json({error: e});
    }
}
