const express = require('express')
const router = express.Router()
const conn = require('../public/javascripts/db/conn')
// conn.connect(() => {
//   console.log('数据库连接成功')
// })

router.get('/users', (req, res, next) => {
  let num = req.query.page
  let sql = `SELECT * from userlist LIMIT ${num}`
  conn.query(sql, (err, rs) => {
    res.json(rs)
  })
})

module.exports = router
