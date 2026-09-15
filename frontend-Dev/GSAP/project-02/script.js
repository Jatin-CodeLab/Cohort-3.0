console.log("script.js file is running...");
//? Write a code........
//?>--------------------------------------------<?//

let tl = gsap.timeline();
let menu = document.querySelector("nav i");
let cross = document.querySelector("aside i");

tl.to("aside", {
	right: "0",
	duration: 0.4,
});

tl.from("aside h4", {
	x: 200,
	duration: 0.6,
	opacity: 0,
	stagger: 0.3,
});
tl.from("aside i", {
	duration: 0.6,
	opacity: 0,
	stagger: 0.2,
});

tl.pause();
menu.addEventListener("click", () => {
	tl.play();
});
cross.addEventListener("click", () => {
	tl.reverse();
});
