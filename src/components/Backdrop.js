import React from 'react'
import styled from 'styled-components'
import yellowBackdrop from '../assets/images/Yellow_Backdrop.png'

const StyledBackdrop = styled.div`
  img {
    position: absolute;
    width: ${(props) => (props.backwidth ? props.backwidth : 'auto')};
    height: ${(props) => (props.backweight ? props.backweight : 'auto')};
  }
`

const Backdrop = ({ ...props }) => {
  return (
    <StyledBackdrop {...props}>
      <img src={yellowBackdrop} alt="Yellow Backdrop"></img>
    </StyledBackdrop>
  )
}

export default Backdrop
