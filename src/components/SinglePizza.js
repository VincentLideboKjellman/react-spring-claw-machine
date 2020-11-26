import React from 'react';
import styled from 'styled-components';
import singlePizza from '../assets/images/SingleBox.png';

const StyledSinglePizza = styled.div`
position: absolute;
overflow: hidden;
top: 750px;
right: 45%;
z-index: 100;
transform: rotate(-40deg);

img{
    width: 60%;
}

`

const SinglePizza = () => {
  return (
    <StyledSinglePizza>
      <img src={singlePizza} alt="Claw Left"></img>
    </StyledSinglePizza>
  );
}

export default SinglePizza;
