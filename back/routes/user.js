const express = require('express')
const router = express.Router()

const isUserEqual = require('../utils/isUserEqual')

const {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} = require('firebase/auth')

router.post('/login', (req, res, next) => {
  const auth = getAuth()
  const { googleUser } = req.body

  try {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      unsubscribe()
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        const credential = GoogleAuthProvider.credential(googleUser.vc.id_token)
        await signInWithCredential(auth, credential)
        res.status(200).send('ok')
      } else {
        res.status(403).send('User already signed-in Firebase')
      }
    })
  } catch (e) {
    //에러처리 추가
    console.error(e)
  }
})

router.post('/logout', async (req, res, next) => {
  // const auth = getAuth()
  // await auth.signOut()
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
