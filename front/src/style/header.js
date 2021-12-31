import styled from 'styled-components'

export const HeaderDiv = styled.header`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: ${props => props.borderBottom && '1px solid #d3d3d3'};
`
export const UserInfo = styled.span`
  width: fit-content;
`

export const HeaderName = styled.h2`
  display: block;
`

export const EmptyDiv = styled.div`
  visibility: hidden;
`
