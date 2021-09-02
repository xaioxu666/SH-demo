var express = require('express')
var router = express.Router()
var conn = require('../public/javascripts/db/conn.js')
// 创建数据库连接
conn.connect(() => {
  console.log('数据库连接成功')
})
// 用户请求所有商品API
router.get('/', (req, res, next) => {
  conn.query('select * from goods', (err, rs) => {
    res.json(rs)
  })
})
module.exports = router
