var mysql = require('promise-mysql')
var credentials = require('../db-credentials')

module.exports = sql => {
  return mysql.createConnection(credentials)
    .then(con => {
      var res = con.query(sql)
      con.end()
      return res
    })
}
