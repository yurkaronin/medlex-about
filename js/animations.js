/* SVG */

/* SVG main 1 */
TweenLite.defaultEase = Power0.easeNone;
const cloud1 = document.getElementById("s1-cloud-1");
const cloud2 = document.getElementById("s1-cloud-2");
const cloud3 = document.getElementById("s1-cloud-3");
const cloud4 = document.getElementById("s1-cloud-4");
const cloud5 = document.getElementById("s1-cloud-5");
const cloud6 = document.getElementById("s1-cloud-6");
const drop1 = document.getElementById("s1-drop");
const mainBottle1 = document.getElementById("s1-bottle-1");
const mainBottle2 = document.getElementById("s1-bottle-2");
const mainBottle2Wave = document.getElementById("s1-bottle-2-wave");
const mainBottle3 = document.getElementById("s1-bottle-3");
const loader = document.getElementById("s1-loader");
const loaderClaw = document.getElementById("s1-loader-claw");
const apparatus = document.getElementById("s1-apparatus");
const giftBox = document.getElementById("s1-gift-box");


const conveyorPart1 = document.getElementById("s1-conveyor-part-1");
const conveyorPart2 = document.getElementById("s1-conveyor-part-2");
const conveyorPart3 = document.getElementById("s1-conveyor-part-3");
const tube1 = document.getElementById("s1-test-tube-1");
const tube2 = document.getElementById("s1-test-tube-2");
const tube3 = document.getElementById("s1-test-tube-3");
const conveyorDetail1 = document.getElementById("s1-conveyor-detail-1");
const conveyorDetail2 = document.getElementById("s1-conveyor-detail-2");
const conveyorDetail3 = document.getElementById("s1-conveyor-detail-3");
const boxes = document.getElementById("s1-boxes");

const mainStage1 = new TimelineMax({
  repeat: -1,
  paused: 0
});

const mainStage2 = new TimelineMax({
  repeat: -1,
  paused: 0
});
const mainStage3 = new TimelineMax({
  repeat: -1,
  paused: 0
});

/* SVG main 2 */
const tl1 = gsap.timeline({
  defaults: {
    duration: 2.5,
    ease: "none"
  }
});
const tl2 = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "none"
  }
});
const tl3 = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "none"
  }
});
const tl4 = new TimelineMax({
  repeat: -1,
  repeatDelay: 2
});
const tl5 = new TimelineMax({
  repeat: -1,
  paused: 0
});
const tl6 = gsap.timeline({
  defaults: {
    duration: 0.3
  }
});
const tl7 = new TimelineMax({
  repeat: -1,
  repeatDelay: 1
});
const tl8 = new TimelineMax({
  repeat: -1,
  repeatDelay: 1
});
const conveyor = new TimelineMax({
  repeat: -1,
  paused: 0
});
const stage1 = new TimelineMax({
  repeat: -1,
  paused: 0
});
const bottle1 = document.getElementById("s2-bottle-1");
const bottle2 = document.getElementById("s2-bottle-2");
const bottle3 = document.getElementById("s2-bottle-3");
const bottle4 = document.getElementById("s2-bottle-4");
const wave2 = document.getElementById("s2-wave-2");
const drop2 = document.getElementById("s2-drop-2");

tl1.to("#s2-wave-1", {
  x: 100,
  repeat: -1
});

tl2
  .to("#s2-bubble-1", {
    y: -40,
    repeat: -1
  })
  .to("#s2-bubble-2", {
    y: -40,
    repeat: -1
  }, "-=.25")
  .to("#s2-bubble-3", {
    y: -40,
    repeat: -1
  }, "-=.4")
  .to('#s1-air-line', 7, {
    'stroke-dashoffset': 0,
  }, .6)
  .to('#s1-air-line-overlay', 7, {
    'stroke-dashoffset': 0,
  });

tl3.to("#s2-drop-1", {
  y: 83,
  repeat: -1
});

tl4.fromTo(
  "#s2-regularot",
  3, {
    y: "0",
  }, {
    y: "-=23",
    yoyo: true,
    repeat: 10,
  }
);

tl5.to("#s2-fire", 0, {
    delay: 0.1,
    scaleX: -1,
    transformOrigin: "50% 0"
  })
  .to("#s2-fire", 0, {
    delay: 0.1,
    scaleX: 1,
    transformOrigin: "50% 0"
  });

conveyor.to(drop2, 0.3, {
    y: 32,
    repeat: 4
  })
  .to(wave2, 1.2, {
    x: 174,
    y: -55
  }, 0)
  .to(wave2, 0.1, {
    opacity: 0
  }, 1.1)
  .to(bottle2, 0.6, {
    fill: "#1692D0"
  }, 0.6)
  .to([bottle1, bottle2, bottle3, bottle4], 0.5, {
    x: -120
  }, 1.6)
  .to(bottle1, 0.2, {
    opacity: 0
  }, 1.6)
  .to(bottle4, 0.2, {
    opacity: 1
  }, 1.6);

/* Main svg */
mainStage1
  .to(drop1, 0.2, {
    y: 53,
    ease: Power2.easeIn
  })
  .to(drop1, 0, {
    opacity: 0
  })
  .to(mainBottle2Wave, 0.2, {
    y: -19
  }, 0.2)
  .to(
    mainBottle1,
    0.8, {
      motionPath: {
        path: [{
            x: 10,
            y: -10
          },
          {
            x: 31,
            y: -6
          },
          {
            x: 48,
            y: 30
          },
        ],
      },
    },
    0.3
  )
  .to([mainBottle2, mainBottle3], 0.8, {
    x: 29
  }, 0.3)
  .to(cloud1, 0.1, {
    opacity: 1
  }, 0)
  .to(cloud2, 0.1, {
    opacity: 1
  }, 0.1)
  .to(cloud3, 0.1, {
    opacity: 1
  }, 0.2)
  .to(cloud4, 0.1, {
    opacity: 1
  }, 0.3)
  .to(cloud5, 0.1, {
    opacity: 1
  }, 0.4)
  .to(cloud6, 0.1, {
    opacity: 1
  }, 0.5)

  .to(cloud1, 0.1, {
    opacity: 0
  }, 0.6)
  .to(cloud2, 0.1, {
    opacity: 0
  }, 0.7)
  .to(cloud3, 0.1, {
    opacity: 0
  }, 0.8)
  .to(cloud4, 0.1, {
    opacity: 0
  }, 0.9)
  .to(cloud5, 0.1, {
    opacity: 0
  }, 0.1)
  .to(cloud6, 0.1, {
    opacity: 0
  }, 0.11);

mainStage2
  .to([loader, apparatus, giftBox], 1.5, {
    x: 143
  })
  .to([loaderClaw, apparatus, giftBox], 0.25, {
    y: -20
  }, 0.55)
  .to(loader, 1.7, {
    x: 0
  }, 1.7)
  .to(loaderClaw, 0.25, {
    y: 0
  }, 2.15);

mainStage3
  .to([conveyorPart3, conveyorPart2, conveyorPart1], 1.3, {
    x: 64,
    y: 28
  }, 0)
  .to(tube3, 0.5, {
    y: 64
  }, 1.3)
  .to(tube2, 0.5, {
    y: 68
  }, 1.3)
  .to(tube1, 0.5, {
    y: 72
  }, 1.3)
  .to(
    [conveyorDetail1, conveyorDetail2, conveyorDetail3],
    0.1, {
      y: "-=5"
    },
    1.3
  )
  .to([boxes, tube3, tube2, tube1], 0.5, {
    x: 38
  }, 2);



// ?????????? ????????????????

// ???????????????? ???????????????????????? ????????????????????????
const supplyAnimation = new TimelineMax({
  repeat: -1,
  paused: 0
});
const supplyStage1 = new TimelineMax({
  repeat: -1,
  paused: 0
});
const supplyStage2 = new TimelineMax({
  repeat: -1,
  paused: 0
});
const supplyStage3 = new TimelineMax({
  repeat: -1,
  paused: 0
});
const supplyStage4 = new TimelineMax({
  repeat: -1,
  paused: 0
});

const platform = document.getElementById("s3-platform");
const platformCLaw1 = document.getElementById("s3-platform-claw-1");
const platformCLaw2 = document.getElementById("s3-platform-claw-2");
const supplyLoader = document.getElementById("s3-loader");
const clawLoader = document.getElementById("s3-loader-claw");
const platformApparatus = document.getElementById("s3-apparatus");

supplyAnimation
  .to(platformApparatus, 0.5, {
    y: 109
  })
  .to([platform, platformApparatus], 1, {
    x: 34
  }, 0.5)
  .to([platformCLaw1, platformCLaw2, platformApparatus], 1, {
    y: "+=160"
  }, 1.5)
  .to(platformCLaw1, 0.3, {
    x: -4
  }, 2.5)
  .to(platformCLaw2, 0.3, {
    x: 4
  }, 2.5)
  .to([platformCLaw1, platformCLaw2], 0.6, {
    y: 0
  }, 2.75)
  .to(platform, 1, {
    x: 0
  }, 2.75)
  .to([platformCLaw1, platformCLaw2], 0.3, {
    x: 0
  }, 2.8)
  .to([supplyLoader, platformApparatus], 1, {
    x: "+=140"
  }, 2.8)
  .to([clawLoader, platformApparatus], 1, {
    y: "-=15"
  }, 2.8)
  .to(supplyLoader, 1, {
    x: 0
  }, 3.8)
  .to(clawLoader, 1, {
    y: 0
  }, 3.8)

// ???????????????? ?????????????????????????? ????????????????????????
const labAnim1 = new TimelineMax({
  repeat: -1,
  paused: 0
});
const labAnim2 = new TimelineMax({
  repeat: -1,
  paused: 0
});
const labAnim3 = new TimelineMax({
  repeat: -1,
  paused: 0
});

const labBottles = document.getElementById("s4-bottles");
const labBottle1 = document.getElementById("s4-bottle-1");
const labBoxBottle1 = document.getElementById("s4-bottle-in-box-1");
const labBoxBottle2 = document.getElementById("s4-bottle-in-box-2");
const labSwitch1 = document.getElementById("s4-switch-1");
const labSwitch2 = document.getElementById("s4-switch-2");
const labBoxes = document.getElementById("s4-boxes");
const labBox1 = document.getElementById("s4-box-3");
const labBoxLeft = document.getElementById("s4-box-3-part-left");
const labBoxRight = document.getElementById("s4-box-3-part-right");
const labPackage = document.getElementById("s4-packed-boxes");
const labBox2 = document.getElementById("s4-packed-box-1");
const labBox3 = document.getElementById("s4-packed-box-3");


labAnim1
  .to(labBottles, 0.5, {
    x: -88
  })
  .to(labBottle1, 0.5, {
    fill: "#1692D0"
  }, 0)
  .to(labSwitch1, 0.2, {
    rotation: 90,
    transformOrigin: "50% 50%"
  }, 0.7)
  .to(labBottle1, 0.2, {
    y: 30
  }, 0.9)
  .to(labSwitch1, 0.2, {
    rotation: 0,
    transformOrigin: "50% 50%"
  }, 1.2),

  labAnim2
  .to([labBoxes, labBox1, labBoxBottle1], 0.5, {
    x: "+=88"
  }, 0)
  .to(labSwitch2, 0.2, {
    rotation: 90,
    transformOrigin: "50% 50%"
  }, 0.7)
  .to([labBox1, labBoxBottle1], 0.2, {
    y: 28
  }, 0.9)
  .to(labBoxLeft, 0.3, {
    rotation: 118,
    transformOrigin: "100% 98%"
  }, 0.9)
  .to(labBoxRight, 0.3, {
    rotation: -118,
    transformOrigin: "-5% 100%"
  }, 0.9)
  .to(labBoxBottle2, 0.2, {
    y: 80
  }, 1)
  .to(labSwitch2, 0.2, {
    rotation: 0,
    transformOrigin: "50% 50%"
  }, 1.2),

  labAnim3
  .to(labPackage, 0.5, {
    x: -88
  }, 0)
  .to(labBox2, 0.5, {
    opacity: 0
  }, 0)
  .to(labBox3, 0.4, {
    y: 123
  }, 1)


/* SVG 8 March */
const EightMarchNumb = document.getElementById("s1-num8");

const baloon = document.getElementById("s1-balloon");

const conffeti1 = document.getElementById("s1-confetti1");
const conffeti2 = document.getElementById("s1-confetti2");
const conffeti3 = document.getElementById("s1-confetti3");
const conffeti4 = document.getElementById("s1-confetti4");
const conffeti5 = document.getElementById("s1-confetti5");
const conffeti6 = document.getElementById("s1-confetti6");
const conffeti7 = document.getElementById("s1-confetti7");
const conffeti8 = document.getElementById("s1-confetti8");

const flower1 = document.getElementById("s1-flower-1");
const flower2 = document.getElementById("s1-flower-2");
const flower3 = document.getElementById("s1-flower-3");
const flower4 = document.getElementById("s1-flower-4");
const flower5 = document.getElementById("s1-flower-5");
const flower6 = document.getElementById("s1-flower-6");
const flower7 = document.getElementById("s1-flower-7");

const EightMarch1 = new TimelineMax({
  repeat: -1,
  yoyo: true,
  ease: "back.out(1.7)"
});
var flyAnimation = new TimelineMax({
  repeat: -1,
  paused: 0
});

const rotationAnim = 0.1;

EightMarch1.to(EightMarchNumb, 2, {
  y: -10,
  rotation: rotationAnim
}, 0);


/**
 * START THEME "9 MAY"
 */

if (document.querySelector('.svg-wrapper_main_scene1--9may')) {
  const MayNinth = new TimelineMax({
    repeat: -1,
    paused: 0
  });

  const MayNinth2 = new TimelineMax({
    repeat: -1,
    paused: 0
  });


  const fireworksWhite1 = document.getElementById("s1-fireworks-white-1");
  const fireworksWhite2 = document.getElementById("s1-fireworks-white-2");
  const fireworksWhite3 = document.getElementById("s1-fireworks-white-3");
  const fireworksWhite4 = document.getElementById("s1-fireworks-white-4");
  const fireworksWhite5 = document.getElementById("s1-fireworks-white-5");
  const fireworksWhite6 = document.getElementById("s1-fireworks-white-6");
  const fireworksWhite7 = document.getElementById("s1-fireworks-white-7");
  const fireworksWhite8 = document.getElementById("s1-fireworks-white-8");
  const fireworksWhite9 = document.getElementById("s1-fireworks-white-9");
  const fireworksWhite10 = document.getElementById("s1-fireworks-white-10");

  const fireworks1 = document.getElementById("s1-fireworks-1");
  const fireworks2 = document.getElementById("s1-fireworks-2");
  const fireworks3 = document.getElementById("s1-fireworks-3");
  const fireworks4 = document.getElementById("s1-fireworks-4");
  const fireworks5 = document.getElementById("s1-fireworks-5");
  const fireworks6 = document.getElementById("s1-fireworks-6");
  const fireworks7 = document.getElementById("s1-fireworks-7");
  const fireworks8 = document.getElementById("s1-fireworks-8");
  const fireworks9 = document.getElementById("s1-fireworks-9");
  const fireworks10 = document.getElementById("s1-fireworks-10");

  TweenMax.set([
    fireworksWhite1,
    fireworksWhite2,
    fireworksWhite3,
    fireworksWhite4,
    fireworksWhite5,
    fireworksWhite6,
    fireworksWhite7,
    fireworksWhite8,
    fireworksWhite9,
    fireworksWhite10,
  ], {
    scale: 0,
    transformOrigin: '50% 50%',
  });

  TweenMax.set([
    fireworks1,
    fireworks2,
    fireworks3,
    fireworks4,
    fireworks5,
    fireworks6,
    fireworks7,
    fireworks8,
    fireworks9,
    fireworks10,
  ], {
    scale: 0.5,
    opacity: 0,
    transformOrigin: '50% 50%',
  });


  const timeline12 = new TimelineMax({
    repeat: -1,
    paused: 0
  });

  const flag1Substrate = document.getElementById("s1-flag-1-substrate");
  const flag2Substrate = document.getElementById("s1-flag-2-substrate");

  MayNinth2.to(flag1Substrate, 0.5, {
      x: -2,
      repeat: -1,
      yoyo: true,
    }, 0.25)

    .to(flag2Substrate, 0.5, {
      x: -2,
      repeat: -1,
      yoyo: true,
    }, '=-0.7')

  MayNinth

    .to(fireworks5, 0.5, {
      scale: 1,
      opacity: 1,
    })

    .to(fireworksWhite5, 0.5, {
      scale: 1,
    }, '=-0.3')

    .to(fireworks5, 0.5, {
      scale: 1,
      opacity: 1,
    }, 0.25)

    .to(fireworksWhite4, 0.5, {
      scale: 1,
    }, '=-0.3')

    .to(fireworks6, 0.5, {
      scale: 1,
      opacity: 1,
    }, 0.5)

    .to(fireworksWhite6, 0.5, {
      scale: 1,
    }, '=-0.3')

    .to(fireworks3, 0.5, {
      scale: 1,
      opacity: 1,
    }, 0.75)

    .to(fireworksWhite3, 0.5, {
      scale: 1,
    }, '=-0.3')

    .to(fireworks7, 0.5, {
      scale: 1,
      opacity: 1,
    }, 1)

    .to(fireworksWhite7, 0.5, {
      scale: 1,
    }, '=-0.3')

    .to(fireworks2, 0.5, {
      scale: 1,
      opacity: 1,
    }, 1.25)

    .to(fireworksWhite2, 0.5, {
      scale: 1,
    }, '=-0.3')

    .to(fireworks8, 0.5, {
      scale: 1,
      opacity: 1,
    }, 1.50)

    .to(fireworksWhite8, 0.5, {
      scale: 1,
    }, '=-0.3')

    .to(fireworks1, 0.5, {
      scale: 1,
      opacity: 1,
    }, 1.75)

    .to(fireworksWhite1, 0.5, {
      scale: 1,
    }, '=-0.3')

    .to(fireworks9, 0.5, {
      scale: 1,
      opacity: 1,
    }, 2)

    .to(fireworksWhite9, 0.5, {
      scale: 1,
    }, '=-0.3')

    .to(fireworks10, 0.5, {
      scale: 1,
      opacity: 1,
    }, 2.25)

    .to(fireworksWhite10, 0.5, {
      scale: 1,
    }, '=-0.3');


};

/**
   * END THEME "9 MAY"
   */


TweenMax.set(baloon, {
  xPercent: -50,
  yPercent: -50,
  rotation: rotationAnim,
});

