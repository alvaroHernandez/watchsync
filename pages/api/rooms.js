import db  from "../db"
export default async (req, res) => {

    db.collection('rooms').get()
    .then((snapshot) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        const rooms = [];
        snapshot.forEach((doc) => {
            rooms.push({ id : doc.id, data : doc.data()});
        });
        res.end(JSON.stringify(rooms))
    })
    .catch((err) => {
        console.log('Error getting documents', err);
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(err))
    });
}
