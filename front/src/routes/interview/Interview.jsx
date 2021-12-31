import { FieldTimeOutlined } from '@ant-design/icons'
import React from 'react'
import {
  InterviewDiv,
  PlayButton,
  PlayButtonInner,
  TextBox,
  TextBoxSubTitle,
  TextBoxTitle,
  TimerIconDiv,
  TimerInfo
} from '../../style/interview'

const Interview = () => {
  return (
    <InterviewDiv>
      <TextBox>
        <TextBoxTitle>면접을 시작합니다.</TextBoxTitle>
        <TextBoxSubTitle>심호흡 해주세요</TextBoxSubTitle>
      </TextBox>
      <TimerInfo>
        <TimerIconDiv>
          <FieldTimeOutlined />
          <span>time</span>
        </TimerIconDiv>
        <span>15s</span>
      </TimerInfo>
      <PlayButton>
        <PlayButtonInner />
      </PlayButton>
    </InterviewDiv>
  )
}

export default Interview
