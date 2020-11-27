import React from 'react'
import styled from 'styled-components'
import singlePizza from '../assets/images/SingleBox.png'

const StyledSinglePizza = styled.div`
  position: absolute;
  overflow: hidden;
  top: 250px;
  right: 45%;
  transform: rotate(-40deg);
  z-index: 5;

  img {
    width: 60%;
  }
`

const SinglePizza = () => {
  return (
    <StyledSinglePizza>
      <img src={singlePizza} alt="Claw Left"></img>
    </StyledSinglePizza>
  )
}

export default SinglePizza
