const { GoogleAuthProvider } = require('firebase/auth')

module.exports = function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    const providerData = firebaseUser.providerData
    for (let i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId === GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.googleId
      ) {
        // We don't need to reauth the Firebase connection.
        return true
      }
    }
  }
  return false
}
