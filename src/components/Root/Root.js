import React from "react";
import styled from "styled-components";

import MyComponent from './MyComponent'
const CounterWrapper = styled.div`
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Root = () => {
  return (
    <Wrapper>
      <div className="App">
        <MyComponent /> 
      </div>
    </Wrapper>
  );
};

export default Root;
