var express = require('express')
// 导入数据库连接
let conn = require('../public/javascripts/db/conn.js')
var router = express.Router()
conn.connect(() => {
  console.log('数据连接成功')
})
// 用户登录路由
router.get('/login', (req, res, next) => {
  const { name, pwd } = req.query
  conn.query(`select pwd from users where name='${name}'`, (err, result) => {
    let flag = result

    if (flag.length == 0) return res.json({ err: '账号不存在错误' })

    if (pwd !== flag[0].pwd) return res.json({ msg: '密码错误' })
    res.json({ rs: '登录成功' })
  })
})
// 用户注册路由
router.post('/reg', (req, res, next) => {
  const { name, pwd } = req.body
  // 先查询该用户名有没有重复
  conn.query(`select name from users where name='${name}'`, (err, rs) => {
    let flag = rs
    if (flag.length !== 0)
      // 如果查到信息则直接返回 终止添加的操作
      return res.json({ msg: '用户名已存在，请换一个用户名试试' })

    conn.query(`insert into users values(0,'${name}','${pwd}')`, (err, rsl) => {
      res.json({ msg: '注册成功' })
    })
  })
})
module.exports = router
