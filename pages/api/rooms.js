const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    const rooms = await db.query(escape`
      UPDATE rooms set hostId = ${req.query.hostId}
      WHERE uuid = ${req.query.roomId}
    `)
    res.status(200).json({ rooms })
}
