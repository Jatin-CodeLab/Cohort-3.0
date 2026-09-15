console.log("script.js file is running...");
//? Write a code........
//?>--------------------------------------------<?//

let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");
let box = document.querySelector(".box");

main.addEventListener("mousemove", (dets) => {
	gsap.to(cursor, {
		x: dets.x,
		y: dets.y,
        duration: 0.6,
	});
});

box.addEventListener("mouseenter", () => {
    cursor.innerHTML = 'View more...'
	gsap.to(cursor, {
        scale: 4,
        backgroundColor : "#ffffff8a",
	});
});
box.addEventListener("mouseleave", () => {
    cursor.innerHTML = ''
	gsap.to(cursor, {
        scale: 1,
        backgroundColor : "#fff",
	});
});
