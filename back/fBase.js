require('dotenv').config()

const { initializeApp } = require('firebase/app')

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIN_ID,
  appId: process.env.APP_ID,
}

const firebase = initializeApp(firebaseConfig)
