document.addEventListener(
	"wheel",
	(e) => {
		if (e.ctrlKey) {
			e.preventDefault();
		}
	},
	{ passive: false },
);
document.addEventListener("keydown", (e) => {
	if (
		e.ctrlKey &&
		(e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")
	) {
		e.preventDefault();
	}
});
// selectation variable part
let boxMain = document.querySelector("#boxMain");
let randomBox = document.querySelector("#taapBoxOnRandom");
let startBtn = document.querySelector("#startBtn");
let timer = document.querySelector("#timer");
let overlay = document.querySelector("#overlay");
let scoree = document.querySelector("#scoree");
let time = 0;
let score = 0;
let timeTimer;
let canClick = true;
const box = document.createElement("div");
box.classList.add("taapBox");

startBtn.addEventListener("click", () => {
	boxMain.append(box); // 👈 Yahan likho
	startBtn.disabled = true;
	startBtn.textContent = "Tap circle";

	time = 0;
	timer.textContent = `Timer : ${time}`;

	timeTimer = setInterval(() => {
		let mainH = boxMain.clientHeight - box.offsetHeight;
		let mainW = boxMain.clientWidth - box.offsetWidth;

		time += 1;
		timer.textContent = `Timer : ${time}`;

		let X = Math.random() * mainH;
		let Y = Math.random() * mainW;

		box.style.top = `${X}px`;
		box.style.left = `${Y}px`;
		box.style.transform = "scale(1)"; // wapas aa jayega
		canClick = true; // 👈 ye add karo
	}, 1000);

	setTimeout(() => {
		clearInterval(timeTimer);

		overlay.style.display = "flex";

		setTimeout(() => {
			overlay.style.display = "none";

			time = 0;
			score = 0;

			timer.textContent = `Timer : ${time}`;
			scoree.textContent = `Score : ${score}`;

			box.remove();
		}, 2000);

		startBtn.disabled = false;
		startBtn.textContent = "Start";
	}, 10000);
});

box.addEventListener("click", () => {
	if (!canClick) return;

	score++;
	scoree.textContent = `Score : ${score}`;

	box.style.transform = "scale(0)"; // gayab ho jayega
	canClick = false;
});
