import React from 'react';
import styled from 'styled-components';
import clawLeft from '../assets/images/Claw_Arm_Left.png';

const StyledClawLeft = styled.div`
position: absolute;
overflow: hidden;
top: 210px;
right: 41%;

img{
    width: 60%;
}

`

const ClawLeft = () => {
  return (
    <StyledClawLeft>
      <img src={clawLeft} alt="Claw Left"></img>
    </StyledClawLeft>
  );
}

export default ClawLeft;
