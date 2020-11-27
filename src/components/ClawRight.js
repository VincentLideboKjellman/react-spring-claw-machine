import React from 'react'
import styled from 'styled-components'
import clawRight from '../assets/images/Claw_Arm_Right.png'

const StyledClawRight = styled.div`
  position: absolute;
  overflow: hidden;
  top: ${(props) => (props.top ? props.top : '210px')};
  right: ${(props) => (props.right ? props.right : '31%')};
  transform: rotate(${(props) => (props.rotate ? props.rotate : '0deg')});
  z-index: 9;

  img {
    width: 50%;
  }
`

const ClawRight = ({ ...props }) => {
  return (
    <StyledClawRight {...props}>
      <img src={clawRight} alt="Claw Right"></img>
    </StyledClawRight>
  )
}

export default ClawRight
