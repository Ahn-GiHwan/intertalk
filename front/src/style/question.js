import styled from 'styled-components'

export const QuestionDiv = styled.main`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const InputBox = styled.div`
  display: flex;
  width: 90%;
  margin: 10px 0 30px 0;
  border-radius: 5px;
  padding: 10px;
  background-color: #f1f1f1;
`

export const Input = styled.input.attrs({ placeholder: 'Search' })`
  width: 100%;
  outline: none;
  margin-left: 7px;
  border: 0px;
  background-color: #f1f1f1;
`
export const Ul = styled.ul`
  width: 90%;
`

export const Li = styled.li`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Span = styled.span`
  display: inline-block;
  text-align: left;
`

export const Button = styled.button`
  background-color: white;
  border: 1px solid #d1d1d1;
  padding: 5px 3px;
`
