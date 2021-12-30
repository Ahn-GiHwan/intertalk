const express = require('express')
const router = express.Router()

const {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} = require('firebase/auth')

router.post('/login', async (req, res, next) => {
  //로그인 (현재는 구글만)
  const { id_token } = req.body
  const auth = getAuth()

  try {
    //중복로그인 시도는 안하는지 체크
    const credential = GoogleAuthProvider.credential(id_token)
    await signInWithCredential(auth, credential)
    res.status(200).send('ok')
  } catch (e) {
    console.error(e)
    //오류 코드 보내주기
  }
})

router.post('/logout', async (req, res, next) => {
  //로그아웃
  // await getAuth.signOut()
  res.status(200).send('ok')
})

router.post('/', async (req, res, next) => {
  //회원가입
  res.status(201).send('ok')
})

router.get('/', async (req, res, next) => {
  //유저 정보 읽기
  res.status(201).send('ok')
})

router.patch('/', async (req, res, next) => {
  //유저 정보 수정
  res.status(201).send('ok')
})

router.delete('/', async (req, res, next) => {
  //유저 삭제
  res.status(201).send('ok')
})

module.exports = router
