window.onload = function () {
	var form = document.getElementById("form");
	var input = document.getElementById("taskInput");
	var category = document.getElementById("category");
	var taskList = document.getElementById("taskList");

	var btn = document.getElementById("btn");

	var prop = document.getElementById("prop");
	var attr = document.getElementById("attr");

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		if (input.value == "") {
			alert("Enter task");
			return;
		}

		var div = document.createElement("div");
		div.className = "task";

		div.innerHTML = `
            <h4>${input.value}</h4>
            <p>${category.value}</p>

            <button class="edit">Edit</button>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;

		taskList.appendChild(div);

		input.value = "";

		showData();
	});

	taskList.addEventListener("click", function (e) {
		var box = e.target.parentElement;

		if (e.target.classList.contains("delete")) {
			box.remove();
		}

		if (e.target.classList.contains("complete")) {
			box.classList.toggle("done");

			if (e.target.textContent == "Complete") {
				e.target.textContent = "Undo";
			} else {
				e.target.textContent = "Complete";
			}
		}

		if (e.target.classList.contains("edit")) {
			var h4 = box.querySelector("h4");

			var text = prompt("Edit task", h4.textContent);

			if (text != "" && text != null) {
				h4.textContent = text;
			}
		}
	});

	function showData() {
		prop.textContent = input.value;
		attr.textContent = input.getAttribute("value");
	}

	input.addEventListener("input", showData);

	showData();

	btn.addEventListener("click", function () {
		document.body.classList.toggle("dark-theme");

		if (btn.textContent == "Dark Mode") {
			btn.textContent = "Light Mode";
		} else {
			btn.textContent = "Dark Mode";
		}
	});
};
