import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

function App() {
  return (
    <div>
      <Circle borderColor="red" bgColor="blue" />
      <Circle text="i'm here!" bgColor="pink" />
    </div>
  );
}

export default App;