flyAnimation.to(baloon, 40, {

    motionPath: {
      type: "cubic",
      path: [{
          x: 145,
          y: 85,
          rotation: rotationAnim
        },
        {
          x: 205,
          y: 88,
          rotation: rotationAnim
        },
        {
          x: 309,
          y: 115,
          rotation: rotationAnim
        },
        {
          x: 350,
          y: 115,
          rotation: rotationAnim
        },
        {
          x: 409,
          y: 115,
          rotation: rotationAnim
        },
        {
          x: 540,
          y: 90,
          rotation: rotationAnim
        },
        {
          x: 600,
          y: 90.75,
          rotation: rotationAnim
        },
        {
          x: 659,
          y: 90,
          rotation: rotationAnim
        },
        {
          x: 791,
          y: 115,
          rotation: rotationAnim
        },
        {
          x: 850.5,
          y: 115,
          rotation: rotationAnim
        },
        {
          x: 909,
          y: 115,
          rotation: rotationAnim
        },
        {
          x: 1099,
          y: 58,
          rotation: rotationAnim
        },
        {
          x: 1099,
          y: 103.25,
          rotation: rotationAnim
        },
        {
          x: 1099,
          y: 148.5,
          rotation: rotationAnim
        },
        {
          x: 909,
          y: 90,
          rotation: rotationAnim
        },
        {
          x: 850.5,
          y: 90,
          rotation: rotationAnim
        },
        {
          x: 791,
          y: 90,
          rotation: rotationAnim
        },
        {
          x: 659,
          y: 115,
          rotation: rotationAnim
        },
        {
          x: 600,
          y: 115,
          rotation: rotationAnim
        },
        {
          x: 540,
          y: 115,
          rotation: rotationAnim
        },
        {
          x: 409,
          y: 90,
          rotation: rotationAnim
        },
        {
          x: 350,
          y: 90,
          rotation: rotationAnim
        },
        {
          x: 291,
          y: 90,
          rotation: rotationAnim
        },
        {
          x: 98,
          y: 147,
          rotation: rotationAnim
        },
        {
          x: 98,
          y: 102,
          rotation: rotationAnim
        },
        {
          x: 98,
          y: 88,
          rotation: rotationAnim
        },
        {
          x: 117,
          y: 84,
          rotation: rotationAnim
        },
        {
          x: 145,
          y: 85,
          rotation: rotationAnim
        },
      ],
    },
  }),

  // ?????????????????? TweenLite 

  // ?????????????????????????? ???????????????? ???????? ?????????????????????????????? ?????????????? ??? ???? ????????????????, ???????????????? to() ?????????????? ?????????????????????????????????? ?? ?????????? ???????????????????? ???????????????? ????????????. 
  TweenMax.set(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ], {
      scaleX: 0.5,
      scaleY: 0.5,
      transformOrigin: "50% 50%"
    }
  ),


  // ?????????????????? ??????????  
  new TimelineMax({
    repeat: -1,
    paused: 0
  })
  
  .staggerTo(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
    ],
    0.5, {
      opacity: 1
    },
    0.25,
    3
  )
  .staggerTo(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
    ],
    2, {
      scaleX: 1,
      scaleY: 1
    },
    0.25,
    3
  )
  .staggerTo(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
    ],
    4, {
      x: gsap.utils.wrap([-140, -100, -60, -20]),
      y: gsap.utils.wrap([220, 240, 220, 240])
    },
    0.25,
    3
  )
  .staggerTo(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
    ],
    1, {
      opacity: 0,
    },
    0.25,
    10
  )
  .to(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
    ],
    0, {
      x: -100,
      y: 0,
      scaleX: 0.5,
      scaleY: 0.5,
      rotationY: 180
    },
    11.75
  )

  .staggerTo(
    [
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ],
    0.5, {
      opacity: 1
    },
    0.25,
    7
  )
  .staggerTo(
    [
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ],
    2, {
      scaleX: 1,
      scaleY: 1
    },
    0.25,
    7
  )
  .staggerTo(
    [
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ],
    4, {
      x: gsap.utils.wrap([-140, -100, -60, -20]),
      y: gsap.utils.wrap([220, 240, 220, 240])
    },
    0.25,
    7
  )
  .staggerTo(
    [
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ],
    1, {
      opacity: 0
    },
    0.25,
    9
  )
  .to(
    [
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ],
    0, {
      x: -150,
      y: 0,
      scaleX: 0.5,
      scaleY: 0.5,
      rotationY: 180
    },
    18.75
  )
  .staggerTo(
    [
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ],
    0.5, {
      // opacity: 1
    },
    0.25,
    27
  )
  .staggerTo(
    [
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ],
    2, {
      scaleX: 1,
      scaleY: 1
    },
    0.25,
    27
  )
  .staggerTo(
    [
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ],
    4, {
      x: gsap.utils.wrap([-10, -50, -90, -130]),
      y: gsap.utils.wrap([220, 240, 220, 240])
    },
    0.25,
    27
  )
  .staggerTo(
    [
      conffeti5,
      conffeti6,
      conffeti7,
      conffeti8,
    ],
    1, {
      opacity: 0
    },
    0.25,
    30
  )
  .staggerTo(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
    ],
    0.5, {
      // opacity: 1
    },
    0.25,
    33
  )
  .staggerTo(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
    ],
    2, {
      scaleX: 1,
      scaleY: 1
    },
    0.25,
    33
  )
  .staggerTo(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
    ],
    4, {
      x: gsap.utils.wrap([-140, -100, -60, -20]),
      y: gsap.utils.wrap([220, 240, 220, 240])
    },
    0.25,
    33
  )
  .staggerTo(
    [
      conffeti1,
      conffeti2,
      conffeti3,
      conffeti4,
    ],
    1, {
      opacity: 0
    },
    0.25,
    36
  )
  .to({}, 2.25, {}),
  TweenMax.staggerTo(
    [
      flower1,
      flower2,
      flower3,
      flower4,
      flower5,
      flower6,
      flower7,
    ],
    1, {
      y: -3,
      repeat: -1,
      yoyo: 0,
      paused: 0
    },
    0.25
  );


