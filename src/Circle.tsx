import React from 'react'
import styled from 'styled-components'

// JavaScript에서는 propTypes로 prop을 확인해주었지만 
// 이제부턴 props를 TypeScript로 보호한다.
// 객체모양을 TypeScript에게 설명해주고 싶을 때 interface를 사용한다.

interface CircleProps { // 이 객체 안에서 bgColor가 발견된다.
  bgColor: string;  // bgColor는 string이 되어야해!
}


const Container = styled.div<CircleProps>`
  width: 300px;
  height: 300px;
  background-color: ${props => props.bgColor};
  border-radius: 100%;
`;

// CircleProps 의 타입이 뭔지 component 에게 말해줘야 한다.
function Circle({ bgColor }: CircleProps) { // bgColor의 타입은 CircleProps의 객체이다.
  return (
    <Container bgColor={bgColor} />
  )
}

export default Circle