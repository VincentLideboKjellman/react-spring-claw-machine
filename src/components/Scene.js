import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Backdrop from './Backdrop';
import ClawBase from './ClawBase';
import ClawLeft from './ClawLeft';
import ClawRight from './ClawRight';
import PizzaPile from './PizzaPile';
import Table from './Table';



const StyledScene = styled(animated.div)`
    position: relative;
    //overflow: hidden;
    width: ${props => (props.scenewidth ? props.scenewidth : "auto")};
    height: ${props => (props.sceneweight ? props.sceneweight : "auto")};
    background-color: #000;

    .claw-machine{
      // position: absolute;
      // z-index: 2;
      // top: 0;
      // left:0;
    }
`

const Scene = ({...props}) => {

  let [isPressed, setPressed] = useState(false);
  
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    }
  });

  //Back and forth moving animation
  const repeat = useSpring({
    from: { 
      transform: 'translate3d(0%,0,0)'
     },
    to: async next => {
      while (!isPressed) {
        await next({ transform: 'translate3d(20%,0,0)' })
        await next({ transform: 'translate3d(0%,0,0)' })
        await next({ transform: 'translate3d(-20%,0,0)' })
        await next({ transform: 'translate3d(0%,0,0)' })
      }
    },
    config: {
      mass: 100, tension: 580, friction: 200,
    },
  })

  //lower/up the claw
  const lowerClaw = useSpring({
    transform: isPressed ? 'translate3d(0,500px,0)' : 'translate3d(0, 0px, 0)',
    config: {
      mass: 100, tension: 580, friction: 200,
    },
  });

  //Grip Claw NOT DONE
  const movingShake = useSpring({
    transform: isPressed ? 'transform: rotate(0deg)' : 'transform: rotate(20deg)',
    config: {
      mass: 100, tension: 580, friction: 200,
    },
  });

  //Shake animation
  //Grip Claw
  //Pizza grabbed

console.log(isPressed);


  return (
    <>
      <StyledScene style={fade} {...props}>
        <Backdrop backWidth={props.scenewidth} backHeight={props.sceneweight} />
        <PizzaPile/>
        <Table/>
        {/* Claw */}
        <animated.div className="claw-machine">
          <ClawBase/>
          <animated.div style={gripClawLeft} className="claws">
            <ClawLeft/>
            <ClawRight />
          </animated.div>
        </animated.div>
      </StyledScene>
        <button style={{position:"absolute", top:0, color: "red", zIndex: "20"}} onClick={() => setPressed(isPressed = true)}>OFF</button>
        <button style={{position:"absolute", top:20, color: "green", zIndex: "20"}} onClick={() => setPressed(isPressed = false)}>ON</button>
      </>
  );
}

export default Scene;
