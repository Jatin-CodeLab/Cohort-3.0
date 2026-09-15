console.log("script.js file is running...");
//? Write a code........
//?>--------------------------------------------<?//

let initialPath = `M 10 250 Q 750 250 1490 250`;
let fimalPath = `M 10 250 Q 750 250 1490 250`;
let box1 = document.querySelector(".box1");

box1.addEventListener('mousemove', (dets) => {
    initialPath = `M 10 250 Q ${dets.x} ${dets.y} 1490 250`;
    gsap.to('svg path', {
        attr: { d: initialPath },
        duartion: 1.5,
        ease :'power3.out'
    })
})
// box1.addEventListener('mouseenter', (dets) => {
//     console.log(dets);
// })
box1.addEventListener('mouseleave', () => {
     gsap.to("svg path", {
				attr: { d: fimalPath },
				duartion: 2.5,
				ease: "elastic.out(1,0.2)",
			});
})