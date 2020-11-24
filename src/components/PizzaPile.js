import React from 'react';
import styled from 'styled-components';
import pizzaPile from '../assets/images/PizzaPile.png';

const StyledPizzaPile = styled.div`
position: absolute;
z-index: 1;
img{
  width: 100%;
  height:auto;
}
`

const PizzaPile = () => {
  return (
    <StyledPizzaPile>
      <img src={pizzaPile} alt="Pizza Pile"></img>
    </StyledPizzaPile>
  );
}

export default PizzaPile;
