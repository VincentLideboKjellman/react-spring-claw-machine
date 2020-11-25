import React from 'react';
import styled from 'styled-components';
import clawRight from '../assets/images/Claw_Arm_Right.png';

const StyledClawRight = styled.div`
position: absolute;
overflow: hidden;
top: 210px;
right: 31%;


img{
    width: 60%;
}

`

const ClawRight = () => {
  return (
    <StyledClawRight>
      <img src={clawRight} alt="Claw Right"></img>
    </StyledClawRight>
  );
}

export default ClawRight;
