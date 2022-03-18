import React, { useState } from 'react';
import styled from 'styled-components';
// import Circle from './Circle';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`;

function App() {
  // const [value, setValue] = useState("")

  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event
  //   setValue(value)
  // }

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   console.log("Success Submit")
  // }


  return (
    <Container>
      <H1>Protected</H1>
    </Container>
  );
}

export default App;


// {/* <Circle borderColor="red" bgColor="blue" />
// <Circle bgColor="pink" /> */}
//   {/* <form onSubmit={onSubmit}>
//   <input value={value} onChange={onChange} type="text" placeholder="username" />
//   <button>Sign In</button>
// </form> */}