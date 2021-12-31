import styled from 'styled-components'

export const NavbarDiv = styled.nav`
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 75px;
`
export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #d3d3d3;
`

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 3px solid red;
  border-radius: 50%;
`

export const ButtonName = styled.span`
  margin-top: 5px;
  font-size: 10px;
  opacity: 0.5;
`
