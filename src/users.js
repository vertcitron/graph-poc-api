var query = require('./mysql')

module.exports = {
  create: async ({ first_name, last_name }) => {
    let sql = `INSERT INTO \`graph-poc-db\`.users (first_name, last_name)`
    sql += ` VALUES ("${first_name || ''}", "${last_name || ''}");`
    var res = await query(sql)
    var id = res.insertId
    var reres = await query(`SELECT id, first_name, last_name FROM \`graph-poc-db\`.users WHERE id = ${id};`)
    return reres.length ? reres[0] : null
  },
  read: async ({ id }) => {
    var res = await query(`SELECT id, first_name, last_name FROM \`graph-poc-db\`.users WHERE id = ${id};`)
    return res.length ? res[0] : null
  },
  update: async ({ id, first_name, last_name }) => {
    let sql = `UPDATE \`graph-poc-db\`.users SET `
    if (first_name) sql += `first_name = "${first_name}"`
    if (first_name && last_name) sql += ', '
    if (last_name) sql += `last_name = "${last_name}"`
    sql += ` WHERE id = ${id};`
    await query(sql)
    var res = await query(`SELECT id, first_name, last_name FROM \`graph-poc-db\`.users WHERE id = ${id};`)
    return res.length ? res[0] : null
  },
  index: async ({ search }) => {
    let sql = `SELECT id, first_name, last_name FROM \`graph-poc-db\`.users`
    if (search) sql += ` WHERE (first_name LIKE "%${search}%" OR last_name LIKE "%${search}%");`
    sql += ';'
    var res = await query(sql)
    return res
  },
  delete: async ({ id }) => {
    let sql = `DELETE FROM \`graph-poc-db\`.users WHERE id = ${id};`
    var res = await query(sql)
    return 'successfully deleted'
  }
}
