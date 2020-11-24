import React from 'react';
import styled from 'styled-components';
import yellowBackdrop from '../assets/images/Yellow_Backdrop.png';

const StyledBackdrop = styled.div`
`

const Backdrop = ({...props}) => {
  return (
    <StyledBackdrop {...props}>
      <img src={yellowBackdrop} alt="Yellow Backdrop"></img>
    </StyledBackdrop>
  );
}

export default Backdrop;