// 23 ?????????????? 
webpackJsonp([5], {
  244: function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    i(636);

    function s() {}
    s.init = function () {
      TweenLite.defaultEase = Power0.easeNone;
      var t = document.getElementById("s1-cloud-1"),
        e = document.getElementById("s1-cloud-2"),
        i = document.getElementById("s1-cloud-3"),
        r = document.getElementById("s1-cloud-4"),
        n = document.getElementById("s1-cloud-5"),
        a = document.getElementById("s1-cloud-6"),
        o = document.getElementById("s1-drop"),
        l = document.getElementById("s1-bottle-1"),
        h = document.getElementById("s1-bottle-2"),
        u = document.getElementById("s1-bottle-2-wave"),
        _ = document.getElementById("s1-bottle-3"),
        c = document.getElementById("s1-loader"),
        f = document.getElementById("s1-loader-claw"),
        p = document.getElementById("s1-conveyor-part-1"),
        d = document.getElementById("s1-conveyor-part-2"),
        m = document.getElementById("s1-conveyor-part-3"),
        g = document.getElementById("s1-test-tube-1"),
        y = document.getElementById("s1-test-tube-2"),
        v = document.getElementById("s1-test-tube-3"),
        x = document.getElementById("s1-conveyor-detail-1"),
        T = document.getElementById("s1-conveyor-detail-2"),
        b = document.getElementById("s1-conveyor-detail-3"),
        w = document.getElementById("s1-boxes"),
        P = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        O = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        k = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        S = document.getElementById("s2-fire"),
        R = document.getElementById("s2-regularot"),
        A = document.getElementById("s2-drop-1"),
        C = document.getElementById("s2-drop-2"),
        M = document.getElementById("s2-bubble-1"),
        D = document.getElementById("s2-bubble-2"),
        E = document.getElementById("s2-bubble-3"),
        I = document.getElementById("s2-wave-1"),
        B = document.getElementById("s2-wave-2"),
        F = document.getElementById("s2-bottle-1"),
        z = document.getElementById("s2-bottle-2"),
        X = document.getElementById("s2-bottle-3"),
        L = document.getElementById("s2-bottle-4"),
        N = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        Y = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        j = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        U = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        V = document.getElementById("s3-platform"),
        q = document.getElementById("s3-platform-claw-1"),
        W = document.getElementById("s3-platform-claw-2"),
        Z = document.getElementById("s3-loader"),
        G = document.getElementById("s3-loader-claw"),
        H = document.getElementById("s3-apparatus"),
        $ = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        Q = document.getElementById("s4-bottles"),
        J = document.getElementById("s4-bottle-1"),
        K = document.getElementById("s4-bottle-in-box-1"),
        tt = document.getElementById("s4-bottle-in-box-2"),
        et = document.getElementById("s4-switch-1"),
        it = document.getElementById("s4-switch-2"),
        st = document.getElementById("s4-boxes"),
        rt = document.getElementById("s4-box-3"),
        nt = document.getElementById("s4-box-3-part-left"),
        at = document.getElementById("s4-box-3-part-right"),
        ot = document.getElementById("s4-packed-boxes"),
        lt = document.getElementById("s4-packed-box-1"),
        ht = document.getElementById("s4-packed-box-3"),
        ut = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        _t = new TimelineMax({
          repeat: -1,
          paused: !0
        }),
        ct = new TimelineMax({
          repeat: -1,
          paused: !0
        });
      ut.to(Q, .5, {
        x: -88
      }).to(J, .5, {
        fill: "#1692D0"
      }, 0).to(et, .2, {
        rotation: 90,
        transformOrigin: "50% 50%"
      }, .7).to(J, .2, {
        y: 30
      }, .9).to(et, .2, {
        rotation: 0,
        transformOrigin: "50% 50%"
      }, 1.2), _t.to([st, rt, K], .5, {
        x: "+=88"
      }, 0).to(it, .2, {
        rotation: 90,
        transformOrigin: "50% 50%"
      }, .7).to([rt, K], .2, {
        y: 28
      }, .9).to(nt, .3, {
        rotation: 118,
        transformOrigin: "100% 98%"
      }, .9).to(at, .3, {
        rotation: -118,
        transformOrigin: "-5% 100%"
      }, .9).to(tt, .2, {
        y: 80
      }, 1).to(it, .2, {
        rotation: 0,
        transformOrigin: "50% 50%"
      }, 1.2), ct.to(ot, .5, {
        x: -88
      }, 0).to(lt, .5, {
        opacity: 0
      }, 0).to(ht, .4, {
        y: 123
      }, 1), $.to(H, .5, {
        y: 109
      }).to([V, H], 1, {
        x: 34
      }, .5).to([q, W, H], 1, {
        y: "+=160"
      }, 1.5).to(q, .3, {
        x: -4
      }, 2.5).to(W, .3, {
        x: 4
      }, 2.5).to([q, W], .6, {
        y: 0
      }, 2.75).to(V, 1, {
        x: 0
      }, 2.75).to([q, W], .3, {
        x: 0
      }, 2.8).to([Z, H], 1, {
        x: "+=140"
      }, 2.8).to([G, H], 1, {
        y: "-=15"
      }, 2.8).to(Z, 1, {
        x: 0
      }, 3.8).to(G, 1, {
        y: 0
      }, 3.8), N.to(S, 0, {
        delay: .1,
        scaleX: -1,
        transformOrigin: "50% 0"
      }).to(S, 0, {
        delay: .1,
        scaleX: 1,
        transformOrigin: "50% 0"
      }), Y.to(R, 1.5, {
        y: -21
      }, .5).to(R, .2, {
        y: 0
      }, 2.5), j.to(A, .5, {
        y: 60
      });
      var ft = TweenMax.to(E, 1, {
          y: -35,
          repeat: -1,
          paused: !0
        }),
        pt = TweenMax.to(D, 1, {
          delay: .35,
          y: -35,
          repeat: -1,
          paused: !0
        }),
        dt = TweenMax.to(M, 1, {
          delay: .7,
          y: -35,
          repeat: -1,
          paused: !0
        }),
        mt = TweenMax.to(I, 2, {
          x: 100,
          repeat: -1,
          paused: !0
        });
      U.to(C, .3, {
        y: 32,
        repeat: 4
      }).to(B, 1.2, {
        x: 174,
        y: -55
      }, 0).to(B, .1, {
        opacity: 0
      }, 1.1).to(z, .6, {
        fill: "#1692D0"
      }, .6).to([F, z, X, L], .5, {
        x: -120
      }, 1.6).to(F, .2, {
        opacity: 0
      }, 1.6).to(L, .2, {
        opacity: 1
      }, 1.6), P.to(o, .2, {
        y: 55,
        ease: Power2.easeIn
      }).to(o, 0, {
        opacity: 0
      }).to(u, .2, {
        y: -19
      }, .2).to(l, .8, {
        bezier: [{
          x: 10,
          y: -10
        }, {
          x: 31,
          y: -6
        }, {
          x: 48,
          y: 30
        }]
      }, .3).to([h, _], .8, {
        x: 29
      }, .3).to(t, .1, {
        opacity: 1
      }, 0).to(e, .1, {
        opacity: 1
      }, .1).to(i, .1, {
        opacity: 1
      }, .2).to(r, .1, {
        opacity: 1
      }, .3).to(n, .1, {
        opacity: 1
      }, .4).to(a, .1, {
        opacity: 1
      }, .5).to(t, .1, {
        opacity: 0
      }, .6).to(e, .1, {
        opacity: 0
      }, .7).to(i, .1, {
        opacity: 0
      }, .8).to(r, .1, {
        opacity: 0
      }, .9).to(n, .1, {
        opacity: 0
      }, .1).to(a, .1, {
        opacity: 0
      }, .11), O.to([c, "#s1-apparatus"], 1.7, {
        x: 141
      }).to([f, "#s1-apparatus"], .25, {
        y: -18
      }, 1).to(c, 1.7, {
        x: 0
      }, 1.7).to(f, .25, {
        y: 0
      }, 2.15), k.to([m, d, p], 1.3, {
        x: 64,
        y: 28
      }, 0).to(v, .5, {
        y: 63
      }, 1.3).to(y, .5, {
        y: 67
      }, 1.3).to(g, .5, {
        y: 71
      }, 1.3).to([x, T, b], .1, {
        y: "-=5"
      }, 1.3).to([w, v, y, g], .5, {
        x: 38
      }, 2), TweenMax.set("#s1-aircraft", {
        top: "50%",
        left: "50%",
        yPercent: 50,
        transformOrigin: "50% 50%",
        rotation: 25,
        scaleX: .1,
        scaleY: .1,
        opacity: 0
      }), TweenMax.set(["#s1-gift-1-parachute", "#s1-gift-2-parachute", "#s1-gift-3-parachute"], {
        transformOrigin: "50% 100%",
        scaleX: .25,
        scaleY: .25
      });
      var gt = new TimelineMax({
        repeat: -1,
        paused: !0
      });
      gt.to("#s1-aircraft", 7, {
        bezier: {
          type: "cubic",
          values: [{
            x: 1.29,
            y: 0,
            scaleX: .15,
            scaleY: .15,
            opacity: 0
          }, {
            x: 1.29,
            y: 0,
            scaleX: .2,
            scaleY: .2,
            opacity: 1
          }, {
            x: 253.5,
            y: 85.93,
            scaleX: .8,
            scaleY: .8,
            opacity: 1
          }, {
            x: 600,
            y: 85.93,
            scaleX: 1,
            scaleY: 1,
            opacity: 1
          }, {
            x: 946.5,
            y: 85.93,
            scaleX: 1,
            scaleY: 1,
            opacity: 1
          }, {
            x: 1036.75,
            y: 39.93,
            scaleX: 1,
            scaleY: 1,
            opacity: 1
          }, {
            x: 1200,
            y: .31,
            scaleX: .25,
            scaleY: .25,
            opacity: 0
          }],
          autoRotate: !0
        }
      }, 0).to("#s1-gift-1", 4, {
        transformOrigin: "50% 50%",
        bezier: {
          values: [{
            rotation: 2.5
          }, {
            rotation: -2.5
          }, {
            rotation: 2.5
          }, {
            rotation: -2.5
          }]
        }
      }, 3).to("#s1-gift-1", .5, {
        opacity: 1
      }, 3).to("#s1-gift-1", 4, {
        x: -150,
        y: 430
      }, 3).to("#s1-gift-1-parachute", 1, {
        scaleX: 1,
        scaleY: 1
      }, 3).to("#s1-gift-2", 4, {
        transformOrigin: "50% 50%",
        bezier: {
          values: [{
            rotation: 2.5
          }, {
            rotation: -2.5
          }, {
            rotation: 2.5
          }, {
            rotation: -2.5
          }]
        }
      }, 4.6).to("#s1-gift-2", .5, {
        opacity: 1
      }, 4.6).to("#s1-gift-2", 4, {
        x: -150,
        y: 400
      }, 4.6).to("#s1-gift-2-parachute", 1, {
        scaleX: 1,
        scaleY: 1
      }, 4.6).to("#s1-gift-3", 4, {
        transformOrigin: "50% 50%",
        bezier: {
          values: [{
            rotation: 2.5
          }, {
            rotation: -2.5
          }, {
            rotation: 2.5
          }, {
            rotation: -2.5
          }]
        }
      }, 6.35).to("#s1-gift-3", .5, {
        opacity: 1
      }, 6.35).to("#s1-gift-3", 4, {
        x: -120,
        y: 460
      }, 6.35).to("#s1-gift-3-parachute", 1, {
        scaleX: 1,
        scaleY: 1
      }, 6.35).to("#s1-air-line", 7, {
        "stroke-dashoffset": 0
      }, .6).to("#s1-air-line-overlay", 7, {
        "stroke-dashoffset": 0
      }, 3);
      var yt = TweenMax.staggerTo(["#s1-flag-1-substrate", "#s1-flag-2-substrate"], .5, {
        paused: !0,
        x: -2,
        repeat: -1,
        yoyo: !0
      }, .25);
      s.tweens.push(P, O, k, N, Y, j, U, $, ut, _t, ct, gt, ft, pt, dt, mt, yt[0], yt[1])
    }, s.destroy = function () {
      TimelineLite.exportRoot().pause(0)
    }, s.tweens = [], s.play = function () {
      for (var t = 0; t < s.tweens.length; t++) s.tweens[t].play()
    }, s.stop = function () {
      for (var t = 0; t < s.tweens.length; t++) s.tweens[t].pause()
    }, e.default = s
  },

  627: function (t, e, i) {
    "use strict";
    (function (t, s) {
      i.d(e, "f", function () {
        return n
      });
      const r = "undefined" != typeof window ? window : void 0 !== t && t.exports && void 0 !== s ? s : this;
      e.e = r;
      const n = function (t, e) {
          var i = {},
            s = t.document,
            r = t.GreenSockGlobals = t.GreenSockGlobals || t;
          if (r.TweenLite) return r.TweenLite;
          var n, a, o, l, h, u = function (t) {
              var e, i = t.split("."),
                s = r;
              for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
              return s
            },
            _ = u("com.greensock"),
            c = function (t) {
              var e, i = [],
                s = t.length;
              for (e = 0; e !== s; i.push(t[e++]));
              return i
            },
            f = function () {},
            p = function () {
              var t = Object.prototype.toString,
                e = t.call([]);
              return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
              }
            }(),
            d = {},
            m = function (t, e, s, n) {
              this.sc = d[t] ? d[t].sc : [], d[t] = this, this.gsClass = null, this.func = s;
              var a = [];
              this.check = function (o) {
                for (var l, h, _, c, f = e.length, p = f; --f > -1;)(l = d[e[f]] || new m(e[f], [])).gsClass ? (a[f] = l.gsClass, p--) : o && l.sc.push(this);
                if (0 === p && s)
                  for (_ = (h = ("com.greensock." + t).split(".")).pop(), c = u(h.join("."))[_] = this.gsClass = s.apply(s, a), n && (r[_] = i[_] = c), f = 0; f < this.sc.length; f++) this.sc[f].check()
              }, this.check(!0)
            },
            g = t._gsDefine = function (t, e, i, s) {
              return new m(t, e, i, s)
            },
            y = _._class = function (t, e, i) {
              return e = e || function () {}, g(t, [], function () {
                return e
              }, i), e
            };
          g.globals = r;
          var v = [0, 0, 1, 1],
            x = y("easing.Ease", function (t, e, i, s) {
              this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
            }, !0),
            T = x.map = {},
            b = x.register = function (t, e, i, s) {
              for (var r, n, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                for (n = l[h], r = s ? y("easing." + n, null, !0) : _.easing[n] || {}, a = u.length; --a > -1;) o = u[a], T[n + "." + o] = T[o + n] = r[o] = t.getRatio ? t : t[o] || new t
            };
          for ((o = x.prototype)._calcEnd = !1, o.getRatio = function (t) {
              if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
              var e = this._type,
                i = this._power,
                s = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
              return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : t < .5 ? s / 2 : 1 - s / 2
            }, a = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) o = n[a] + ",Power" + a, b(new x(null, null, 1, a), o, "easeOut", !0), b(new x(null, null, 2, a), o, "easeIn" + (0 === a ? ",easeNone" : "")), b(new x(null, null, 3, a), o, "easeInOut");
          T.linear = _.easing.Linear.easeIn, T.swing = _.easing.Quad.easeInOut;
          var w = y("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
          });
          (o = w.prototype).addEventListener = function (t, e, i, s, r) {
            r = r || 0;
            var n, a, o = this._listeners[t],
              u = 0;
            for (this !== l || h || l.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;)(n = o[a]).c === e && n.s === i ? o.splice(a, 1) : 0 === u && n.pr < r && (u = a + 1);
            o.splice(u, 0, {
              c: e,
              s: i,
              up: s,
              pr: r
            })
          }, o.removeEventListener = function (t, e) {
            var i, s = this._listeners[t];
            if (s)
              for (i = s.length; --i > -1;)
                if (s[i].c === e) return void s.splice(i, 1)
          }, o.dispatchEvent = function (t) {
            var e, i, s, r = this._listeners[t];
            if (r)
              for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(s = r[e]) && (s.up ? s.c.call(s.s || i, {
                type: t,
                target: i
              }) : s.c.call(s.s || i))
          };
          var P = t.requestAnimationFrame,
            O = t.cancelAnimationFrame,
            k = Date.now || function () {
              return (new Date).getTime()
            },
            S = k();
          for (a = (n = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !P;) P = t[n[a] + "RequestAnimationFrame"], O = t[n[a] + "CancelAnimationFrame"] || t[n[a] + "CancelRequestAnimationFrame"];
          y("Ticker", function (t, e) {
            var i, r, n, a, o, u = this,
              _ = k(),
              c = !(!1 === e || !P) && "auto",
              p = 500,
              d = 33,
              m = function (t) {
                var e, s, l = k() - S;
                l > p && (_ += l - d), S += l, u.time = (S - _) / 1e3, e = u.time - o, (!i || e > 0 || !0 === t) && (u.frame++, o += e + (e >= a ? .004 : a - e), s = !0), !0 !== t && (n = r(m)), s && u.dispatchEvent("tick")
              };
            w.call(u), u.time = u.frame = 0, u.tick = function () {
              m(!0)
            }, u.lagSmoothing = function (t, e) {
              if (!arguments.length) return p < 1e10;
              p = t || 1e10, d = Math.min(e, p, 0)
            }, u.sleep = function () {
              null != n && (c && O ? O(n) : clearTimeout(n), r = f, n = null, u === l && (h = !1))
            }, u.wake = function (t) {
              null !== n ? u.sleep() : t ? _ += -S + (S = k()) : u.frame > 10 && (S = k() - p + 5), r = 0 === i ? f : c && P ? P : function (t) {
                return setTimeout(t, 1e3 * (o - u.time) + 1 | 0)
              }, u === l && (h = !0), m(2)
            }, u.fps = function (t) {
              if (!arguments.length) return i;
              a = 1 / ((i = t) || 60), o = this.time + a, u.wake()
            }, u.useRAF = function (t) {
              if (!arguments.length) return c;
              u.sleep(), c = t, u.fps(i)
            }, u.fps(t), setTimeout(function () {
              "auto" === c && u.frame < 5 && "hidden" !== (s || {}).visibilityState && u.useRAF(!1)
            }, 1500)
          }), (o = _.Ticker.prototype = new _.events.EventDispatcher).constructor = _.Ticker;
          var R = y("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
              h || l.wake();
              var i = this.vars.useFrames ? W : Z;
              i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
          });
          l = R.ticker = new _.Ticker, (o = R.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
          var A = function () {
            h && k() - S > 2e3 && ("hidden" !== (s || {}).visibilityState || !l.lagSmoothing()) && l.wake();
            var t = setTimeout(A, 2e3);
            t.unref && t.unref()
          };
          A(), o.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
          }, o.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
          }, o.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
          }, o.seek = function (t, e) {
            return this.totalTime(Number(t), !1 !== e)
          }, o.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
          }, o.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
          }, o.render = function (t, e, i) {}, o.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
          }, o.isActive = function () {
            var t, e = this._timeline,
              i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
          }, o._enabled = function (t, e) {
            return h || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
          }, o._kill = function (t, e) {
            return this._enabled(!1, !1)
          }, o.kill = function (t, e) {
            return this._kill(t, e), this
          }, o._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
          }, o._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
          }, o._callback = function (t) {
            var e = this.vars,
              i = e[t],
              s = e[t + "Params"],
              r = e[t + "Scope"] || e.callbackScope || this;
            switch (s ? s.length : 0) {
              case 0:
                i.call(r);
                break;
              case 1:
                i.call(r, s[0]);
                break;
              case 2:
                i.call(r, s[0], s[1]);
                break;
              default:
                i.apply(r, s)
            }
          }, o.eventCallback = function (t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
              var r = this.vars;
              if (1 === arguments.length) return r[t];
              null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
          }, o.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
          }, o.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
          }, o.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
          }, o.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
          }, o.totalTime = function (t, e, i) {
            if (h || l.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
              if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var s = this._totalDuration,
                  r = this._timeline;
                if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                  for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
              }
              this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (E.length && H(), this.render(t, e, !1), E.length && H())
            }
            return this
          }, o.progress = o.totalProgress = function (t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
          }, o.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
          }, o.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
          }, o.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            var e, i;
            for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
            return this
          }, o.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
          }, o.paused = function (t) {
            if (!arguments.length) return this._paused;
            var e, i, s = this._timeline;
            return t != this._paused && s && (h || t || l.wake(), i = (e = s.rawTime()) - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
          };
          var C = y("core.SimpleTimeline", function (t) {
            R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
          });
          (o = C.prototype = new R).constructor = C, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (t, e, i, s) {
            var r, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
              for (n = t._startTime; r && r._startTime > n;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
          }, o._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
          }, o.render = function (t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
          }, o.rawTime = function () {
            return h || l.wake(), this._totalTime
          };
          var M = y("TweenLite", function (e, i, s) {
              if (R.call(this, i, s), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
              this.target = e = "string" != typeof e ? e : M.selector(e) || e;
              var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                l = this.vars.overwrite;
              if (this._overwrite = l = null == l ? q[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                for (this._targets = a = c(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)(n = a[r]) ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(c(n))) : (this._siblings[r] = $(n, this, !1), 1 === l && this._siblings[r].length > 1 && J(n, this, null, 1, this._siblings[r])) : "string" == typeof (n = a[r--] = M.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
              else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
              (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
            }, !0),
            D = function (e) {
              return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            };
          (o = M.prototype = new R).constructor = M, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, M.version = "1.20.5", M.defaultEase = o._ease = new x(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = l, M.autoSleep = 120, M.lagSmoothing = function (t, e) {
            l.lagSmoothing(t, e)
          }, M.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;
            return i ? (M.selector = i, i(e)) : (s || (s = t.document), s ? s.querySelectorAll ? s.querySelectorAll(e) : s.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
          };
          var E = [],
            I = {},
            B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            F = /[\+-]=-?[\.\d]/,
            z = function (t) {
              for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },
            X = function (t, e, i, s) {
              var r, n, a, o, l, h, u, _ = [],
                c = 0,
                f = "",
                p = 0;
              for (_.start = t, _.end = e, t = _[0] = t + "", e = _[1] = e + "", i && (i(_), t = _[0], e = _[1]), _.length = 0, r = t.match(B) || [], n = e.match(B) || [], s && (s._next = null, s.blob = 1, _._firstPT = _._applyPT = s), l = n.length, o = 0; o < l; o++) u = n[o], f += (h = e.substr(c, e.indexOf(u, c) - c)) || !o ? h : ",", c += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), u === r[o] || r.length <= o ? f += u : (f && (_.push(f), f = ""), a = parseFloat(r[o]), _.push(a), _._firstPT = {
                _next: _._firstPT,
                t: _,
                p: _.length - 1,
                s: a,
                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                f: 0,
                m: p && p < 4 ? Math.round : 0
              }), c += u.length;
              return (f += e.substr(c)) && _.push(f), _.setRatio = z, F.test(e) && (_.end = null), _
            },
            L = function (t, e, i, s, r, n, a, o, l) {
              "function" == typeof s && (s = s(l || 0, t));
              var h = typeof t[e],
                u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                _ = "get" !== i ? i : u ? a ? t[u](a) : t[u]() : t[e],
                c = "string" == typeof s && "=" === s.charAt(1),
                f = {
                  t: t,
                  p: e,
                  s: _,
                  f: "function" === h,
                  pg: 0,
                  n: r || e,
                  m: n ? "function" == typeof n ? n : Math.round : 0,
                  pr: 0,
                  c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - _ || 0
                };
              if (("number" != typeof _ || "number" != typeof s && !c) && (a || isNaN(_) || !c && isNaN(s) || "boolean" == typeof _ || "boolean" == typeof s ? (f.fp = a, f = {
                  t: X(_, c ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : s, o || M.defaultStringFilter, f),
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: r || e,
                  pr: 0,
                  m: 0
                }) : (f.s = parseFloat(_), c || (f.c = parseFloat(s) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
            },
            N = M._internals = {
              isArray: p,
              isSelector: D,
              lazyTweens: E,
              blobDif: X
            },
            Y = M._plugins = {},
            j = N.tweenLookup = {},
            U = 0,
            V = N.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1
            },
            q = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0
            },
            W = R._rootFramesTimeline = new C,
            Z = R._rootTimeline = new C,
            G = 30,
            H = N.lazyRender = function () {
              var t, e = E.length;
              for (I = {}; --e > -1;)(t = E[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
              E.length = 0
            };
          Z._startTime = l.time, W._startTime = l.frame, Z._active = W._active = !0, setTimeout(H, 1), R._updateRoot = M.render = function () {
            var t, e, i;
            if (E.length && H(), Z.render((l.time - Z._startTime) * Z._timeScale, !1, !1), W.render((l.frame - W._startTime) * W._timeScale, !1, !1), E.length && H(), l.frame >= G) {
              for (i in G = l.frame + (parseInt(M.autoSleep, 10) || 120), j) {
                for (t = (e = j[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                0 === e.length && delete j[i]
              }
              if ((!(i = Z._first) || i._paused) && M.autoSleep && !W._first && 1 === l._listeners.tick.length) {
                for (; i && i._paused;) i = i._next;
                i || l.sleep()
              }
            }
          }, l.addEventListener("tick", R._updateRoot);
          var $ = function (t, e, i) {
              var s, r, n = t._gsTweenID;
              if (j[n || (t._gsTweenID = n = "t" + U++)] || (j[n] = {
                  target: t,
                  tweens: []
                }), e && ((s = j[n].tweens)[r = s.length] = e, i))
                for (; --r > -1;) s[r] === e && s.splice(r, 1);
              return j[n].tweens
            },
            Q = function (t, e, i, s) {
              var r, n, a = t.vars.onOverwrite;
              return a && (r = a(t, e, i, s)), (a = M.onOverwrite) && (n = a(t, e, i, s)), !1 !== r && !1 !== n
            },
            J = function (t, e, i, s, r) {
              var n, a, o, l;
              if (1 === s || s >= 4) {
                for (l = r.length, n = 0; n < l; n++)
                  if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                  else if (5 === s) break;
                return a
              }
              var h, u = e._startTime + 1e-10,
                _ = [],
                c = 0,
                f = 0 === e._duration;
              for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || K(e, 0, f), 0 === K(o, h, f) && (_[c++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && u - o._startTime <= 2e-10 || (_[c++] = o)));
              for (n = c; --n > -1;)
                if (o = _[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                  if (2 !== s && !Q(o, e)) continue;
                  o._enabled(!1, !1) && (a = !0)
                } return a
            },
            K = function (t, e, i) {
              for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                s = s._timeline
              }
              return (n /= r) > e ? n - e : i && n === e || !t._initted && n - e < 2e-10 ? 1e-10 : (n += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : n - e - 1e-10
            };
          o._init = function () {
            var t, e, i, s, r, n, a = this.vars,
              o = this._overwrittenProps,
              l = this._duration,
              h = !!a.immediateRender,
              u = a.ease;
            if (a.startAt) {
              for (s in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, a.startAt) r[s] = a.startAt[s];
              if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = M.to(this.target || {}, 0, r), h)
                if (this._time > 0) this._startAt = null;
                else if (0 !== l) return
            } else if (a.runBackwards && 0 !== l)
              if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
              else {
                for (s in 0 !== this._time && (h = !1), i = {}, a) V[s] && "autoCSS" !== s || (i[s] = a[s]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = M.to(this.target, 0, i), h) {
                  if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
              } if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, a.easeParams) : T[u] || M.defaultEase : M.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
              for (n = this._targets.length, t = 0; t < n; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && M._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
              for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = a.onUpdate, this._initted = !0
          }, o._initProps = function (e, i, s, r, n) {
            var a, o, l, h, u, _;
            if (null == e) return !1;
            for (a in I[e._gsTweenID] && H(), this.vars.css || e.style && e !== t && e.nodeType && Y.css && !1 !== this.vars.autoCSS && function (t, e) {
                var i, s = {};
                for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Y[i] || Y[i] && Y[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
              }(this.vars, e), this.vars)
              if (_ = this.vars[a], V[a]) _ && (_ instanceof Array || _.push && p(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[a] = _ = this._swapSelfInParams(_, this));
              else if (Y[a] && (h = new Y[a])._onInitTween(e, this.vars[a], this, n)) {
              for (this._firstPT = u = {
                  _next: this._firstPT,
                  t: h,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: a,
                  pg: 1,
                  pr: h._priority,
                  m: 0
                }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
              (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
            } else i[a] = L.call(this, e, a, "get", _, a, 0, null, this.vars.stringFilter, n);
            return r && this._kill(r, e) ? this._initProps(e, i, s, r, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && J(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), l)
          }, o.render = function (t, e, i) {
            var s, r, n, a, o = this._time,
              l = this._duration,
              h = this._rawPrevTime;
            if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || 1e-10 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-10);
            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-10 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
              var u = t / l,
                _ = this._easeType,
                c = this._easePower;
              (1 === _ || 3 === _ && u >= .5) && (u = 1 - u), 3 === _ && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === _ ? 1 - u : 2 === _ ? u : t / l < .5 ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
              if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, E.push(this), void(this._lazy = [t, e]);
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              }
              for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
              this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || s || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0)))
            }
          }, o._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
            var s, r, n, a, o, l, h, u, _, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((p(e) || D(e)) && "number" != typeof e[0])
              for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
            else {
              if (this._targets) {
                for (s = this._targets.length; --s > -1;)
                  if (e === this._targets[s]) {
                    o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                    break
                  }
              } else {
                if (e !== this.target) return !1;
                o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
              }
              if (o) {
                if (h = t || o, u = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                  for (n in h) o[n] && (_ || (_ = []), _.push(n));
                  if ((_ || !t) && !Q(this, i, e, _)) return !1
                }
                for (n in h)(a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), u && (r[n] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
              }
            }
            return l
          }, o.invalidate = function () {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
          }, o._enabled = function (t, e) {
            if (h || l.wake(), t && this._gc) {
              var i, s = this._targets;
              if (s)
                for (i = s.length; --i > -1;) this._siblings[i] = $(s[i], this, !0);
              else this._siblings = $(this.target, this, !0)
            }
            return R.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
          }, M.to = function (t, e, i) {
            return new M(t, e, i)
          }, M.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
          }, M.fromTo = function (t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new M(t, e, s)
          }, M.delayedCall = function (t, e, i, s, r) {
            return new M(e, 0, {
              delay: t,
              onComplete: e,
              onCompleteParams: i,
              callbackScope: s,
              onReverseComplete: e,
              onReverseCompleteParams: i,
              immediateRender: !1,
              lazy: !1,
              useFrames: r,
              overwrite: 0
            })
          }, M.set = function (t, e) {
            return new M(t, 0, e)
          }, M.getTweensOf = function (t, e) {
            if (null == t) return [];
            var i, s, r, n;
            if (t = "string" != typeof t ? t : M.selector(t) || t, (p(t) || D(t)) && "number" != typeof t[0]) {
              for (i = t.length, s = []; --i > -1;) s = s.concat(M.getTweensOf(t[i], e));
              for (i = s.length; --i > -1;)
                for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
            } else if (t._gsTweenID)
              for (i = (s = $(t).concat()).length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s || []
          }, M.killTweensOf = M.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = M.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
          };
          var tt = y("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
          }, !0);
          if (o = tt.prototype, tt.version = "1.19.0", tt.API = 2, o._firstPT = null, o._addTween = L, o.setRatio = z, o._kill = function (t) {
              var e, i = this._overwriteProps,
                s = this._firstPT;
              if (null != t[this._propName]) this._overwriteProps = [];
              else
                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
              for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
              return !1
            }, o._mod = o._roundProps = function (t) {
              for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, M._onPluginEvent = function (t, e) {
              var i, s, r, n, a, o = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; o;) {
                  for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                  (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                }
                o = e._firstPT = r
              }
              for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
              return i
            }, tt.activate = function (t) {
              for (var e = t.length; --e > -1;) t[e].API === tt.API && (Y[(new t[e])._propName] = t[e]);
              return !0
            }, g.plugin = function (t) {
              if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
              var e, i = t.propName,
                s = t.priority || 0,
                r = t.overwriteProps,
                n = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps"
                },
                a = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                  tt.call(this, i, s), this._overwriteProps = r || []
                }, !0 === t.global),
                o = a.prototype = new tt(i);
              for (e in o.constructor = a, a.API = t.API, n) "function" == typeof t[e] && (o[n[e]] = t[e]);
              return a.version = t.version, tt.activate([a]), a
            }, n = t._gsQueue) {
            for (a = 0; a < n.length; a++) n[a]();
            for (o in d) d[o].func || t.console.log("GSAP encountered missing dependency: " + o)
          }
          return h = !1, M
        }(r),
        a = r.com.greensock,
        o = a.core.SimpleTimeline;
      e.c = o;
      const l = a.core.Animation;
      e.a = l;
      const {
        Ease: h,
        Linear: u,
        Power0: _,
        Power1: c,
        Power2: f,
        Power3: p,
        Power4: d,
        TweenPlugin: m
      } = r;
      e.b = h, e.d = m;
      a.events.EventDispatcher
    }).call(e, i(637)(t), i(63))
  },
  628: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return r
    });
    var s = i(627);
    s.e._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
      var t = function (t) {
          s.c.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
          var e, i, r = this.vars;
          for (i in r) e = r[i], n(e) && -1 !== e.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(e));
          n(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        },
        e = s.f._internals,
        i = t._internals = {},
        r = e.isSelector,
        n = e.isArray,
        a = e.lazyTweens,
        o = e.lazyRender,
        l = s.e._gsDefine.globals,
        h = function (t) {
          var e, i = {};
          for (e in t) i[e] = t[e];
          return i
        },
        u = function (t, e, i) {
          var s, r, n = t.cycle;
          for (s in n) r = n[s], t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
          delete t.cycle
        },
        _ = i.pauseCallback = function () {},
        c = function (t) {
          var e, i = [],
            s = t.length;
          for (e = 0; e !== s; i.push(t[e++]));
          return i
        },
        f = t.prototype = new s.c;
      return t.version = "1.20.5", f.constructor = t, f.kill()._gc = f._forcingPlayhead = f._hasPause = !1, f.to = function (t, e, i, r) {
        var n = i.repeat && l.TweenMax || s.f;
        return e ? this.add(new n(t, e, i), r) : this.set(t, i, r)
      }, f.from = function (t, e, i, r) {
        return this.add((i.repeat && l.TweenMax || s.f).from(t, e, i), r)
      }, f.fromTo = function (t, e, i, r, n) {
        var a = r.repeat && l.TweenMax || s.f;
        return e ? this.add(a.fromTo(t, e, i, r), n) : this.set(t, r, n)
      }, f.staggerTo = function (e, i, n, a, o, l, _, f) {
        var p, d, m = new t({
            onComplete: l,
            onCompleteParams: _,
            callbackScope: f,
            smoothChildTiming: this.smoothChildTiming
          }),
          g = n.cycle;
        for ("string" == typeof e && (e = s.f.selector(e) || e), r(e = e || []) && (e = c(e)), (a = a || 0) < 0 && ((e = c(e)).reverse(), a *= -1), d = 0; d < e.length; d++)(p = h(n)).startAt && (p.startAt = h(p.startAt), p.startAt.cycle && u(p.startAt, e, d)), g && (u(p, e, d), null != p.duration && (i = p.duration, delete p.duration)), m.to(e[d], i, p, d * a);
        return this.add(m, o)
      }, f.staggerFrom = function (t, e, i, s, r, n, a, o) {
        return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
      }, f.staggerFromTo = function (t, e, i, s, r, n, a, o, l) {
        return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
      }, f.call = function (t, e, i, r) {
        return this.add(s.f.delayedCall(0, t, e, i), r)
      }, f.set = function (t, e, i) {
        return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new s.f(t, 0, e), i)
      }, t.exportRoot = function (e, i) {
        null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
        var r, n, a, o, l = new t(e),
          h = l._timeline;
        for (null == i && (i = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, a = h._first; a;) o = a._next, i && a instanceof s.f && a.target === a.vars.onComplete || ((n = a._startTime - a._delay) < 0 && (r = 1), l.add(a, n)), a = o;
        return h.add(l, 0), r && l.totalDuration(), l
      }, f.add = function (e, i, r, a) {
        var o, l, h, u, _, c;
        if ("number" != typeof i && (i = this._parseTimeOrLabel(i, 0, !0, e)), !(e instanceof s.a)) {
          if (e instanceof Array || e && e.push && n(e)) {
            for (r = r || "normal", a = a || 0, o = i, l = e.length, h = 0; h < l; h++) n(u = e[h]) && (u = new t({
              tweens: u
            })), this.add(u, o), "string" != typeof u && "function" != typeof u && ("sequence" === r ? o = u._startTime + u.totalDuration() / u._timeScale : "start" === r && (u._startTime -= u.delay())), o += a;
            return this._uncache(!0)
          }
          if ("string" == typeof e) return this.addLabel(e, i);
          if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
          e = s.f.delayedCall(0, e)
        }
        if (s.c.prototype.add.call(this, e, i), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
          for (c = (_ = this).rawTime() > e._startTime; _._timeline;) c && _._timeline.smoothChildTiming ? _.totalTime(_._totalTime, !0) : _._gc && _._enabled(!0, !1), _ = _._timeline;
        return this
      }, f.remove = function (t) {
        if (t instanceof s.a) {
          this._remove(t, !1);
          var e = t._timeline = t.vars.useFrames ? s.a._rootFramesTimeline : s.a._rootTimeline;
          return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
        }
        if (t instanceof Array || t && t.push && n(t)) {
          for (var i = t.length; --i > -1;) this.remove(t[i]);
          return this
        }
        return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
      }, f._remove = function (t, e) {
        return s.c.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
      }, f.append = function (t, e) {
        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
      }, f.insert = f.insertMultiple = function (t, e, i, s) {
        return this.add(t, e || 0, i, s)
      }, f.appendMultiple = function (t, e, i, s) {
        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
      }, f.addLabel = function (t, e) {
        return this._labels[t] = this._parseTimeOrLabel(e), this
      }, f.addPause = function (t, e, i, r) {
        var n = s.f.delayedCall(0, _, i, r || this);
        return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
      }, f.removeLabel = function (t) {
        return delete this._labels[t], this
      }, f.getLabelTime = function (t) {
        return null != this._labels[t] ? this._labels[t] : -1
      }, f._parseTimeOrLabel = function (t, e, i, r) {
        var a, o;
        if (r instanceof s.a && r.timeline === this) this.remove(r);
        else if (r && (r instanceof Array || r.push && n(r)))
          for (o = r.length; --o > -1;) r[o] instanceof s.a && r[o].timeline === this && this.remove(r[o]);
        if (a = "number" != typeof t || e ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - a : 0, i);
        if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = a);
        else {
          if (-1 === (o = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = a + e : e : this._labels[t] + e;
          e = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)), t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : a
        }
        return Number(t) + e
      }, f.seek = function (t, e) {
        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
      }, f.stop = function () {
        return this.paused(!0)
      }, f.gotoAndPlay = function (t, e) {
        return this.play(t, e)
      }, f.gotoAndStop = function (t, e) {
        return this.pause(t, e)
      }, f.render = function (t, e, i) {
        this._gc && this._enabled(!0, !1);
        var s, r, n, l, h, u, _, c = this._time,
          f = this._dirty ? this.totalDuration() : this._totalDuration,
          p = this._startTime,
          d = this._timeScale,
          m = this._paused;
        if (c !== this._time && (t += this._time - c), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
        else if (t < 1e-7)
          if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (l = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = r = !0, l = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
          else {
            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
              for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
            t = 0, this._initted || (h = !0)
          }
        else {
          if (this._hasPause && !this._forcingPlayhead && !e) {
            if (t >= c)
              for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
            else
              for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
            u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
          }
          this._totalTime = this._time = this._rawPrevTime = t
        }
        if (this._time !== c && this._first || i || h || u) {
          if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (_ = this._time) >= c)
            for (s = this._first; s && (n = s._next, _ === this._time && (!this._paused || m));)(s._active || s._startTime <= _ && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n;
          else
            for (s = this._last; s && (n = s._prev, _ === this._time && (!this._paused || m));) {
              if (s._active || s._startTime <= c && !s._paused && !s._gc) {
                if (u === s) {
                  for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                  u = null, this.pause()
                }
                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
              }
              s = n
            }
          this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._gc || p !== this._startTime && d === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
        }
      }, f._hasPausedChild = function () {
        for (var e = this._first; e;) {
          if (e._paused || e instanceof t && e._hasPausedChild()) return !0;
          e = e._next
        }
        return !1
      }, f.getChildren = function (t, e, i, r) {
        r = r || -9999999999;
        for (var n = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof s.f ? !1 !== e && (n[o++] = a) : (!1 !== i && (n[o++] = a), !1 !== t && (o = (n = n.concat(a.getChildren(!0, e, i))).length))), a = a._next;
        return n
      }, f.getTweensOf = function (t, e) {
        var i, r, n = this._gc,
          a = [],
          o = 0;
        for (n && this._enabled(!0, !0), r = (i = s.f.getTweensOf(t)).length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (a[o++] = i[r]);
        return n && this._enabled(!1, !0), a
      }, f.recent = function () {
        return this._recent
      }, f._contains = function (t) {
        for (var e = t.timeline; e;) {
          if (e === this) return !0;
          e = e.timeline
        }
        return !1
      }, f.shiftChildren = function (t, e, i) {
        i = i || 0;
        for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
        if (e)
          for (s in n) n[s] >= i && (n[s] += t);
        return this._uncache(!0)
      }, f._kill = function (t, e) {
        if (!t && !e) return this._enabled(!1, !1);
        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
        return r
      }, f.clear = function (t) {
        var e = this.getChildren(!1, !0, !0),
          i = e.length;
        for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
        return !1 !== t && (this._labels = {}), this._uncache(!0)
      }, f.invalidate = function () {
        for (var t = this._first; t;) t.invalidate(), t = t._next;
        return s.a.prototype.invalidate.call(this)
      }, f._enabled = function (t, e) {
        if (t === this._gc)
          for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
        return s.c.prototype._enabled.call(this, t, e)
      }, f.totalTime = function (t, e, i) {
        this._forcingPlayhead = !0;
        var r = s.a.prototype.totalTime.apply(this, arguments);
        return this._forcingPlayhead = !1, r
      }, f.duration = function (t) {
        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
      }, f.totalDuration = function (t) {
        if (!arguments.length) {
          if (this._dirty) {
            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : n = r._startTime, r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), (i = r._startTime + r._totalDuration / r._timeScale) > s && (s = i), r = e;
            this._duration = this._totalDuration = s, this._dirty = !1
          }
          return this._totalDuration
        }
        return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
      }, f.paused = function (t) {
        if (!t)
          for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
        return s.a.prototype.paused.apply(this, arguments)
      }, f.usesFrames = function () {
        for (var t = this._timeline; t._timeline;) t = t._timeline;
        return t === s.a._rootFramesTimeline
      }, f.rawTime = function (t) {
        return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
      }, t
    }, !0);
    const r = s.e.TimelineLite
  },
  629: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return n
    });
    var s = i(627),
      r = i(628);
    s.e._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function () {
      var t = function (t) {
          r.a.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
        },
        e = s.f._internals,
        i = e.lazyTweens,
        n = e.lazyRender,
        a = s.e._gsDefine.globals,
        o = new s.b(null, null, 1, 0),
        l = t.prototype = new r.a;
      return l.constructor = t, l.kill()._gc = !1, t.version = "1.20.5", l.invalidate = function () {
        return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), r.a.prototype.invalidate.call(this)
      }, l.addCallback = function (t, e, i, r) {
        return this.add(s.f.delayedCall(0, t, i, r), e)
      }, l.removeCallback = function (t, e) {
        if (t)
          if (null == e) this._kill(null, t);
          else
            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
        return this
      }, l.removePause = function (t) {
        return this.removeCallback(r.a._internals.pauseCallback, t)
      }, l.tweenTo = function (t, e) {
        e = e || {};
        var i, r, n, l = {
            ease: o,
            useFrames: this.usesFrames(),
            immediateRender: !1,
            lazy: !1
          },
          h = e.repeat && a.TweenMax || s.f;
        for (r in e) l[r] = e[r];
        return l.time = this._parseTimeOrLabel(t), i = Math.abs(Number(l.time) - this._time) / this._timeScale || .001, n = new h(this, i, l), l.onStart = function () {
          n.target.paused(!0), n.vars.time === n.target.time() || i !== n.duration() || n.isFromTo || n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale).render(n.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || n, e.onStartParams || [])
        }, n
      }, l.tweenFromTo = function (t, e, i) {
        i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
          onComplete: this.seek,
          onCompleteParams: [t],
          callbackScope: this
        }, i.immediateRender = !1 !== i.immediateRender;
        var s = this.tweenTo(e, i);
        return s.isFromTo = 1, s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
      }, l.render = function (t, e, s) {
        this._gc && this._enabled(!0, !1);
        var r, a, o, l, h, u, _, c, f = this._time,
          p = this._dirty ? this.totalDuration() : this._totalDuration,
          d = this._duration,
          m = this._totalTime,
          g = this._startTime,
          y = this._timeScale,
          v = this._rawPrevTime,
          x = this._paused,
          T = this._cycle;
        if (f !== this._time && (t += this._time - f), t >= p - 1e-7 && t >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || v < 0 || 1e-10 === v) && v !== t && this._first && (h = !0, v > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
        else if (t < 1e-7)
          if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === d && 1e-10 !== v && (v > 0 || t < 0 && v >= 0) && !this._locked) && (l = "onReverseComplete", a = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = a = !0, l = "onReverseComplete") : v >= 0 && this._first && (h = !0), this._rawPrevTime = t;
          else {
            if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && a)
              for (r = this._first; r && 0 === r._startTime;) r._duration || (a = !1), r = r._next;
            t = 0, this._initted || (h = !0)
          }
        else if (0 === d && v < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = d + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
          if ((t = this._time) >= f || this._repeat && T !== this._cycle)
            for (r = this._first; r && r._startTime <= t && !_;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (_ = r), r = r._next;
          else
            for (r = this._last; r && r._startTime >= t && !_;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (_ = r), r = r._prev;
          _ && _._startTime < d && (this._time = t = _._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
        }
        if (this._cycle !== T && !this._locked) {
          var b = this._yoyo && 0 != (1 & T),
            w = b === (this._yoyo && 0 != (1 & this._cycle)),
            P = this._totalTime,
            O = this._cycle,
            k = this._rawPrevTime,
            S = this._time;
          if (this._totalTime = T * d, this._cycle < T ? b = !b : this._totalTime += d, this._time = f, this._rawPrevTime = 0 === d ? v - 1e-4 : v, this._cycle = T, this._locked = !0, f = b ? 0 : d, this.render(f, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = O, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
          if (w && (this._cycle = T, this._locked = !0, f = b ? d + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !x) return;
          this._time = S, this._totalTime = P, this._cycle = O, this._rawPrevTime = k
        }
        if (this._time !== f && this._first || s || h || _) {
          if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (c = this._time) >= f)
            for (r = this._first; r && (o = r._next, c === this._time && (!this._paused || x));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (_ === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, s) : r.render((t - r._startTime) * r._timeScale, e, s)), r = o;
          else
            for (r = this._last; r && (o = r._prev, c === this._time && (!this._paused || x));) {
              if (r._active || r._startTime <= f && !r._paused && !r._gc) {
                if (_ === r) {
                  for (_ = r._prev; _ && _.endTime() > this._time;) _.render(_._reversed ? _.totalDuration() - (t - _._startTime) * _._timeScale : (t - _._startTime) * _._timeScale, e, s), _ = _._prev;
                  _ = null, this.pause()
                }
                r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, s) : r.render((t - r._startTime) * r._timeScale, e, s)
              }
              r = o
            }
          this._onUpdate && (e || (i.length && n(), this._callback("onUpdate"))), l && (this._locked || this._gc || g !== this._startTime && y === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (a && (i.length && n(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
        } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
      }, l.getActive = function (t, e, i) {
        null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
        var s, r, n = [],
          a = this.getChildren(t, e, i),
          o = 0,
          l = a.length;
        for (s = 0; s < l; s++)(r = a[s]).isActive() && (n[o++] = r);
        return n
      }, l.getLabelAfter = function (t) {
        t || 0 !== t && (t = this._time);
        var e, i = this.getLabelsArray(),
          s = i.length;
        for (e = 0; e < s; e++)
          if (i[e].time > t) return i[e].name;
        return null
      }, l.getLabelBefore = function (t) {
        null == t && (t = this._time);
        for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
          if (e[i].time < t) return e[i].name;
        return null
      }, l.getLabelsArray = function () {
        var t, e = [],
          i = 0;
        for (t in this._labels) e[i++] = {
          time: this._labels[t],
          name: t
        };
        return e.sort(function (t, e) {
          return t.time - e.time
        }), e
      }, l.invalidate = function () {
        return this._locked = !1, r.a.prototype.invalidate.call(this)
      }, l.progress = function (t, e) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
      }, l.totalProgress = function (t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
      }, l.totalDuration = function (t) {
        return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (r.a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
      }, l.time = function (t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
      }, l.repeat = function (t) {
        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
      }, l.repeatDelay = function (t) {
        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
      }, l.yoyo = function (t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo
      }, l.currentLabel = function (t) {
        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
      }, t
    }, !0);
    const n = s.e.TimelineMax
  },
  630: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return r
    });
    var s = i(627);
    s.e._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function () {
      var t, e, i, r, n = function () {
          s.d.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = n.prototype.setRatio
        },
        a = s.e._gsDefine.globals,
        o = {},
        l = n.prototype = new s.d("css");
      l.constructor = n, n.version = "1.20.5", n.API = 2, n.defaultTransformPerspective = 0, n.defaultSkewType = "compensated", n.defaultSmoothOrigin = !0, l = "px", n.suffixMap = {
        top: l,
        right: l,
        bottom: l,
        left: l,
        width: l,
        height: l,
        fontSize: l,
        padding: l,
        margin: l,
        perspective: l,
        lineHeight: ""
      };
      var h, u, _, c, f, p, d, m, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        T = /(?:\d|\-|\+|=|#|\.)*/g,
        b = /opacity *= *([^)]*)/i,
        w = /opacity:([^;]*)/i,
        P = /alpha\(opacity *=.+?\)/i,
        O = /^(rgb|hsl)/,
        k = /([A-Z])/g,
        S = /-([a-z])/gi,
        R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        A = function (t, e) {
          return e.toUpperCase()
        },
        C = /(?:Left|Right|Width)/i,
        M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        E = /,(?=[^\)]*(?:\(|$))/gi,
        I = /[\s,\(]/i,
        B = Math.PI / 180,
        F = 180 / Math.PI,
        z = {},
        X = {
          style: {}
        },
        L = s.e.document || {
          createElement: function () {
            return X
          }
        },
        N = function (t, e) {
          return L.createElementNS ? L.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : L.createElement(t)
        },
        Y = N("div"),
        j = N("img"),
        U = n._internals = {
          _specialProps: o
        },
        V = (s.e.navigator || {}).userAgent || "",
        q = function () {
          var t = V.indexOf("Android"),
            e = N("a");
          return _ = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === t || parseFloat(V.substr(t + 8, 2)) > 3), f = _ && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, c = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (p = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
        }(),
        W = function (t) {
          return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        },
        Z = function (t) {
          s.e.console && console.log(t)
        },
        G = "",
        H = "",
        $ = function (t, e) {
          var i, s, r = (e = e || Y).style;
          if (void 0 !== r[t]) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
          return s >= 0 ? (G = "-" + (H = 3 === s ? "ms" : i[s]).toLowerCase() + "-", H + t) : null
        },
        Q = ("undefined" != typeof window ? window : L.defaultView || {
          getComputedStyle: function () {}
        }).getComputedStyle,
        J = n.getStyle = function (t, e, i, s, r) {
          var n;
          return q || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Q(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : W(t)
        },
        K = U.convertToPixels = function (t, e, i, r, a) {
          if ("px" === r || !r && "lineHeight" !== e) return i;
          if ("auto" === r || !i) return 0;
          var o, l, h, u = C.test(e),
            _ = t,
            c = Y.style,
            f = i < 0,
            p = 1 === i;
          if (f && (i = -i), p && (i *= 100), "lineHeight" !== e || r)
            if ("%" === r && -1 !== e.indexOf("border")) o = i / 100 * (u ? t.clientWidth : t.clientHeight);
            else {
              if (c.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== r && _.appendChild && "v" !== r.charAt(0) && "rem" !== r) c[u ? "borderLeftWidth" : "borderTopWidth"] = i + r;
              else {
                if (_ = t.parentNode || L.body, -1 !== J(_, "display").indexOf("flex") && (c.position = "absolute"), l = _._gsCache, h = s.f.ticker.frame, l && u && l.time === h) return l.width * i / 100;
                c[u ? "width" : "height"] = i + r
              }
              _.appendChild(Y), o = parseFloat(Y[u ? "offsetWidth" : "offsetHeight"]), _.removeChild(Y), u && "%" === r && !1 !== n.cacheWidths && ((l = _._gsCache = _._gsCache || {}).time = h, l.width = o / i * 100), 0 !== o || a || (o = K(t, e, i, r, !0))
            }
          else l = Q(t).lineHeight, t.style.lineHeight = i, o = parseFloat(Q(t).lineHeight), t.style.lineHeight = l;
          return p && (o /= 100), f ? -o : o
        },
        tt = U.calculateOffset = function (t, e, i) {
          if ("absolute" !== J(t, "position", i)) return 0;
          var s = "left" === e ? "Left" : "Top",
            r = J(t, "margin" + s, i);
          return t["offset" + s] - (K(t, e, parseFloat(r), r.replace(T, "")) || 0)
        },
        et = function (t, e) {
          var i, s, r, n = {};
          if (e = e || Q(t, null))
            if (i = e.length)
              for (; --i > -1;) - 1 !== (r = e[i]).indexOf("-transform") && Rt !== r || (n[r.replace(S, A)] = e.getPropertyValue(r));
            else
              for (i in e) - 1 !== i.indexOf("Transform") && St !== i || (n[i] = e[i]);
          else if (e = t.currentStyle || t.style)
            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(S, A)] = e[i]);
          return q || (n.opacity = W(t)), s = Yt(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Ct && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
        },
        it = function (t, e, i, s, r) {
          var n, a, o, l = {},
            h = t.style;
          for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" != typeof n && "string" != typeof n || (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(x, "") ? n : 0 : tt(t, a), void 0 !== h[a] && (o = new gt(h, a, h[a], o))));
          if (s)
            for (a in s) "className" !== a && (l[a] = s[a]);
          return {
            difs: l,
            firstMPT: o
          }
        },
        st = {
          width: ["Left", "Right"],
          height: ["Top", "Bottom"]
        },
        rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        nt = function (t, e, i) {
          if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Q(t))[e] || 0;
          if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
          var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
            r = st[e],
            n = r.length;
          for (i = i || Q(t, null); --n > -1;) s -= parseFloat(J(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(J(t, "border" + r[n] + "Width", i, !0)) || 0;
          return s
        },
        at = function (t, e) {
          if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
          null != t && "" !== t || (t = "0 0");
          var i, s = t.split(" "),
            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
            n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
          if (s.length > 3 && !e) {
            for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(at(s[i]));
            return t.join(",")
          }
          return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + n + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(r.replace(x, "")), e.oy = parseFloat(n.replace(x, "")), e.v = t), e || t
        },
        ot = function (t, e) {
          return "function" == typeof t && (t = t(m, d)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        },
        lt = function (t, e) {
          return "function" == typeof t && (t = t(m, d)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        },
        ht = function (t, e, i, s) {
          var r, n, a, o, l;
          return "function" == typeof t && (t = t(m, d)), null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = a < 0 ? a + r : a - r), -1 !== t.indexOf("_cw") && a < 0 ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a), o < 1e-6 && o > -1e-6 && (o = 0), o
        },
        ut = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          fuchsia: [255, 0, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0]
        },
        _t = function (t, e, i) {
          return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        ct = n.parseColor = function (t, e) {
          var i, s, r, n, a, o, l, h, u, _, c;
          if (t)
            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
            else {
              if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t]) i = ut[t];
              else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (s = t.charAt(1)) + s + (r = t.charAt(2)) + r + (n = t.charAt(3)) + n), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
              else if ("hsl" === t.substr(0, 3))
                if (i = c = t.match(g), e) {
                  if (-1 !== t.indexOf("=")) return t.match(y)
                } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, s = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(i[3])), i[0] = _t(a + 1 / 3, s, r), i[1] = _t(a, s, r), i[2] = _t(a - 1 / 3, s, r);
              else i = t.match(g) || ut.transparent;
              i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
            }
          else i = ut.black;
          return e && !c && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, l = ((h = Math.max(s, r, n)) + (u = Math.min(s, r, n))) / 2, h === u ? a = o = 0 : (_ = h - u, o = l > .5 ? _ / (2 - h - u) : _ / (h + u), a = h === s ? (r - n) / _ + (r < n ? 6 : 0) : h === r ? (n - s) / _ + 2 : (s - r) / _ + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
        },
        ft = function (t, e) {
          var i, s, r, n = t.match(pt) || [],
            a = 0,
            o = "";
          if (!n.length) return t;
          for (i = 0; i < n.length; i++) s = n[i], a += (r = t.substr(a, t.indexOf(s, a) - a)).length + s.length, 3 === (s = ct(s, e)).length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
          return o + t.substr(a)
        },
        pt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (l in ut) pt += "|" + l + "\\b";
      pt = new RegExp(pt + ")", "gi"), n.colorStringFilter = function (t) {
        var e, i = t[0] + " " + t[1];
        pt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ft(t[0], e), t[1] = ft(t[1], e)), pt.lastIndex = 0
      }, s.f.defaultStringFilter || (s.f.defaultStringFilter = n.colorStringFilter);
      var dt = function (t, e, i, s) {
          if (null == t) return function (t) {
            return t
          };
          var r, n = e ? (t.match(pt) || [""])[0] : "",
            a = t.split(n).join("").match(v) || [],
            o = t.substr(0, t.indexOf(a[0])),
            l = ")" === t.charAt(t.length - 1) ? ")" : "",
            h = -1 !== t.indexOf(" ") ? " " : ",",
            u = a.length,
            _ = u > 0 ? a[0].replace(g, "") : "";
          return u ? r = e ? function (t) {
            var e, c, f, p;
            if ("number" == typeof t) t += _;
            else if (s && E.test(t)) {
              for (p = t.replace(E, "|").split("|"), f = 0; f < p.length; f++) p[f] = r(p[f]);
              return p.join(",")
            }
            if (e = (t.match(pt) || [n])[0], f = (c = t.split(e).join("").match(v) || []).length, u > f--)
              for (; ++f < u;) c[f] = i ? c[(f - 1) / 2 | 0] : a[f];
            return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
          } : function (t) {
            var e, n, c;
            if ("number" == typeof t) t += _;
            else if (s && E.test(t)) {
              for (n = t.replace(E, "|").split("|"), c = 0; c < n.length; c++) n[c] = r(n[c]);
              return n.join(",")
            }
            if (c = (e = t.match(v) || []).length, u > c--)
              for (; ++c < u;) e[c] = i ? e[(c - 1) / 2 | 0] : a[c];
            return o + e.join(h) + l
          } : function (t) {
            return t
          }
        },
        mt = function (t) {
          return t = t.split(","),
            function (e, i, s, r, n, a, o) {
              var l, h = (i + "").split(" ");
              for (o = {}, l = 0; l < 4; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
              return r.parse(e, o, n, a)
            }
        },
        gt = (U._setPluginRatio = function (t) {
          this.plugin.setRatio(t);
          for (var e, i, s, r, n, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
          if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === t || 0 === t)
            for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
              if ((i = l.t).type) {
                if (1 === i.type) {
                  for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                  i[n] = r
                }
              } else i[n] = i.s + i.xs0;
              l = l._next
            }
        }, function (t, e, i, s, r) {
          this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
        }),
        yt = (U._parseToProxy = function (t, e, i, s, r, n) {
          var a, o, l, h, u, _ = s,
            c = {},
            f = {},
            p = i._transform,
            d = z;
          for (i._transform = null, z = e, s = u = i.parse(t, e, s, r), z = d, n && (i._transform = p, _ && (_._prev = null, _._prev && (_._prev._next = null))); s && s !== _;) {
            if (s.type <= 1 && (f[o = s.p] = s.s + s.c, c[o] = s.s, n || (h = new gt(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
              for (a = s.l; --a > 0;) l = "xn" + a, f[o = s.p + "_" + l] = s.data[l], c[o] = s[l], n || (h = new gt(s, l, o, h, s.rxp[l]));
            s = s._next
          }
          return {
            proxy: c,
            end: f,
            firstMPT: h,
            pt: u
          }
        }, U.CSSPropTween = function (e, i, s, n, a, o, l, h, u, _, c) {
          this.t = e, this.p = i, this.s = s, this.c = n, this.n = l || i, e instanceof yt || r.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = o || 0, u && (this.pr = u, t = !0), this.b = void 0 === _ ? s : _, this.e = void 0 === c ? s + n : c, a && (this._next = a, a._prev = this)
        }),
        vt = function (t, e, i, s, r, n) {
          var a = new yt(t, e, i, s - i, r, -1, n);
          return a.b = i, a.e = a.xs0 = s, a
        },
        xt = n.parseComplex = function (t, e, i, s, r, a, o, l, u, _) {
          i = i || a || "", "function" == typeof s && (s = s(m, d)), o = new yt(t, e, 0, 0, o, _ ? 2 : 1, null, !1, l, i, s), s += "", r && pt.test(s + i) && (s = [i, s], n.colorStringFilter(s), i = s[0], s = s[1]);
          var c, f, p, v, x, T, b, w, P, O, k, S, R, A = i.split(", ").join(",").split(" "),
            C = s.split(", ").join(",").split(" "),
            M = A.length,
            D = !1 !== h;
          for (-1 === s.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl") ? (A = A.join(" ").replace(E, ", ").split(" "), C = C.join(" ").replace(E, ", ").split(" ")) : (A = A.join(" ").split(",").join(", ").split(" "), C = C.join(" ").split(",").join(", ").split(" ")), M = A.length), M !== C.length && (M = (A = (a || "").split(" ")).length), o.plugin = u, o.setRatio = _, pt.lastIndex = 0, c = 0; c < M; c++)
            if (v = A[c], x = C[c] + "", (w = parseFloat(v)) || 0 === w) o.appendXtra("", w, ot(x, w), x.replace(y, ""), !(!D || -1 === x.indexOf("px")) && Math.round, !0);
            else if (r && pt.test(v)) S = ")" + ((S = x.indexOf(")") + 1) ? x.substr(S) : ""), R = -1 !== x.indexOf("hsl") && q, O = x, v = ct(v, R), x = ct(x, R), (P = v.length + x.length > 6) && !q && 0 === x[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[c]).join("transparent")) : (q || (P = !1), R ? o.appendXtra(O.substr(0, O.indexOf("hsl")) + (P ? "hsla(" : "hsl("), v[0], ot(x[0], v[0]), ",", !1, !0).appendXtra("", v[1], ot(x[1], v[1]), "%,", !1).appendXtra("", v[2], ot(x[2], v[2]), P ? "%," : "%" + S, !1) : o.appendXtra(O.substr(0, O.indexOf("rgb")) + (P ? "rgba(" : "rgb("), v[0], x[0] - v[0], ",", Math.round, !0).appendXtra("", v[1], x[1] - v[1], ",", Math.round).appendXtra("", v[2], x[2] - v[2], P ? "," : S, Math.round), P && (v = v.length < 4 ? 1 : v[3], o.appendXtra("", v, (x.length < 4 ? 1 : x[3]) - v, S, !1))), pt.lastIndex = 0;
          else if (T = v.match(g)) {
            if (!(b = x.match(y)) || b.length !== T.length) return o;
            for (p = 0, f = 0; f < T.length; f++) k = T[f], O = v.indexOf(k, p), o.appendXtra(v.substr(p, O - p), Number(k), ot(b[f], k), "", !(!D || "px" !== v.substr(O + k.length, 2)) && Math.round, 0 === f), p = O + k.length;
            o["xs" + o.l] += v.substr(p)
          } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + x : x;
          if (-1 !== s.indexOf("=") && o.data) {
            for (S = o.xs0 + o.data.s, c = 1; c < o.l; c++) S += o["xs" + c] + o.data["xn" + c];
            o.e = S + o["xs" + c]
          }
          return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        },
        Tt = 9;
      for ((l = yt.prototype).l = l.pr = 0; --Tt > 0;) l["xn" + Tt] = 0, l["xs" + Tt] = "";
      l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, s, r, n) {
        var a = this,
          o = a.l;
        return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new yt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
          s: e + i
        }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
      };
      var bt = function (t, e) {
          e = e || {}, this.p = e.prefix && $(t) || t, o[t] = o[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        },
        wt = U._registerComplexSpecialProp = function (t, e, i) {
          "object" != typeof e && (e = {
            parser: i
          });
          var s, r = t.split(","),
            n = e.defaultValue;
          for (i = i || [n], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, new bt(r[s], e)
        },
        Pt = U._registerPluginProp = function (t) {
          if (!o[t]) {
            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
            wt(t, {
              parser: function (t, i, s, r, n, l, h) {
                var u = a.com.greensock.plugins[e];
                return u ? (u._cssRegister(), o[s].parse(t, i, s, r, n, l, h)) : (Z("Error: " + e + " js file not loaded."), n)
              }
            })
          }
        };
      (l = bt.prototype).parseComplex = function (t, e, i, s, r, n) {
        var a, o, l, h, u, _, c = this.keyword;
        if (this.multi && (E.test(i) || E.test(e) ? (o = e.replace(E, "|").split("|"), l = i.replace(E, "|").split("|")) : c && (o = [e], l = [i])), l) {
          for (h = l.length > o.length ? l.length : o.length, a = 0; a < h; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (u = e.indexOf(c)) !== (_ = i.indexOf(c)) && (-1 === _ ? o[a] = o[a].split(c).join("") : -1 === u && (o[a] += " " + c));
          e = o.join(", "), i = l.join(", ")
        }
        return xt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
      }, l.parse = function (t, e, s, r, n, a, o) {
        return this.parseComplex(t.style, this.format(J(t, this.p, i, !1, this.dflt)), this.format(e), n, a)
      }, n.registerSpecialProp = function (t, e, i) {
        wt(t, {
          parser: function (t, s, r, n, a, o, l) {
            var h = new yt(t, r, 0, 0, a, 2, r, !1, i);
            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
          },
          priority: i
        })
      }, n.useSVGTransformAttr = !0;
      var Ot, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        St = $("transform"),
        Rt = G + "transform",
        At = $("transformOrigin"),
        Ct = null !== $("perspective"),
        Mt = U.Transform = function () {
          this.perspective = parseFloat(n.defaultTransformPerspective) || 0, this.force3D = !(!1 === n.defaultForce3D || !Ct) && (n.defaultForce3D || "auto")
        },
        Dt = s.e.SVGElement,
        Et = function (t, e, i) {
          var s, r = L.createElementNS("http://www.w3.org/2000/svg", t),
            n = /([a-z])([A-Z])/g;
          for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
          return e.appendChild(r), r
        },
        It = L.documentElement || {},
        Bt = function () {
          var t, e, i, r = p || /Android/i.test(V) && !s.e.chrome;
          return L.createElementNS && !r && (t = Et("svg", It), i = (e = Et("rect", t, {
            width: 100,
            height: 50,
            x: 100
          })).getBoundingClientRect().width, e.style[At] = "50% 50%", e.style[St] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(c && Ct), It.removeChild(t)), r
        }(),
        Ft = function (t, e, i, s, r, a) {
          var o, l, h, u, _, c, f, p, d, m, g, y, v, x, T = t._gsTransform,
            b = Nt(t, !0);
          T && (v = T.xOrigin, x = T.yOrigin), (!s || (o = s.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
            width: 0,
            height: 0
          }), o = [(-1 !== (e = at(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = _ = parseFloat(o[1]), s && b !== Lt && (c = b[0], f = b[1], p = b[2], d = b[3], m = b[4], g = b[5], (y = c * d - f * p) && (l = u * (d / y) + _ * (-p / y) + (p * g - d * m) / y, h = u * (-f / y) + _ * (c / y) - (c * g - f * m) / y, u = i.xOrigin = o[0] = l, _ = i.yOrigin = o[1] = h)), T && (a && (i.xOffset = T.xOffset, i.yOffset = T.yOffset, T = i), r || !1 !== r && !1 !== n.defaultSmoothOrigin ? (l = u - v, h = _ - x, T.xOffset += l * b[0] + h * b[2] - l, T.yOffset += l * b[1] + h * b[3] - h) : T.xOffset = T.yOffset = 0), a || t.setAttribute("data-svg-origin", o.join(" "))
        },
        zt = function (t) {
          var e, i = N("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = this.parentNode,
            r = this.nextSibling,
            n = this.style.cssText;
          if (It.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = zt
          } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
          return r ? s.insertBefore(this, r) : s.appendChild(this), It.removeChild(i), this.style.cssText = n, e
        },
        Xt = function (t) {
          return !(!Dt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function (t) {
            try {
              return t.getBBox()
            } catch (e) {
              return zt.call(t, !0)
            }
          }(t))
        },
        Lt = [1, 0, 0, 1, 0, 0],
        Nt = function (t, e) {
          var i, s, r, n, a, o, l = t._gsTransform || new Mt,
            h = t.style;
          if (St ? s = J(t, Rt, null, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match(M)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, !St || !(o = !Q(t) || "none" === Q(t).display) && t.parentNode || (o && (n = h.display, h.display = "block"), t.parentNode || (a = 1, It.appendChild(t)), i = !(s = J(t, Rt, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? h.display = n : o && qt(h, "display"), a && It.removeChild(t)), (l.svg || t.getCTM && Xt(t)) && (i && -1 !== (h[St] + "").indexOf("matrix") && (s = h[St], i = 0), r = t.getAttribute("transform"), i && r && (s = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", i = 0)), i) return Lt;
          for (r = (s || "").match(g) || [], Tt = r.length; --Tt > -1;) n = Number(r[Tt]), r[Tt] = (a = n - (n |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + n : n;
          return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
        },
        Yt = U.getTransform = function (t, e, i, r) {
          if (t._gsTransform && i && !r) return t._gsTransform;
          var a, o, l, h, u, _, c = i && t._gsTransform || new Mt,
            f = c.scaleX < 0,
            p = Ct && (parseFloat(J(t, At, e, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0,
            d = parseFloat(n.defaultTransformPerspective) || 0;
          if (c.svg = !(!t.getCTM || !Xt(t)), c.svg && (Ft(t, J(t, At, e, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")), Ot = n.useSVGTransformAttr || Bt), (a = Nt(t)) !== Lt) {
            if (16 === a.length) {
              var m, g, y, v, x, T = a[0],
                b = a[1],
                w = a[2],
                P = a[3],
                O = a[4],
                k = a[5],
                S = a[6],
                R = a[7],
                A = a[8],
                C = a[9],
                M = a[10],
                D = a[12],
                E = a[13],
                I = a[14],
                B = a[11],
                z = Math.atan2(S, M);
              c.zOrigin && (D = A * (I = -c.zOrigin) - a[12], E = C * I - a[13], I = M * I + c.zOrigin - a[14]), c.rotationX = z * F, z && (m = O * (v = Math.cos(-z)) + A * (x = Math.sin(-z)), g = k * v + C * x, y = S * v + M * x, A = O * -x + A * v, C = k * -x + C * v, M = S * -x + M * v, B = R * -x + B * v, O = m, k = g, S = y), z = Math.atan2(-w, M), c.rotationY = z * F, z && (g = b * (v = Math.cos(-z)) - C * (x = Math.sin(-z)), y = w * v - M * x, C = b * x + C * v, M = w * x + M * v, B = P * x + B * v, T = m = T * v - A * x, b = g, w = y), z = Math.atan2(b, T), c.rotation = z * F, z && (m = T * (v = Math.cos(z)) + b * (x = Math.sin(z)), g = O * v + k * x, y = A * v + C * x, b = b * v - T * x, k = k * v - O * x, C = C * v - A * x, T = m, O = g, A = y), c.rotationX && Math.abs(c.rotationX) + Math.abs(c.rotation) > 359.9 && (c.rotationX = c.rotation = 0, c.rotationY = 180 - c.rotationY), z = Math.atan2(O, k), c.scaleX = (1e5 * Math.sqrt(T * T + b * b + w * w) + .5 | 0) / 1e5, c.scaleY = (1e5 * Math.sqrt(k * k + S * S) + .5 | 0) / 1e5, c.scaleZ = (1e5 * Math.sqrt(A * A + C * C + M * M) + .5 | 0) / 1e5, T /= c.scaleX, O /= c.scaleY, b /= c.scaleX, k /= c.scaleY, Math.abs(z) > 2e-5 ? (c.skewX = z * F, O = 0, "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(z))) : c.skewX = 0, c.perspective = B ? 1 / (B < 0 ? -B : B) : 0, c.x = D, c.y = E, c.z = I, c.svg && (c.x -= c.xOrigin - (c.xOrigin * T - c.yOrigin * O), c.y -= c.yOrigin - (c.yOrigin * b - c.xOrigin * k))
            } else if (!Ct || r || !a.length || c.x !== a[4] || c.y !== a[5] || !c.rotationX && !c.rotationY) {
              var X = a.length >= 6,
                L = X ? a[0] : 1,
                N = a[1] || 0,
                Y = a[2] || 0,
                j = X ? a[3] : 1;
              c.x = a[4] || 0, c.y = a[5] || 0, l = Math.sqrt(L * L + N * N), h = Math.sqrt(j * j + Y * Y), u = L || N ? Math.atan2(N, L) * F : c.rotation || 0, _ = Y || j ? Math.atan2(Y, j) * F + u : c.skewX || 0, c.scaleX = l, c.scaleY = h, c.rotation = u, c.skewX = _, Ct && (c.rotationX = c.rotationY = c.z = 0, c.perspective = d, c.scaleZ = 1), c.svg && (c.x -= c.xOrigin - (c.xOrigin * L + c.yOrigin * Y), c.y -= c.yOrigin - (c.xOrigin * N + c.yOrigin * j))
            }
            for (o in Math.abs(c.skewX) > 90 && Math.abs(c.skewX) < 270 && (f ? (c.scaleX *= -1, c.skewX += c.rotation <= 0 ? 180 : -180, c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1, c.skewX += c.skewX <= 0 ? 180 : -180)), c.zOrigin = p, c) c[o] < 2e-5 && c[o] > -2e-5 && (c[o] = 0)
          }
          return i && (t._gsTransform = c, c.svg && (Ot && t.style[St] ? s.f.delayedCall(.001, function () {
            qt(t.style, St)
          }) : !Ot && t.getAttribute("transform") && s.f.delayedCall(.001, function () {
            t.removeAttribute("transform")
          }))), c
        },
        jt = function (t) {
          var e, i, s = this.data,
            r = -s.rotation * B,
            n = r + s.skewX * B,
            a = (Math.cos(r) * s.scaleX * 1e5 | 0) / 1e5,
            o = (Math.sin(r) * s.scaleX * 1e5 | 0) / 1e5,
            l = (Math.sin(n) * -s.scaleY * 1e5 | 0) / 1e5,
            h = (Math.cos(n) * s.scaleY * 1e5 | 0) / 1e5,
            u = this.t.style,
            _ = this.t.currentStyle;
          if (_) {
            i = o, o = -l, l = -i, e = _.filter, u.filter = "";
            var c, f, d = this.t.offsetWidth,
              m = this.t.offsetHeight,
              g = "absolute" !== _.position,
              y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h,
              v = s.x + d * s.xPercent / 100,
              x = s.y + m * s.yPercent / 100;
            if (null != s.ox && (v += (c = (s.oxp ? d * s.ox * .01 : s.ox) - d / 2) - (c * a + (f = (s.oyp ? m * s.oy * .01 : s.oy) - m / 2) * o), x += f - (c * l + f * h)), y += g ? ", Dx=" + ((c = d / 2) - (c * a + (f = m / 2) * o) + v) + ", Dy=" + (f - (c * l + f * h) + x) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(D, y) : u.filter = y + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === o && 0 === l && 1 === h && (g && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !g) {
              var w, P, O, k = p < 8 ? 1 : -1;
              for (c = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((a < 0 ? -a : a) * d + (o < 0 ? -o : o) * m)) / 2 + v), s.ieOffsetY = Math.round((m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * d)) / 2 + x), Tt = 0; Tt < 4; Tt++) O = (i = -1 !== (w = _[P = rt[Tt]]).indexOf("px") ? parseFloat(w) : K(this.t, P, parseFloat(w), w.replace(T, "")) || 0) !== s[P] ? Tt < 2 ? -s.ieOffsetX : -s.ieOffsetY : Tt < 2 ? c - s.ieOffsetX : f - s.ieOffsetY, u[P] = (s[P] = Math.round(i - O * (0 === Tt || 2 === Tt ? 1 : k))) + "px"
            }
          }
        },
        Ut = U.set3DTransformRatio = U.setTransformRatio = function (t) {
          var e, i, s, r, n, a, o, l, h, u, _, f, p, d, m, g, y, v, x, T, b, w = this.data,
            P = this.t.style,
            O = w.rotation,
            k = w.rotationX,
            S = w.rotationY,
            R = w.scaleX,
            A = w.scaleY,
            C = w.scaleZ,
            M = w.x,
            D = w.y,
            E = w.z,
            I = w.svg,
            F = w.perspective,
            z = w.force3D,
            X = w.skewY,
            L = w.skewX;
          if (X && (L += X, O += X), !((1 !== t && 0 !== t || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || E || F || S || k || 1 !== C) || Ot && I || !Ct) O || L || I ? (O *= B, T = L * B, b = 1e5, i = Math.cos(O) * R, n = Math.sin(O) * R, s = Math.sin(O - T) * -A, a = Math.cos(O - T) * A, T && "simple" === w.skewType && (e = Math.tan(T - X * B), s *= e = Math.sqrt(1 + e * e), a *= e, X && (e = Math.tan(X * B), i *= e = Math.sqrt(1 + e * e), n *= e)), I && (M += w.xOrigin - (w.xOrigin * i + w.yOrigin * s) + w.xOffset, D += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset, Ot && (w.xPercent || w.yPercent) && (m = this.t.getBBox(), M += .01 * w.xPercent * m.width, D += .01 * w.yPercent * m.height), M < (m = 1e-6) && M > -m && (M = 0), D < m && D > -m && (D = 0)), x = (i * b | 0) / b + "," + (n * b | 0) / b + "," + (s * b | 0) / b + "," + (a * b | 0) / b + "," + M + "," + D + ")", I && Ot ? this.t.setAttribute("transform", "matrix(" + x) : P[St] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + x) : P[St] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + A + "," + M + "," + D + ")";
          else {
            if (c && (R < (m = 1e-4) && R > -m && (R = C = 2e-5), A < m && A > -m && (A = C = 2e-5), !F || w.z || w.rotationX || w.rotationY || (F = 0)), O || L) O *= B, g = i = Math.cos(O), y = n = Math.sin(O), L && (O -= L * B, g = Math.cos(O), y = Math.sin(O), "simple" === w.skewType && (e = Math.tan((L - X) * B), g *= e = Math.sqrt(1 + e * e), y *= e, w.skewY && (e = Math.tan(X * B), i *= e = Math.sqrt(1 + e * e), n *= e))), s = -y, a = g;
            else {
              if (!(S || k || 1 !== C || F || I)) return void(P[St] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + D + "px," + E + "px)" + (1 !== R || 1 !== A ? " scale(" + R + "," + A + ")" : ""));
              i = a = 1, s = n = 0
            }
            u = 1, r = o = l = h = _ = f = 0, p = F ? -1 / F : 0, d = w.zOrigin, m = 1e-6, ",", "0", (O = S * B) && (g = Math.cos(O), l = -(y = Math.sin(O)), _ = p * -y, r = i * y, o = n * y, u = g, p *= g, i *= g, n *= g), (O = k * B) && (e = s * (g = Math.cos(O)) + r * (y = Math.sin(O)), v = a * g + o * y, h = u * y, f = p * y, r = s * -y + r * g, o = a * -y + o * g, u *= g, p *= g, s = e, a = v), 1 !== C && (r *= C, o *= C, u *= C, p *= C), 1 !== A && (s *= A, a *= A, h *= A, f *= A), 1 !== R && (i *= R, n *= R, l *= R, _ *= R), (d || I) && (d && (M += r * -d, D += o * -d, E += u * -d + d), I && (M += w.xOrigin - (w.xOrigin * i + w.yOrigin * s) + w.xOffset, D += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset), M < m && M > -m && (M = "0"), D < m && D > -m && (D = "0"), E < m && E > -m && (E = 0)), x = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < m && i > -m ? "0" : i) + "," + (n < m && n > -m ? "0" : n) + "," + (l < m && l > -m ? "0" : l), x += "," + (_ < m && _ > -m ? "0" : _) + "," + (s < m && s > -m ? "0" : s) + "," + (a < m && a > -m ? "0" : a), k || S || 1 !== C ? (x += "," + (h < m && h > -m ? "0" : h) + "," + (f < m && f > -m ? "0" : f) + "," + (r < m && r > -m ? "0" : r), x += "," + (o < m && o > -m ? "0" : o) + "," + (u < m && u > -m ? "0" : u) + "," + (p < m && p > -m ? "0" : p) + ",") : x += ",0,0,0,0,1,0,", x += M + "," + D + "," + E + "," + (F ? 1 + -E / F : 1) + ")", P[St] = x
          }
        };
      (l = Mt.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
        parser: function (t, e, s, r, a, o, l) {
          if (r._lastParsedTransform === l) return a;
          r._lastParsedTransform = l;
          var h, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
          "function" == typeof l[s] && (h = l[s], l[s] = e), u && (l.scale = u(m, t));
          var _, c, f, p, g, y, v, x, T, b = t._gsTransform,
            w = t.style,
            P = kt.length,
            O = l,
            k = {},
            S = Yt(t, i, !0, O.parseTransform),
            R = O.transform && ("function" == typeof O.transform ? O.transform(m, d) : O.transform);
          if (S.skewType = O.skewType || S.skewType || n.defaultSkewType, r._transform = S, R && "string" == typeof R && St)(c = Y.style)[St] = R, c.display = "block", c.position = "absolute", -1 !== R.indexOf("%") && (c.width = J(t, "width"), c.height = J(t, "height")), L.body.appendChild(Y), _ = Yt(Y, null, !1), "simple" === S.skewType && (_.scaleY *= Math.cos(_.skewX * B)), S.svg && (y = S.xOrigin, v = S.yOrigin, _.x -= S.xOffset, _.y -= S.yOffset, (O.transformOrigin || O.svgOrigin) && (R = {}, Ft(t, at(O.transformOrigin), R, O.svgOrigin, O.smoothOrigin, !0), y = R.xOrigin, v = R.yOrigin, _.x -= R.xOffset - S.xOffset, _.y -= R.yOffset - S.yOffset), (y || v) && (x = Nt(Y, !0), _.x -= y - (y * x[0] + v * x[2]), _.y -= v - (y * x[1] + v * x[3]))), L.body.removeChild(Y), _.perspective || (_.perspective = S.perspective), null != O.xPercent && (_.xPercent = lt(O.xPercent, S.xPercent)), null != O.yPercent && (_.yPercent = lt(O.yPercent, S.yPercent));
          else if ("object" == typeof O) {
            if (_ = {
                scaleX: lt(null != O.scaleX ? O.scaleX : O.scale, S.scaleX),
                scaleY: lt(null != O.scaleY ? O.scaleY : O.scale, S.scaleY),
                scaleZ: lt(O.scaleZ, S.scaleZ),
                x: lt(O.x, S.x),
                y: lt(O.y, S.y),
                z: lt(O.z, S.z),
                xPercent: lt(O.xPercent, S.xPercent),
                yPercent: lt(O.yPercent, S.yPercent),
                perspective: lt(O.transformPerspective, S.perspective)
              }, null != (g = O.directionalRotation))
              if ("object" == typeof g)
                for (c in g) O[c] = g[c];
              else O.rotation = g;
            "string" == typeof O.x && -1 !== O.x.indexOf("%") && (_.x = 0, _.xPercent = lt(O.x, S.xPercent)), "string" == typeof O.y && -1 !== O.y.indexOf("%") && (_.y = 0, _.yPercent = lt(O.y, S.yPercent)), _.rotation = ht("rotation" in O ? O.rotation : "shortRotation" in O ? O.shortRotation + "_short" : "rotationZ" in O ? O.rotationZ : S.rotation, S.rotation, "rotation", k), Ct && (_.rotationX = ht("rotationX" in O ? O.rotationX : "shortRotationX" in O ? O.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", k), _.rotationY = ht("rotationY" in O ? O.rotationY : "shortRotationY" in O ? O.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", k)), _.skewX = ht(O.skewX, S.skewX), _.skewY = ht(O.skewY, S.skewY)
          }
          for (Ct && null != O.force3D && (S.force3D = O.force3D, p = !0), (f = S.force3D || S.z || S.rotationX || S.rotationY || _.z || _.rotationX || _.rotationY || _.perspective) || null == O.scale || (_.scaleZ = 1); --P > -1;)((R = _[T = kt[P]] - S[T]) > 1e-6 || R < -1e-6 || null != O[T] || null != z[T]) && (p = !0, a = new yt(S, T, S[T], R, a), T in k && (a.e = k[T]), a.xs0 = 0, a.plugin = o, r._overwriteProps.push(a.n));
          return R = O.transformOrigin, S.svg && (R || O.svgOrigin) && (y = S.xOffset, v = S.yOffset, Ft(t, at(R), _, O.svgOrigin, O.smoothOrigin), a = vt(S, "xOrigin", (b ? S : _).xOrigin, _.xOrigin, a, "transformOrigin"), a = vt(S, "yOrigin", (b ? S : _).yOrigin, _.yOrigin, a, "transformOrigin"), y === S.xOffset && v === S.yOffset || (a = vt(S, "xOffset", b ? y : S.xOffset, S.xOffset, a, "transformOrigin"), a = vt(S, "yOffset", b ? v : S.yOffset, S.yOffset, a, "transformOrigin")), R = "0px 0px"), (R || Ct && f && S.zOrigin) && (St ? (p = !0, T = At, R = (R || J(t, T, i, !1, "50% 50%")) + "", (a = new yt(w, T, 0, 0, a, -1, "transformOrigin")).b = w[T], a.plugin = o, Ct ? (c = S.zOrigin, R = R.split(" "), S.zOrigin = (R.length > 2 && (0 === c || "0px" !== R[2]) ? parseFloat(R[2]) : c) || 0, a.xs0 = a.e = R[0] + " " + (R[1] || "50%") + " 0px", (a = new yt(S, "zOrigin", 0, 0, a, -1, a.n)).b = c, a.xs0 = a.e = S.zOrigin) : a.xs0 = a.e = R) : at(R + "", S)), p && (r._transformType = S.svg && Ot || !f && 3 !== this._transformType ? 2 : 3), h && (l[s] = h), u && (l.scale = u), a
        },
        prefix: !0
      }), wt("boxShadow", {
        defaultValue: "0px 0px 0px 0px #999",
        prefix: !0,
        color: !0,
        multi: !0,
        keyword: "inset"
      }), wt("borderRadius", {
        defaultValue: "0px",
        parser: function (t, s, r, n, a, o) {
          s = this.format(s);
          var l, h, u, _, c, f, p, d, m, g, y, v, x, T, b, w, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            O = t.style;
          for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = s.split(" "), h = 0; h < P.length; h++) this.p.indexOf("border") && (P[h] = $(P[h])), -1 !== (c = _ = J(t, P[h], i, !1, "0px")).indexOf(" ") && (c = (_ = c.split(" "))[0], _ = _[1]), f = u = l[h], p = parseFloat(c), v = c.substr((p + "").length), (x = "=" === f.charAt(1)) ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), y = f.substr((d + "").length - (d < 0 ? 1 : 0)) || "") : (d = parseFloat(f), y = f.substr((d + "").length)), "" === y && (y = e[r] || v), y !== v && (T = K(t, "borderLeft", p, v), b = K(t, "borderTop", p, v), "%" === y ? (c = T / m * 100 + "%", _ = b / g * 100 + "%") : "em" === y ? (c = T / (w = K(t, "borderLeft", 1, "em")) + "em", _ = b / w + "em") : (c = T + "px", _ = b + "px"), x && (f = parseFloat(c) + d + y, u = parseFloat(_) + d + y)), a = xt(O, P[h], c + " " + _, f + " " + u, !1, "0px", a);
          return a
        },
        prefix: !0,
        formatter: dt("0px 0px 0px 0px", !1, !0)
      }), wt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
        defaultValue: "0px",
        parser: function (t, e, s, r, n, a) {
          return xt(t.style, s, this.format(J(t, s, i, !1, "0px 0px")), this.format(e), !1, "0px", n)
        },
        prefix: !0,
        formatter: dt("0px 0px", !1, !0)
      }), wt("backgroundPosition", {
        defaultValue: "0 0",
        parser: function (t, e, s, r, n, a) {
          var o, l, h, u, _, c, f = "background-position",
            d = i || Q(t, null),
            m = this.format((d ? p ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
            g = this.format(e);
          if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (c = J(t, "backgroundImage").replace(R, "")) && "none" !== c) {
            for (o = m.split(" "), l = g.split(" "), j.setAttribute("src", c), h = 2; --h > -1;)(u = -1 !== (m = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (_ = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height, o[h] = u ? parseFloat(m) / 100 * _ + "px" : parseFloat(m) / _ * 100 + "%");
            m = o.join(" ")
          }
          return this.parseComplex(t.style, m, g, n, a)
        },
        formatter: at
      }), wt("backgroundSize", {
        defaultValue: "0 0",
        formatter: function (t) {
          return "co" === (t += "").substr(0, 2) ? t : at(-1 === t.indexOf(" ") ? t + " " + t : t)
        }
      }), wt("perspective", {
        defaultValue: "0px",
        prefix: !0
      }), wt("perspectiveOrigin", {
        defaultValue: "50% 50%",
        prefix: !0
      }), wt("transformStyle", {
        prefix: !0
      }), wt("backfaceVisibility", {
        prefix: !0
      }), wt("userSelect", {
        prefix: !0
      }), wt("margin", {
        parser: mt("marginTop,marginRight,marginBottom,marginLeft")
      }), wt("padding", {
        parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft")
      }), wt("clip", {
        defaultValue: "rect(0px,0px,0px,0px)",
        parser: function (t, e, s, r, n, a) {
          var o, l, h;
          return p < 9 ? (l = t.currentStyle, h = p < 8 ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(J(t, this.p, i, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
        }
      }), wt("textShadow", {
        defaultValue: "0px 0px 0px #999",
        color: !0,
        multi: !0
      }), wt("autoRound,strictUnits", {
        parser: function (t, e, i, s, r) {
          return r
        }
      }), wt("border", {
        defaultValue: "0px solid #000",
        parser: function (t, e, s, r, n, a) {
          var o = J(t, "borderTopWidth", i, !1, "0px"),
            l = this.format(e).split(" "),
            h = l[0].replace(T, "");
          return "px" !== h && (o = parseFloat(o) / K(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + J(t, "borderTopStyle", i, !1, "solid") + " " + J(t, "borderTopColor", i, !1, "#000")), l.join(" "), n, a)
        },
        color: !0,
        formatter: function (t) {
          var e = t.split(" ");
          return e[0] + " " + (e[1] || "solid") + " " + (t.match(pt) || ["#000"])[0]
        }
      }), wt("borderWidth", {
        parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
      }), wt("float,cssFloat,styleFloat", {
        parser: function (t, e, i, s, r, n) {
          var a = t.style,
            o = "cssFloat" in a ? "cssFloat" : "styleFloat";
          return new yt(a, o, 0, 0, r, -1, i, !1, 0, a[o], e)
        }
      });
      var Vt = function (t) {
        var e, i = this.t,
          s = i.filter || J(this.data, "filter") || "",
          r = this.s + this.c * t | 0;
        100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !J(this.data, "filter")) : (i.filter = s.replace(P, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(b, "opacity=" + r))
      };
      wt("opacity,alpha,autoAlpha", {
        defaultValue: "1",
        parser: function (t, e, s, r, n, a) {
          var o = parseFloat(J(t, "opacity", i, !1, "1")),
            l = t.style,
            h = "autoAlpha" === s;
          return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === J(t, "visibility", i) && 0 !== e && (o = 0), q ? n = new yt(l, "opacity", o, e - o, n) : ((n = new yt(l, "opacity", 100 * o, 100 * (e - o), n)).xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Vt), h && ((n = new yt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(s)), n
        }
      });
      var qt = function (t, e) {
          e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
        },
        Wt = function (t) {
          if (this.t._gsClassPT = this, 1 === t || 0 === t) {
            this.t.setAttribute("class", 0 === t ? this.b : this.e);
            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : qt(i, e.p), e = e._next;
            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
          } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
      wt("className", {
        parser: function (e, s, r, n, a, o, l) {
          var h, u, _, c, f, p = e.getAttribute("class") || "",
            d = e.style.cssText;
          if ((a = n._classNamePT = new yt(e, r, 0, 0, a, 2)).setRatio = Wt, a.pr = -11, t = !0, a.b = p, u = et(e, i), _ = e._gsClassPT) {
            for (c = {}, f = _.data; f;) c[f.p] = 1, f = f._next;
            _.setRatio(1)
          }
          return e._gsClassPT = a, a.e = "=" !== s.charAt(1) ? s : p.replace(new RegExp("(?:\\s|^)" + s.substr(2) + "(?![\\w-])"), "") + ("+" === s.charAt(0) ? " " + s.substr(2) : ""), e.setAttribute("class", a.e), h = it(e, u, et(e), l, c), e.setAttribute("class", p), a.data = h.firstMPT, e.style.cssText = d, a = a.xfirst = n.parse(e, h.difs, a, o)
        }
      });
      var Zt = function (t) {
        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
          var e, i, s, r, n, a = this.t.style,
            l = o.transform.parse;
          if ("all" === this.e) a.cssText = "", r = !0;
          else
            for (s = (e = this.e.split(" ").join("").split(",")).length; --s > -1;) i = e[s], o[i] && (o[i].parse === l ? r = !0 : i = "transformOrigin" === i ? At : o[i].p), qt(a, i);
          r && (qt(a, St), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
        }
      };
      for (wt("clearProps", {
          parser: function (e, i, s, r, n) {
            return (n = new yt(e, s, 0, 0, n, 2)).setRatio = Zt, n.e = i, n.pr = -10, n.data = r._tween, t = !0, n
          }
        }), l = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = l.length; Tt--;) Pt(l[Tt]);
      (l = n.prototype)._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function (s, a, l, c) {
        if (!s.nodeType) return !1;
        this._target = d = s, this._tween = l, this._vars = a, m = c, h = a.autoRound, t = !1, e = a.suffixMap || n.suffixMap, i = Q(s, ""), r = this._overwriteProps;
        var p, g, y, v, x, T, b, P, O, k = s.style;
        if (u && "" === k.zIndex && ("auto" !== (p = J(s, "zIndex", i)) && "" !== p || this._addLazySet(k, "zIndex", 0)), "string" == typeof a && (v = k.cssText, p = et(s, i), k.cssText = v + ";" + a, p = it(s, p, et(s)).difs, !q && w.test(a) && (p.opacity = parseFloat(RegExp.$1)), a = p, k.cssText = v), a.className ? this._firstPT = g = o.className.parse(s, a.className, "className", this, null, null, a) : this._firstPT = g = this.parse(s, a, null), this._transformType) {
          for (O = 3 === this._transformType, St ? _ && (u = !0, "" === k.zIndex && ("auto" !== (b = J(s, "zIndex", i)) && "" !== b || this._addLazySet(k, "zIndex", 0)), f && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (O ? "visible" : "hidden"))) : k.zoom = 1, y = g; y && y._next;) y = y._next;
          P = new yt(s, "transform", 0, 0, null, 2), this._linkCSSP(P, null, y), P.setRatio = St ? Ut : jt, P.data = this._transform || Yt(s, i, !0), P.tween = l, P.pr = -1, r.pop()
        }
        if (t) {
          for (; g;) {
            for (T = g._next, y = v; y && y.pr > g.pr;) y = y._next;
            (g._prev = y ? y._prev : x) ? g._prev._next = g: v = g, (g._next = y) ? y._prev = g : x = g, g = T
          }
          this._firstPT = v
        }
        return !0
      }, l.parse = function (t, s, r, n) {
        var a, l, u, _, c, f, p, g, y, v, x = t.style;
        for (a in s) {
          if ("function" == typeof (f = s[a]) && (f = f(m, d)), l = o[a]) r = l.parse(t, f, a, this, r, n, s);
          else {
            if ("--" === a.substr(0, 2)) {
              this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", Q(t).getPropertyValue(a) + "", f + "", a, !1, a);
              continue
            }
            c = J(t, a, i) + "", y = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || y && O.test(f) ? (y || (f = ((f = ct(f)).length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), r = xt(x, a, c, f, !0, "transparent", r, 0, n)) : y && I.test(f) ? r = xt(x, a, c, f, !0, null, r, 0, n) : (p = (u = parseFloat(c)) || 0 === u ? c.substr((u + "").length) : "", "" !== c && "auto" !== c || ("width" === a || "height" === a ? (u = nt(t, a, i), p = "px") : "left" === a || "top" === a ? (u = tt(t, a, i), p = "px") : (u = "opacity" !== a ? 0 : 1, p = "")), (v = y && "=" === f.charAt(1)) ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), g = f.replace(T, "")) : (_ = parseFloat(f), g = y ? f.replace(T, "") : ""), "" === g && (g = a in e ? e[a] : p), f = _ || 0 === _ ? (v ? _ + u : _) + g : s[a], p !== g && ("" === g && "lineHeight" !== a || (_ || 0 === _) && u && (u = K(t, a, u, p), "%" === g ? (u /= K(t, a, 100, "%") / 100, !0 !== s.strictUnits && (c = u + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? u /= K(t, a, 1, g) : "px" !== g && (_ = K(t, a, _, g), g = "px"), v && (_ || 0 === _) && (f = _ + u + g))), v && (_ += u), !u && 0 !== u || !_ && 0 !== _ ? void 0 !== x[a] && (f || f + "" != "NaN" && null != f) ? (r = new yt(x, a, _ || u || 0, 0, r, -1, a, !1, 0, c, f)).xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c : Z("invalid " + a + " tween value: " + s[a]) : (r = new yt(x, a, u, _ - u, r, 0, a, !1 !== h && ("px" === g || "zIndex" === a), 0, c, f)).xs0 = g)
          }
          n && r && !r.plugin && (r.plugin = n)
        }
        return r
      }, l.setRatio = function (t) {
        var e, i, s, r = this._firstPT;
        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
          if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
            for (; r;) {
              if (e = r.c * t + r.s, r.r ? e = r.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                if (1 === r.type)
                  if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                  else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
              else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
              else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
              else {
                for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                r.t[r.p] = i
              } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
              else r.t[r.p] = e + r.xs0;
              r = r._next
            } else
              for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
          else
            for (; r;) {
              if (2 !== r.type)
                if (r.r && -1 !== r.type)
                  if (e = r.r(r.s + r.c), r.type) {
                    if (1 === r.type) {
                      for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                      r.t[r.p] = i
                    }
                  } else r.t[r.p] = e + r.xs0;
              else r.t[r.p] = r.e;
              else r.setRatio(t);
              r = r._next
            }
      }, l._enableTransforms = function (t) {
        this._transform = this._transform || Yt(this._target, i, !0), this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
      };
      var Gt = function (t) {
        this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
      };
      l._addLazySet = function (t, e, i) {
        var s = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
        s.e = i, s.setRatio = Gt, s.data = this
      }, l._linkCSSP = function (t, e, i, s) {
        return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
      }, l._mod = function (t) {
        for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
      }, l._kill = function (t) {
        var e, i, r, n = t;
        if (t.autoAlpha || t.alpha) {
          for (i in n = {}, t) n[i] = t[i];
          n.opacity = 1, n.autoAlpha && (n.visibility = 1)
        }
        for (t.className && (e = this._classNamePT) && ((r = e.xfirst) && r._prev ? this._linkCSSP(r._prev, e._next, r._prev._prev) : r === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, r._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
        return s.d.prototype._kill.call(this, n)
      };
      var Ht = function (t, e, i) {
        var s, r, n, a;
        if (t.slice)
          for (r = t.length; --r > -1;) Ht(t[r], e, i);
        else
          for (r = (s = t.childNodes).length; --r > -1;) a = (n = s[r]).type, n.style && (e.push(et(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ht(n, e, i)
      };
      return n.cascadeTo = function (t, e, i) {
        var r, n, a, o, l = s.f.to(t, e, i),
          h = [l],
          u = [],
          _ = [],
          c = [],
          f = s.f._internals.reservedProps;
        for (t = l._targets || l.target, Ht(t, u, c), l.render(e, !0, !0), Ht(t, _), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;)
          if ((n = it(c[r], u[r], _[r])).firstMPT) {
            for (a in n = n.difs, i) f[a] && (n[a] = i[a]);
            for (a in o = {}, n) o[a] = u[r][a];
            h.push(s.f.fromTo(c[r], e, o, n))
          } return h
      }, s.d.activate([n]), n
    }, !0);
    const r = s.e.CSSPlugin
  },
  631: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return s
    });
    const s = i(627).e._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      init: function (t, e, i, s) {
        var r, n;
        if ("function" != typeof t.setAttribute) return !1;
        for (r in e) "function" == typeof (n = e[r]) && (n = n(s, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", n + "", r, !1, r), this._overwriteProps.push(r);
        return !0
      }
    })
  },
  632: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return s
    });
    const s = i(627).e._gsDefine.plugin({
        propName: "roundProps",
        version: "1.7.0",
        priority: -1,
        API: 2,
        init: function (t, e, i) {
          return this._tween = i, !0
        }
      }),
      r = function (t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (i) {
          return (Math.round(i / t) * t * e | 0) / e
        }
      },
      n = function (t, e) {
        for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
      },
      a = s.prototype;
    a._onInitAllProps = function () {
      var t, e, i, s, a = this._tween,
        o = a.vars.roundProps,
        l = {},
        h = a._propLookup.roundProps;
      if ("object" != typeof o || o.push)
        for ("string" == typeof o && (o = o.split(",")), i = o.length; --i > -1;) l[o[i]] = Math.round;
      else
        for (s in o) l[s] = r(o[s]);
      for (s in l)
        for (t = a._firstPT; t;) e = t._next, t.pg ? t.t._mod(l) : t.n === s && (2 === t.f && t.t ? n(t.t._firstPT, l[s]) : (this._add(t.t, s, t.s, t.c, l[s]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : a._firstPT === t && (a._firstPT = e), t._next = t._prev = null, a._propLookup[s] = h)), t = e;
      return !1
    }, a._add = function (t, e, i, s, r) {
      this._addTween(t, e, i, i + s, e, r || Math.round), this._overwriteProps.push(e)
    }
  },
  633: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return s
    });
    const s = i(627).e._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (t, e, i, s) {
        "object" != typeof e && (e = {
          rotation: e
        }), this.finals = {};
        var r, n, a, o, l, h, u = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (r in e) "useRadians" !== r && ("function" == typeof (o = e[r]) && (o = o(s, t)), n = (h = (o + "").split("_"))[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (o = this.finals[r] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - a, h.length && (-1 !== (n = h.join("_")).indexOf("short") && (l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u), -1 !== n.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, r, a, a + l, r), this._overwriteProps.push(r)));
        return !0
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
      }
    });
    s._autoCSS = !0
  },
  634: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return m
    });
    var s = i(627),
      r = 180 / Math.PI,
      n = [],
      a = [],
      o = [],
      l = {},
      h = s.e._gsDefine.globals,
      u = function (t, e, i, s) {
        i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
      },
      _ = function (t, e, i, s) {
        var r = {
            a: t
          },
          n = {},
          a = {},
          o = {
            c: s
          },
          l = (t + e) / 2,
          h = (e + i) / 2,
          u = (i + s) / 2,
          _ = (l + h) / 2,
          c = (h + u) / 2,
          f = (c - _) / 8;
        return r.b = l + (t - l) / 4, n.b = _ + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (_ + c) / 2, a.b = c - f, o.b = u + (s - u) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
      },
      c = function (t, e, i, s, r) {
        var l, h, u, c, f, p, d, m, g, y, v, x, T, b = t.length - 1,
          w = 0,
          P = t[0].a;
        for (l = 0; l < b; l++) h = (f = t[w]).a, u = f.d, c = t[w + 1].d, r ? (v = n[l], T = ((x = a[l]) + v) * e * .25 / (s ? .5 : o[l] || .5), m = u - ((p = u - (u - h) * (s ? .5 * e : 0 !== v ? T / v : 0)) + (((d = u + (c - u) * (s ? .5 * e : 0 !== x ? T / x : 0)) - p) * (3 * v / (v + x) + .5) / 4 || 0))) : m = u - ((p = u - (u - h) * e * .5) + (d = u + (c - u) * e * .5)) / 2, p += m, d += m, f.c = g = p, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - h, f.ca = g - h, f.ba = P - h, i ? (y = _(h, P, g, u), t.splice(w, 1, y[0], y[1], y[2], y[3]), w += 4) : w++, P = d;
        (f = t[w]).b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, i && (y = _(f.a, P, f.c, f.d), t.splice(w, 1, y[0], y[1], y[2], y[3]))
      },
      f = function (t, e, i, s) {
        var r, o, l, h, _, c, f = [];
        if (s)
          for (o = (t = [s].concat(t)).length; --o > -1;) "string" == typeof (c = t[o][e]) && "=" === c.charAt(1) && (t[o][e] = s[e] + Number(c.charAt(0) + c.substr(2)));
        if ((r = t.length - 2) < 0) return f[0] = new u(t[0][e], 0, 0, t[0][e]), f;
        for (o = 0; o < r; o++) l = t[o][e], h = t[o + 1][e], f[o] = new u(l, 0, 0, h), i && (_ = t[o + 2][e], n[o] = (n[o] || 0) + (h - l) * (h - l), a[o] = (a[o] || 0) + (_ - h) * (_ - h));
        return f[o] = new u(t[o][e], 0, 0, t[o + 1][e]), f
      },
      p = function (t, e, i, s, r, h) {
        var u, _, p, d, m, g, y, v, x = {},
          T = [],
          b = h || t[0];
        for (_ in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) T.push(_);
        if (t.length > 1) {
          for (v = t[t.length - 1], y = !0, u = T.length; --u > -1;)
            if (_ = T[u], Math.abs(b[_] - v[_]) > .05) {
              y = !1;
              break
            } y && (t = t.concat(), h && t.unshift(h), t.push(t[1]), h = t[t.length - 3])
        }
        for (n.length = a.length = o.length = 0, u = T.length; --u > -1;) _ = T[u], l[_] = -1 !== r.indexOf("," + _ + ","), x[_] = f(t, _, l[_], h);
        for (u = n.length; --u > -1;) n[u] = Math.sqrt(n[u]), a[u] = Math.sqrt(a[u]);
        if (!s) {
          for (u = T.length; --u > -1;)
            if (l[_])
              for (g = (p = x[T[u]]).length - 1, d = 0; d < g; d++) m = p[d + 1].da / a[d] + p[d].da / n[d] || 0, o[d] = (o[d] || 0) + m * m;
          for (u = o.length; --u > -1;) o[u] = Math.sqrt(o[u])
        }
        for (u = T.length, d = i ? 4 : 1; --u > -1;) p = x[_ = T[u]], c(p, e, i, s, l[_]), y && (p.splice(0, d), p.splice(p.length - d, d));
        return x
      },
      d = function (t, e, i) {
        for (var s, r, n, a, o, l, h, u, _, c, f, p = 1 / i, d = t.length; --d > -1;)
          for (n = (c = t[d]).a, a = c.d - n, o = c.c - n, l = c.b - n, s = r = 0, u = 1; u <= i; u++) s = r - (r = ((h = p * u) * h * a + 3 * (_ = 1 - h) * (h * o + _ * l)) * h), e[f = d * i + u - 1] = (e[f] || 0) + s * s
      },
      m = s.e._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.8",
        API: 2,
        global: !0,
        init: function (t, e, i) {
          this._target = t, e instanceof Array && (e = {
            values: e
          }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
          var s, r, n, a, o, l = e.values || [],
            h = {},
            _ = l[0],
            c = e.autoRotate || i.vars.orientToBezier;
          for (s in this._autoRotate = c ? c instanceof Array ? c : [
              ["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]
            ] : null, _) this._props.push(s);
          for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
          if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : function (t, e, i) {
              var s, r, n, a, o, l, h, _, c, f, p, d = {},
                m = "cubic" === (e = e || "soft") ? 3 : 2,
                g = "soft" === e,
                y = [];
              if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
              for (c in t[0]) y.push(c);
              for (l = y.length; --l > -1;) {
                for (d[c = y[l]] = o = [], f = 0, _ = t.length, h = 0; h < _; h++) s = null == i ? t[h][c] : "string" == typeof (p = t[h][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && h > 1 && h < _ - 1 && (o[f++] = (s + o[f - 2]) / 2), o[f++] = s;
                for (_ = f - m + 1, f = 0, h = 0; h < _; h += m) s = o[h], r = o[h + 1], n = o[h + 2], a = 2 === m ? 0 : o[h + 3], o[f++] = p = 3 === m ? new u(s, r, n, a) : new u(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                o.length = f
              }
              return d
            }(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
            var f = function (t, e) {
              var i, s, r, n, a = [],
                o = [],
                l = 0,
                h = 0,
                u = (e = e >> 0 || 6) - 1,
                _ = [],
                c = [];
              for (i in t) d(t[i], a, e);
              for (r = a.length, s = 0; s < r; s++) l += Math.sqrt(a[s]), c[n = s % e] = l, n === u && (h += l, _[n = s / e >> 0] = c, o[n] = h, l = 0, c = []);
              return {
                length: h,
                lengths: o,
                segments: _
              }
            }(this._beziers, this._timeRes);
            this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
          }
          if (c = this._autoRotate)
            for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;) {
              for (a = 0; a < 3; a++) s = c[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
              s = c[n][2], this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
            }
          return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
        },
        set: function (t) {
          var e, i, s, n, a, o, l, h, u, _, c = this._segCount,
            f = this._func,
            p = this._target,
            d = t !== this._startRatio;
          if (this._timeRes) {
            if (u = this._lengths, _ = this._curSeg, t *= this._length, s = this._li, t > this._l2 && s < c - 1) {
              for (h = c - 1; s < h && (this._l2 = u[++s]) <= t;);
              this._l1 = u[s - 1], this._li = s, this._curSeg = _ = this._segments[s], this._s2 = _[this._s1 = this._si = 0]
            } else if (t < this._l1 && s > 0) {
              for (; s > 0 && (this._l1 = u[--s]) >= t;);
              0 === s && t < this._l1 ? this._l1 = 0 : s++, this._l2 = u[s], this._li = s, this._curSeg = _ = this._segments[s], this._s1 = _[(this._si = _.length - 1) - 1] || 0, this._s2 = _[this._si]
            }
            if (e = s, t -= this._l1, s = this._si, t > this._s2 && s < _.length - 1) {
              for (h = _.length - 1; s < h && (this._s2 = _[++s]) <= t;);
              this._s1 = _[s - 1], this._si = s
            } else if (t < this._s1 && s > 0) {
              for (; s > 0 && (this._s1 = _[--s]) >= t;);
              0 === s && t < this._s1 ? this._s1 = 0 : s++, this._s2 = _[s], this._si = s
            }
            o = (s + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
          } else o = (t - (e = t < 0 ? 0 : t >= 1 ? c - 1 : c * t >> 0) * (1 / c)) * c;
          for (i = 1 - o, s = this._props.length; --s > -1;) n = this._props[s], l = (o * o * (a = this._beziers[n][e]).da + 3 * i * (o * a.ca + i * a.ba)) * o + a.a, this._mod[n] && (l = this._mod[n](l, p)), f[n] ? p[n](l) : p[n] = l;
          if (this._autoRotate) {
            var m, g, y, v, x, T, b, w = this._autoRotate;
            for (s = w.length; --s > -1;) n = w[s][2], T = w[s][3] || 0, b = !0 === w[s][4] ? 1 : r, a = this._beziers[w[s][0]], m = this._beziers[w[s][1]], a && m && (a = a[e], m = m[e], g = a.a + (a.b - a.a) * o, g += ((v = a.b + (a.c - a.b) * o) - g) * o, v += (a.c + (a.d - a.c) * o - v) * o, y = m.a + (m.b - m.a) * o, y += ((x = m.b + (m.c - m.b) * o) - y) * o, x += (m.c + (m.d - m.c) * o - x) * o, l = d ? Math.atan2(x - y, v - g) * b + T : this._initialRotations[s], this._mod[n] && (l = this._mod[n](l, p)), f[n] ? p[n](l) : p[n] = l)
          }
        }
      }),
      g = m.prototype;
    m.bezierThrough = p, m.cubicToQuadratic = _, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
      return new u(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
    }, m._cssRegister = function () {
      var t = h.CSSPlugin;
      if (t) {
        var e = t._internals,
          i = e._parseToProxy,
          s = e._setPluginRatio,
          r = e.CSSPropTween;
        e._registerComplexSpecialProp("bezier", {
          parser: function (t, e, n, a, o, l) {
            e instanceof Array && (e = {
              values: e
            }), l = new m;
            var h, u, _, c = e.values,
              f = c.length - 1,
              p = [],
              d = {};
            if (f < 0) return o;
            for (h = 0; h <= f; h++) _ = i(t, c[h], a, o, l, f !== h), p[h] = _.end;
            for (u in e) d[u] = e[u];
            return d.values = p, (o = new r(t, "bezier", 0, 0, _.pt, 2)).data = _, o.plugin = l, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (h = !0 === d.autoRotate ? 0 : Number(d.autoRotate), d.autoRotate = null != _.end.left ? [
              ["left", "top", "rotation", h, !1]
            ] : null != _.end.x && [
              ["x", "y", "rotation", h, !1]
            ]), d.autoRotate && (a._transform || a._enableTransforms(!1), _.autoRotate = a._target._gsTransform, _.proxy.rotation = _.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(_.proxy, d, a._tween), o
          }
        })
      }
    }, g._mod = function (t) {
      for (var e, i = this._overwriteProps, s = i.length; --s > -1;)(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
    }, g._kill = function (t) {
      var e, i, s = this._props;
      for (e in this._beziers)
        if (e in t)
          for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
      if (s = this._autoRotate)
        for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
      return this._super._kill.call(this, t)
    }
  },
  635: function (t, e, i) {
    "use strict";
    var s = i(627);
    s.e._gsDefine("easing.Back", ["easing.Ease"], function () {
      var t, e, i, r, n = s.e.GreenSockGlobals || s.e,
        a = n.com.greensock,
        o = 2 * Math.PI,
        l = Math.PI / 2,
        h = a._class,
        u = function (t, e) {
          var i = h("easing." + t, function () {}, !0),
            r = i.prototype = new s.b;
          return r.constructor = i, r.getRatio = e, i
        },
        _ = s.b.register || function () {},
        c = function (t, e, i, s, r) {
          var n = h("easing." + t, {
            easeOut: new e,
            easeIn: new i,
            easeInOut: new s
          }, !0);
          return _(n, t), n
        },
        f = function (t, e, i) {
          this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        },
        p = function (t, e) {
          var i = h("easing." + t, function (t) {
              this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0),
            r = i.prototype = new s.b;
          return r.constructor = i, r.getRatio = e, r.config = function (t) {
            return new i(t)
          }, i
        },
        d = c("Back", p("BackOut", function (t) {
          return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), p("BackIn", function (t) {
          return t * t * ((this._p1 + 1) * t - this._p1)
        }), p("BackInOut", function (t) {
          return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })),
        m = h("easing.SlowMo", function (t, e, i) {
          e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
        }, !0),
        g = m.prototype = new s.b;
      return g.constructor = m, g.getRatio = function (t) {
        var e = t + (.5 - t) * this._p;
        return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
      }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, i) {
        return new m(t, e, i)
      }, (g = (t = h("easing.SteppedEase", function (t, e) {
        t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
      }, !0)).prototype = new s.b).constructor = t, g.getRatio = function (t) {
        return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
      }, g.config = t.config = function (e, i) {
        return new t(e, i)
      }, (g = (e = h("easing.ExpoScaleEase", function (t, e, i) {
        this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
      }, !0)).prototype = new s.b).constructor = e, g.getRatio = function (t) {
        return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
      }, g.config = e.config = function (t, i, s) {
        return new e(t, i, s)
      }, (g = (i = h("easing.RoughEase", function (t) {
        for (var e, i, r, n, a, o, l = (t = t || {}).taper || "none", h = [], u = 0, _ = 0 | (t.points || 20), c = _, p = !1 !== t.randomize, d = !0 === t.clamp, m = t.template instanceof s.b ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --c > -1;) e = p ? Math.random() : 1 / _ * c, i = m ? m.getRatio(e) : e, r = "none" === l ? g : "out" === l ? (n = 1 - e) * n * g : "in" === l ? e * e * g : e < .5 ? (n = 2 * e) * n * .5 * g : (n = 2 * (1 - e)) * n * .5 * g, p ? i += Math.random() * r - .5 * r : c % 2 ? i += .5 * r : i -= .5 * r, d && (i > 1 ? i = 1 : i < 0 && (i = 0)), h[u++] = {
          x: e,
          y: i
        };
        for (h.sort(function (t, e) {
            return t.x - e.x
          }), o = new f(1, 1, null), c = _; --c > -1;) a = h[c], o = new f(a.x, a.y, o);
        this._prev = new f(0, 0, 0 !== o.t ? o : o.next)
      }, !0)).prototype = new s.b).constructor = i, g.getRatio = function (t) {
        var e = this._prev;
        if (t > e.t) {
          for (; e.next && t >= e.t;) e = e.next;
          e = e.prev
        } else
          for (; e.prev && t <= e.t;) e = e.prev;
        return this._prev = e, e.v + (t - e.t) / e.gap * e.c
      }, g.config = function (t) {
        return new i(t)
      }, i.ease = new i, c("Bounce", u("BounceOut", function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
      }), u("BounceIn", function (t) {
        return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
      }), u("BounceInOut", function (t) {
        var e = t < .5;
        return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
      })), c("Circ", u("CircOut", function (t) {
        return Math.sqrt(1 - (t -= 1) * t)
      }), u("CircIn", function (t) {
        return -(Math.sqrt(1 - t * t) - 1)
      }), u("CircInOut", function (t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      })), c("Elastic", (r = function (t, e, i) {
        var r = h("easing." + t, function (t, e) {
            this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
          }, !0),
          n = r.prototype = new s.b;
        return n.constructor = r, n.getRatio = e, n.config = function (t, e) {
          return new r(t, e)
        }, r
      })("ElasticOut", function (t) {
        return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
      }, .3), r("ElasticIn", function (t) {
        return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
      }, .3), r("ElasticInOut", function (t) {
        return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
      }, .45)), c("Expo", u("ExpoOut", function (t) {
        return 1 - Math.pow(2, -10 * t)
      }), u("ExpoIn", function (t) {
        return Math.pow(2, 10 * (t - 1)) - .001
      }), u("ExpoInOut", function (t) {
        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
      })), c("Sine", u("SineOut", function (t) {
        return Math.sin(t * l)
      }), u("SineIn", function (t) {
        return 1 - Math.cos(t * l)
      }), u("SineInOut", function (t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
      })), h("easing.EaseLookup", {
        find: function (t) {
          return s.b.map[t]
        }
      }, !0), _(n.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(t, "SteppedEase", "ease,"), d
    }, !0);
    const r = s.e.Back;
    e.a = r;
    const n = s.e.Elastic;
    e.d = n;
    const a = s.e.Bounce;
    e.b = a;
    const o = s.e.RoughEase;
    e.g = o;
    const l = s.e.SlowMo;
    e.i = l;
    const h = s.e.SteppedEase;
    e.j = h;
    const u = s.e.Circ;
    e.c = u;
    const _ = s.e.Expo;
    e.e = _;
    const c = s.e.Sine;
    e.h = c;
    const f = s.e.ExpoScaleEase;
    e.f = f
  },
  636: function (t, e, i) {
    "use strict";
    i(627), i(628), i(629), i(638), i(630), i(631), i(632), i(633), i(634), i(635)
  },
  637: function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []), Object.defineProperty(e, "loaded", {
          enumerable: !0,
          get: function () {
            return e.l
          }
        }), Object.defineProperty(e, "id", {
          enumerable: !0,
          get: function () {
            return e.i
          }
        }), Object.defineProperty(e, "exports", {
          enumerable: !0
        }), e.webpackPolyfill = 1
      }
      return e
    }
  },
  638: function (t, e, i) {
    "use strict";
    i(627);
    var s = i(639),
      r = i(630),
      n = i(631),
      a = i(632),
      o = i(633),
      l = i(628),
      h = i(629),
      u = i(634),
      _ = i(635);
    s.a._autoActivated = [l.a, h.a, r.a, n.a, u.a, a.a, o.a, _.a, _.d, _.b, _.g, _.i, _.j, _.c, _.e, _.h, _.f]
  },
  639: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return r
    });
    var s = i(627);
    s.e._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
      var t = function (t) {
          var e, i = [],
            s = t.length;
          for (e = 0; e !== s; i.push(t[e++]));
          return i
        },
        e = function (t, e, i) {
          var s, r, n = t.cycle;
          for (s in n) r = n[s], t[s] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
          delete t.cycle
        },
        i = function (t, e, r) {
          s.f.call(this, t, e, r), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = i.prototype.render
        },
        r = s.f._internals,
        n = r.isSelector,
        a = r.isArray,
        o = i.prototype = s.f.to({}, .1, {}),
        l = [];
      i.version = "1.20.5", o.constructor = i, o.kill()._gc = !1, i.killTweensOf = i.killDelayedCallsTo = s.f.killTweensOf, i.getTweensOf = s.f.getTweensOf, i.lagSmoothing = s.f.lagSmoothing, i.ticker = s.f.ticker, i.render = s.f.render, o.invalidate = function () {
        return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), s.f.prototype.invalidate.call(this)
      }, o.updateTo = function (t, e) {
        var i, r = this.ratio,
          n = this.vars.immediateRender || t.immediateRender;
        for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
        if (this._initted || n)
          if (e) this._initted = !1, n && this.render(0, !0, !0);
          else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && s.f._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
          var a = this._totalTime;
          this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
        } else if (this._initted = !1, this._init(), this._time > 0 || n)
          for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
        return this
      }, o.render = function (t, e, i) {
        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
        var n, a, o, l, h, u, _, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
          d = this._time,
          m = this._totalTime,
          g = this._cycle,
          y = this._duration,
          v = this._rawPrevTime;
        if (t >= p - 1e-7 && t >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, a = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (v < 0 || t <= 0 && t >= -1e-7 || 1e-10 === v && "isPause" !== this.data) && v !== t && (i = !0, v > 1e-10 && (a = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && v > 0) && (a = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : 1e-10)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof s.b ? f : s.b.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof s.b ? f : "function" == typeof f ? new s.b(f, this.vars.easeParams) : s.b.map[f] || s.f.defaultEase : s.f.defaultEase)), this.ratio = f ? 1 - f.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !f ? (h = this._time / y, u = this._easeType, _ = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === _ ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h), 1 === u ? this.ratio = 1 - h : 2 === u ? this.ratio = h : this._time / y < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : f || (this.ratio = this._ease.getRatio(this._time / y))), d !== this._time || i || g !== this._cycle) {
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc) return;
            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = g, r.lazyTweens.push(this), void(this._lazy = [t, e]);
            !this._time || n || f ? n && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
          }
          for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : a || (a = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
          this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== m || a) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), a && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a), 0 === y && 1e-10 === this._rawPrevTime && 1e-10 !== c && (this._rawPrevTime = 0)))
        } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
      }, i.to = function (t, e, s) {
        return new i(t, e, s)
      }, i.from = function (t, e, s) {
        return s.runBackwards = !0, s.immediateRender = 0 != s.immediateRender, new i(t, e, s)
      }, i.fromTo = function (t, e, s, r) {
        return r.startAt = s, r.immediateRender = 0 != r.immediateRender && 0 != s.immediateRender, new i(t, e, r)
      }, i.staggerTo = i.allTo = function (r, o, h, u, _, c, f) {
        u = u || 0;
        var p, d, m, g, y = 0,
          v = [],
          x = function () {
            h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), _.apply(f || h.callbackScope || this, c || l)
          },
          T = h.cycle,
          b = h.startAt && h.startAt.cycle;
        for (a(r) || ("string" == typeof r && (r = s.f.selector(r) || r), n(r) && (r = t(r))), r = r || [], u < 0 && ((r = t(r)).reverse(), u *= -1), p = r.length - 1, m = 0; m <= p; m++) {
          for (g in d = {}, h) d[g] = h[g];
          if (T && (e(d, r, m), null != d.duration && (o = d.duration, delete d.duration)), b) {
            for (g in b = d.startAt = {}, h.startAt) b[g] = h.startAt[g];
            e(d.startAt, r, m)
          }
          d.delay = y + (d.delay || 0), m === p && _ && (d.onComplete = x), v[m] = new i(r[m], o, d), y += u
        }
        return v
      }, i.staggerFrom = i.allFrom = function (t, e, s, r, n, a, o) {
        return s.runBackwards = !0, s.immediateRender = 0 != s.immediateRender, i.staggerTo(t, e, s, r, n, a, o)
      }, i.staggerFromTo = i.allFromTo = function (t, e, s, r, n, a, o, l) {
        return r.startAt = s, r.immediateRender = 0 != r.immediateRender && 0 != s.immediateRender, i.staggerTo(t, e, r, n, a, o, l)
      }, i.delayedCall = function (t, e, s, r, n) {
        return new i(e, 0, {
          delay: t,
          onComplete: e,
          onCompleteParams: s,
          callbackScope: r,
          onReverseComplete: e,
          onReverseCompleteParams: s,
          immediateRender: !1,
          useFrames: n,
          overwrite: 0
        })
      }, i.set = function (t, e) {
        return new i(t, 0, e)
      }, i.isTweening = function (t) {
        return s.f.getTweensOf(t, !0).length > 0
      };
      var h = function (t, e) {
          for (var i = [], r = 0, n = t._first; n;) n instanceof s.f ? i[r++] = n : (e && (i[r++] = n), r = (i = i.concat(h(n, e))).length), n = n._next;
          return i
        },
        u = i.getAllTweens = function (t) {
          return h(s.a._rootTimeline, t).concat(h(s.a._rootFramesTimeline, t))
        };
      i.killAll = function (t, e, i, r) {
        null == e && (e = !0), null == i && (i = !0);
        var n, a, o, l = u(0 != r),
          h = l.length,
          _ = e && i && r;
        for (o = 0; o < h; o++) a = l[o], (_ || a instanceof s.c || (n = a.target === a.vars.onComplete) && i || e && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
      }, i.killChildTweensOf = function (e, o) {
        if (null != e) {
          var l, h, u, _, c, f = r.tweenLookup;
          if ("string" == typeof e && (e = s.f.selector(e) || e), n(e) && (e = t(e)), a(e))
            for (_ = e.length; --_ > -1;) i.killChildTweensOf(e[_], o);
          else {
            for (u in l = [], f)
              for (h = f[u].target.parentNode; h;) h === e && (l = l.concat(f[u].tweens)), h = h.parentNode;
            for (c = l.length, _ = 0; _ < c; _++) o && l[_].totalTime(l[_].totalDuration()), l[_]._enabled(!1, !1)
          }
        }
      };
      var _ = function (t, e, i, r) {
        e = !1 !== e, i = !1 !== i;
        for (var n, a, o = u(r = !1 !== r), l = e && i && r, h = o.length; --h > -1;) a = o[h], (l || a instanceof s.c || (n = a.target === a.vars.onComplete) && i || e && !n) && a.paused(t)
      };
      return i.pauseAll = function (t, e, i) {
        _(!0, t, e, i)
      }, i.resumeAll = function (t, e, i) {
        _(!1, t, e, i)
      }, i.globalTimeScale = function (t) {
        var e = s.a._rootTimeline,
          i = s.f.ticker.time;
        return arguments.length ? (t = t || 1e-10, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = s.a._rootFramesTimeline, i = s.f.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = s.a._rootTimeline._timeScale = t, t) : e._timeScale
      }, o.progress = function (t, e) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
      }, o.totalProgress = function (t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
      }, o.time = function (t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
      }, o.duration = function (t) {
        return arguments.length ? s.a.prototype.duration.call(this, t) : this._duration
      }, o.totalDuration = function (t) {
        return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
      }, o.repeat = function (t) {
        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
      }, o.repeatDelay = function (t) {
        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
      }, o.yoyo = function (t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo
      }, i
    }, !0);
    const r = s.e.TweenMax
  }
});