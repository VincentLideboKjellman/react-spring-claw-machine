import React from 'react';
import styled from 'styled-components';
import clawLeft from '../assets/images/Claw_Arm_Left.png';

const StyledClawLeft = styled.div`
position: absolute;
overflow: hidden;
top: ${props => (props.top ? props.top : "210px")};
right: ${props => (props.right ? props.right : "39%")};
transform: rotate(${props => (props.rotate ? props.rotate : "0deg")});
z-index: 4;

img{
    width: 50%;
}

`

const ClawLeft = ({...props}) => {
  return (
    <StyledClawLeft {...props}>
      <img src={clawLeft} alt="Claw Left"></img>
    </StyledClawLeft>
  );
}

export default ClawLeft;
