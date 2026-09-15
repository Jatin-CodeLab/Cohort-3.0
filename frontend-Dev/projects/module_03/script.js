console.log(`Hare Krishna`);
//? ye jo function hai vo Days Ko show kar ne ke liye hai !
let perDay;
(() => {
	perDay = document.getElementById("weeklyNameTag");
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let currDay = new Date().getDay();
	perDay.innerText = `${days[currDay]}.`;
})();
//? yaha tak
// //? ye user na name print kar ne ke liye
// let yourName = document.querySelector("#yourName");
// let nameYour = prompt("Enter Your Name : ");
// (() => {
//     if (nameYour === '') {
//         yourName.textContent = 'Geust !'
//     } else {
//         yourName.textContent = `Account Name : ${nameYour}`;
//     }

// })();
// //?

let body = document.querySelector("body");
let menu = document.querySelector(".menu");
let themeBtn = document.querySelector("#themeBtn");
let taskName = document.querySelector("#taskName");
let newTask = document.querySelector("#newTask");
let close = document.querySelector(".close");
let formScreen = document.querySelector(".formScreen");
let taskOne = document.querySelector(".taskOne");

let isDark = false;

themeBtn.addEventListener("click", () => {
	if (!isDark) {
		// Dark Mode
		body.style.backgroundColor = "black";
		perDay.style.color = "white";
		menu.style.color = "white";
		taskName.style.color = "white";
		newTask.style.backgroundColor = "white";
		newTask.style.color = "black";
taskOne.style.color = 'black'
taskOne.style.backgroundColor = 'white'

		themeBtn.style.backgroundColor = "white";
		themeBtn.style.color = "black";
		close.style.color = "white";
        let icon = `<i class="fi fi-sr-moon-stars"></i>`;
        themeBtn.innerHTML = `Light ${ icon }`;

		isDark = true;
	} else {
		// Light Mode
		body.style.backgroundColor = "white";
		perDay.style.color = "black";
		menu.style.color = "black";
        taskName.style.color = "black";
        newTask.style.backgroundColor = "black";
        newTask.style.color = 'white';
taskOne.style.backgroundColor = "black";
taskOne.style.color = "white";
themeBtn.style.backgroundColor = "black";
themeBtn.style.color = "white";
let icon = ` <i class="fi fi-sr-moon-stars"></i>`;
themeBtn.innerHTML = `Dark ${ icon }`;

close.style.color = "black";

		isDark = false;
	}
});

//? add new task
newTask.addEventListener("click", (e) => {
	e.stopPropagation();
	formScreen.style.display = "block";
});
close.addEventListener("click", () => {
	formScreen.style.display = "none";
});
formScreen.addEventListener("click", (e) => {
	e.stopPropagation();
});

window.addEventListener("click", () => {
	formScreen.style.display = "none";
});