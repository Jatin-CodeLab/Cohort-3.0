const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
	document.body.classList.toggle("dark");

	if (document.body.classList.contains("dark")) {
		btn.innerText = "Light Mode";
	} else {
		btn.innerText = "Dark Mode";
	}
});
