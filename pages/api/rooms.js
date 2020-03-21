const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    const rooms = await db.query(escape`
      SELECT *
      FROM rooms
    `)
    res.status(200).json({ rooms })
}
