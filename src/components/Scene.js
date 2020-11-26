import React, { useState, useRef } from 'react';
import { useSpring, animated, config, useChain, useTransition } from 'react-spring';
import styled from 'styled-components';
import Backdrop from './Backdrop';
import ClawBase from './ClawBase';
import ClawLeft from './ClawLeft';
import ClawRight from './ClawRight';
import PizzaPile from './PizzaPile';
import SinglePizza from './SinglePizza';
import Table from './Table';



const StyledScene = styled(animated.div)`
    position: relative;
    //overflow: hidden;
    width: ${props => (props.scenewidth ? props.scenewidth : "auto")};
    height: ${props => (props.sceneweight ? props.sceneweight : "auto")};
    background-color: #000;

    .claw-machine{
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width:100%;
    }
    .pizza-box{
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      width:100%;
    }
`

const Scene = ({...props}) => {

  let [isPressed, setPressed] = useState(false);
  let [togglePizza, setTogglePizza] = useState(false);

  
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    }
  });

  // Claw Moving animation
  const repeat = useSpring({
    from: {
      top:"0px",
      left: "0px"
     },
    to: async next => {
      while (!isPressed) {
        await next({ left: "200px" })
        await next({ left: "0px" })
        await next({ left: "-200px" })
        await next({ left: "0px" })
      }if(isPressed){
        await next({ left: "0px" })
        await next({ top: "600px"})
        await next({ top: "450px"})
        setTogglePizza(true);
        await next({ top: "0px"})
      }
    },
    config: {
      mass: 50, tension: 580, friction: 200,
    },
  })

  //TODO: Might need to do interpolation
  const spawnPizza = useSpring({
    from: {
      top: "0px",
      opacity: 0,
    },
    to: async next => {
      if(togglePizza){
        await next ({ opacity: 1 })
        await next ({ top: "-100px" })
        await next ({ top: "-600px" })
      }
    },
    config: {
      mass: 50, tension: 580, friction: 200,
    },
  });

 
  
  //Shake animation
  //Grip Claw
  //Pizza grabbed
  //Camera shake when starting

console.log(isPressed);

  return (
    <>
      <StyledScene style={fade} {...props}>
        <Backdrop backWidth={props.scenewidth} backHeight={props.sceneweight} />
        <PizzaPile/>
        <Table/>
        {/* Claw */}
        <animated.div style={repeat} className="claw-machine">
          <ClawBase/>
          <animated.div className="claws">
            <ClawLeft/>
            <ClawRight />
          </animated.div>
        </animated.div>
        <animated.div style={spawnPizza} className="pizza-box">
          <SinglePizza  />
        </animated.div>
      </StyledScene>
        <button style={{position:"absolute", top:0, color: "red", zIndex: "20"}} onClick={() => setPressed(isPressed = true)}>OFF</button>
        <button style={{position:"absolute", top:20, color: "green", zIndex: "20"}} onClick={() => setPressed(isPressed = false)}>ON</button>
      </>
  );
}

export default Scene;






  //INTERPOLATION 
  //<animated.div style={{transform: xyz.interpolate((x, y, z) => `translate3d(${x}%, ${y}px, ${z}px)`),}} className="claw-machine">
  // const {xyz} = useSpring({
  //   from: {xyz: [0, 0, 0]
  //   },
  //   to: async next => {
  //     while (!isPressed) {
  //       await next({ xyz: [20, 0, 0]})
  //       await next({ xyz: [0, 0, 0]})
  //       await next({ xyz: [-20, 0, 0]})
  //       await next({ xyz: [0, 0, 0]})
  //     }
  //   },
  //   config: {
  //     mass: 100, tension: 580, friction: 200
  //   },
  // })


         //await next({ transform: 'translate3d(-15%,0,0)' })
        //await next({ transform: 'translate3d(0%,0,0)' })



  // const lowerClaw = useSpring({
  //   transform: isPressed ? 'translate3d(0,500px,0)' : 'translate3d(0, 0px, 0)',
  //   config: {
  //     mass: 100, tension: 580, friction: 200,
  //   },
  // });

   // Makes the claw go down
  //  const downUp = useSpring({
  //   from: {
  //     top: "0px"
  //   },
  //   to: { 
  //     top: "600px"
  //   },
  //   config: {
  //     mass: 50, tension: 580, friction: 200,
  //   },
  // })