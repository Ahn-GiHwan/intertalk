import styled from 'styled-components'

export const InterviewDiv = styled.main`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30%;
  text-align: center;
`
export const TextBoxTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 40px;
`
export const TextBoxSubTitle = styled.span`
  margin-top: 20px;
`
export const TimerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TimerIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const PlayButton = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid orangered;
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
`

export const PlayButtonInner = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: red;
`
