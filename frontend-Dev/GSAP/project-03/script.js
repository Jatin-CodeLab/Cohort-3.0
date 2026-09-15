console.log("script.js file is running...");
//? Write a code........
//?>--------------------------------------------<?//
const marquee = gsap.to(".marquee", {
  xPercent: -100,
  duration: 2,
  ease: "none",
  repeat: -1,
});

window.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0) {
    marquee.timeScale(1);

    gsap.to(".marquee img", {
      rotate: 180,
      duration: 0.5,
      overwrite: true,
    });

  } else {
    marquee.timeScale(-1);

    gsap.to(".marquee img", {
      rotate: 0,
      duration: 0.5,
      overwrite: true,
    });
  }
});