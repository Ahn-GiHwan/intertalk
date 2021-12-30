import React from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'

const GoogleLoginButton = () => {
  const onSuccess = async googleUser => {
    await axios.post('http://localhost:3065/user/login', {
      googleUser
    }) //이걸로 받은 토큰 보내주기
  }

  const onFailure = error => {
    console.log(error)
  }

  return (
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        responseType={'id_token'}
        cookiePolicy="single_host_origin"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export default GoogleLoginButton
