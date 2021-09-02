const mysql = require('mysql')
// 创建连接对象
let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'shop',
})
// 共享连接对象
module.exports = conn
