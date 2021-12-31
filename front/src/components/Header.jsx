import React, { useEffect, useState } from 'react'
import { EmptyDiv, HeaderDiv, HeaderName, UserInfo } from '../style/header'
import { DashOutlined, LeftOutlined, MenuOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [type, setType] = useState('/')

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setType(location.pathname)
  }, [location.pathname])

  const goBack = () => {
    navigate(-1)
  }

  switch (type) {
    case '/':
      return (
        <HeaderDiv>
          <MenuOutlined />
          <UserInfo>aiki(username)</UserInfo>
        </HeaderDiv>
      )
    case '/profile':
      return (
        <HeaderDiv>
          <LeftOutlined onClick={goBack} />
          <UserInfo>Profile</UserInfo>
          <EmptyDiv>
            <LeftOutlined />
          </EmptyDiv>
        </HeaderDiv>
      )
    default:
      return (
        <HeaderDiv>
          <LeftOutlined onClick={goBack} />
          <HeaderName>{type.replace('/', '').toUpperCase()}</HeaderName>
          <DashOutlined />
        </HeaderDiv>
      )
  }
}

export default Header
