import {
  DashOutlined,
  HomeOutlined,
  SearchOutlined,
  SendOutlined,
  UserOutlined
} from '@ant-design/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonName, Li, MainButton, NavbarDiv, Ul } from '../style/navbar'

const Navbar = () => {
  const playIconStyle = {
    color: 'red',
    fontSize: '30px',
    margin: '10px 0 5px 0',
    border: '3px solid red',
    borderRadius: '50%',
    padding: '5px 5px 10px 10px'
  }
  return (
    <NavbarDiv>
      <Ul>
        <NavLink to="/">
          <Li>
            <HomeOutlined style={{ fontSize: '22px' }} />
            <ButtonName>Home</ButtonName>
          </Li>
        </NavLink>
        <Li>
          <SearchOutlined style={{ fontSize: '22px' }} />
          <ButtonName>Discover</ButtonName>
        </Li>
        <NavLink to="/interview">
          <Li>
            <SendOutlined style={playIconStyle} rotate={-40} />
          </Li>
        </NavLink>
        <NavLink to="/profile">
          <Li>
            <UserOutlined style={{ fontSize: '22px' }} />
            <ButtonName>Me</ButtonName>
          </Li>
        </NavLink>
        <Li>
          <DashOutlined style={{ fontSize: '22px' }} />
          <ButtonName>Setting</ButtonName>
        </Li>
      </Ul>
    </NavbarDiv>
  )
}

export default Navbar
