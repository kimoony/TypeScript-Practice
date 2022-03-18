import React, { useState } from 'react'
import styled from 'styled-components'

// React를 할 땐 propTypes로 prop을 확인해주었지만 
// 이제부턴 props를 TypeScript로 보호한다.

// propTypes 와 TypeScript 차이
// propTypes는 코드실행 후 브라우저에 에러가 나타난다.
// TypeScript는 코드실행 전 에러를 확인할 수 있다.

// 객체모양을 TypeScript에게 설명해주고 싶을 때 interface를 사용한다.

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

// component에도 bgColor를 받을거라고 TypeScript에게 알려주기 위해
// CircleProps를 붙여준다.
const Container = styled.div<ContainerProps>`
  width: 300px;
  height: 300px;
  background-color: ${props => props.bgColor};
  border-radius: 100%;
  border: 2px solid ${props => props.borderColor}; // css 에서는 optional (x), requierd
`;

interface CircleProps { // 이 객체 안에서 bgColor가 발견된다.
  bgColor: string;  // bgColor는 string이 되어야해! requierd
  borderColor?: string;  // ? 를 넣으면 있어도 되고 없어도 된다는 의미이다. requierd 가 아니다.
  // string | undefined
}

// CircleProps 의 타입이 뭔지 component 에게 말해줘야 한다.
function Circle({ bgColor, borderColor }: CircleProps) { // bgColor의 타입은 CircleProps의 객체이다.
  // // 만약 value의 값이 string이나 number 타입이 되길 원할 때
  // const [value, setValue] = useState<number | string>(0)
  // // setValue("asdf") // string 사용 가능
  // // setValue(true) // error

  const [value, setValue] = useState(0);


  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
  )
}

export default Circle


