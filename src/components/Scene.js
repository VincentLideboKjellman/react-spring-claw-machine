import React from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop';

const StyledScene = styled.div`
    width: ${props => (props.sceneWidth ? props.sceneWidth : "auto")};
    height: ${props => (props.sceneHeight ? props.sceneHeight : "auto")};
    //background-color: #000;
    background-color: red;
`

const Scene = ({...props}) => {
  return (
      <StyledScene {...props}>
        <Backdrop/>
      </StyledScene>
  );
}

export default Scene;
