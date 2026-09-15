console.log("script.js file is running...");
//? Write a code........
//?>--------------------------------------------<?//


// gsap.from('.box1', {
//     scale: 0,
//     delay: 0.5,
//     duration: 2,
//     rotate:360,
// })
// gsap.from(".box2", {
// 	scale: 0,
// 	delay: 0.5,
// 	duration: 2,
// 	rotate: 360,
// 	scrollTrigger: {
//         trigger: ".box2",
//         scroller: 'body',
//         markers: true,
//         start:'top 60%'
// 	},
// });
// gsap.from(".box3", {
// 	scale: 0,
// 	delay: 0.5,
// 	duration: 2,
// 	rotate: 360,
// 	scrollTrigger: ".page3 .box3",
// });
// //?===================================

// gsap.from(".page2 h1", {
// 	opacity: 0,
// 	duration: 2,
//     x: 500,
//     delay:1,
// 	scrollTrigger: {
//         trigger: ".page2 h1",
//         scroller: 'body',
//         markers: true,
//         start : 'top 50%'
// 	},
// });

// gsap.from(".page2 h2", {
// 	opacity: 0,
// 	duration: 2,
//     x: -500,
//     delay:1,
// 	scrollTrigger: {
//         trigger: ".page2 h2",
//         scroller: 'body',
//         markers: true,
//         start : 'top 50%'
// 	},
// });


// //?===========================

// gsap.from(".page2 .box2", {
// 	scale: 0,
// 	duration: 2,
// 	rotate: 360 * 2,
// 	scrollTrigger: {
//         trigger: ".page2 .box2",
//         scroller: 'body',
//         markers: true,
//         start: 'top 60%',
//         end: 'top 30%',
//         scrub: 2,
//         pin:true,
// 	},
// });


//!============================================ oueper ka code index.html ka hai

//! yaha se niche ka code index02.html ka hai

gsap.to(".module2 h1", {
	transform: "translateX(-175%)",
	scrollTrigger: {
		trigger: ".module2",
		scroller: "body",
		markers: true,
        start: 'top 0%',
        scrub: 1,
        end:'top -150%',
        pin:true
	},
});

