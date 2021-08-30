const express = require('express')
const app = express()
app.get('/xu', (req, res) => {

  res.send('hello from simple server :)')

})
app.listen(3000, () => {
  console.log('30eer00r二哥也应该gt');
})
