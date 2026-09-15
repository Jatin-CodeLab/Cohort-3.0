console.log("script.js file is running...");
//? Write a code........
//?>--------------------------------------------<?//
let h2q = document.querySelector('h2')
let gSap = gsap.timeline()

gSap.from(h2q, {
	opacity: 0,
	y: -20,
    delay: 0.5,
    duration:1,
});

gSap.from('nav li', {
    opacity: 0,
    y: -20,
    stagger: 0.3,
    delay:0.5
})
gSap.from("h1", {
	y: 20,
	duration: 1,
	delay: 0.5,
    opacity: 0,
    scale:0.2
});