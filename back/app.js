const express = require('express')
const cors = require('cors')
const fBase = require('./fBase')

const userRouter = require('./routes/user')
const app = express()

app.use(
  cors({
    origin: true,
  })
)
app.use(express.json()) //프론트에서 보낸 데이터를 body에 넣어줌
app.use(express.urlencoded({ extended: true })) //프론트에서 보낸 form 데이터를 해석해서 body에 넣어줌

app.use('/user', userRouter)

app.listen(3065, () => {
  console.log('서버 실행 중')
})
