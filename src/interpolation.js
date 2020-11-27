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