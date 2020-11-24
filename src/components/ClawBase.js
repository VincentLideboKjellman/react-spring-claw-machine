import React from 'react';
import styled from 'styled-components';
import clawBase from '../assets/images/Claw_Base.png';

const StyledClawBase = styled.div`
position: absolute;
overflow: hidden;
top: -1500px;
left: 47%;

img{
    width: 60%;
}

`

const ClawBase = () => {
  return (
    <StyledClawBase>
      <img src={clawBase} alt="Claw Base"></img>
    </StyledClawBase>
  );
}

export default ClawBase;
