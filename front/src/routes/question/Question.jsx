import { BookFilled, BookOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import { Li, Span, Ul } from '../../style/question'
import { Input, InputBox, QuestionDiv, Button } from '../../style/question'

const Question = () => {
  const sampleData = [
    { id: 0, name: 'DOM?', checked: false },
    { id: 1, name: 'React?', checked: true },
    { id: 2, name: 'Vue?', checked: false },
    { id: 3, name: 'styled-components?', checked: false }
  ]
  return (
    <QuestionDiv>
      <InputBox>
        <SearchOutlined />
        <Input />
      </InputBox>
      <Ul>
        {sampleData.map(({ id, name, checked }) => (
          <Li key={id}>
            <input type="checkbox" /> <Span>{name}</Span>
            <Button>{checked ? <BookFilled /> : <BookOutlined />}</Button>
          </Li>
        ))}
      </Ul>
    </QuestionDiv>
  )
}

export default Question
