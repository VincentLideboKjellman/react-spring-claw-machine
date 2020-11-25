import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Backdrop from './Backdrop';
import ClawBase from './ClawBase';
import ClawLeft from './ClawLeft';
import ClawRight from './ClawRight';
import PizzaPile from './PizzaPile';
import Table from './Table';



const StyledScene = styled(animated.div)`
    position: relative;
    //overflow: hidden;
    width: ${props => (props.scenewidth ? props.scenewidth : "auto")};
    height: ${props => (props.sceneweight ? props.sceneweight : "auto")};
    //background-color: #000;
    background-color: red;
    
`

const Scene = ({...props}) => {
  
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
      <StyledScene style={fade} {...props}>
        <Backdrop backWidth={props.scenewidth} backHeight={props.sceneweight} />
        <PizzaPile/>
        <Table/>
        {/* Claw */}
        <ClawBase />
        <ClawLeft />
        <ClawRight />
      </StyledScene>
  );
}

export default Scene;
