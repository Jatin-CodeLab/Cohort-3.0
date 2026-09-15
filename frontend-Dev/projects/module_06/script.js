let cards = document.querySelectorAll(".card");

let dashboard = document.querySelector(".dashboard");

let features = document.querySelectorAll(".feature");

let backBtns = document.querySelectorAll(".backBtn");

// Card Click

cards.forEach(function (card) {
	card.addEventListener("click", function () {
		let id = card.dataset.feature;

		dashboard.style.display = "none";

		features.forEach(function (item) {
			item.style.display = "none";
		});

		document.getElementById(id).style.display = "block";
	});
});

// Back Button

backBtns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		dashboard.style.display = "grid";

		features.forEach(function (item) {
			item.style.display = "none";
		});
	});
});

// Date Time

let date = document.getElementById("date");

let time = document.getElementById("time");

function showDateTime() {
	let today = new Date();

	date.innerHTML = today.toDateString();

	time.innerHTML = today.toLocaleTimeString();
}

showDateTime();

setInterval(showDateTime, 1000);

// Theme

let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
	document.body.classList.toggle("dark");

	if (document.body.classList.contains("dark")) {
		themeBtn.innerHTML = "Light Mode";
	} else {
		themeBtn.innerHTML = "Dark Mode";
	}
});

// Select Elements

let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

let totalTask = document.getElementById("totalTask");
let completedTask = document.getElementById("completedTask");
let importantTask = document.getElementById("importantTask");

// Local Storage

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Show Tasks

showTasks();

function showTasks() {
	taskList.innerHTML = "";

	tasks.forEach(function (task, index) {
		let li = document.createElement("li");

		li.className = "task";

		if (task.completed) {
			li.classList.add("completed");
		}

		if (task.important) {
			li.classList.add("important");
		}

		li.innerHTML = `

            <span class="taskText">
                ${task.text}
            </span>

            <div class="taskBtns">

                <button class="importantBtn" onclick="importantTaskToggle(${index})">
                    ⭐
                </button>

                <button class="completeBtn" onclick="completeTask(${index})">
                    ✔
                </button>

                <button class="deleteBtn" onclick="deleteTask(${index})">
                    🗑
                </button>

            </div>

        `;

		taskList.appendChild(li);
	});

	updateCounter();
}

// Add Task

function addTask() {
	let text = taskInput.value.trim();

	if (text == "") {
		alert("Please Enter Task");

		return;
	}

	let obj = {
		text: text,

		completed: false,

		important: false,
	};

	tasks.push(obj);

	saveTask();

	taskInput.value = "";

	showTasks();
}

// Button Click

addTaskBtn.addEventListener("click", addTask);

// Enter Key

taskInput.addEventListener("keypress", function (e) {
	if (e.key == "Enter") {
		addTask();
	}
});

// Delete

function deleteTask(index) {
	tasks.splice(index, 1);

	saveTask();

	showTasks();
}

// Complete

function completeTask(index) {
	tasks[index].completed = !tasks[index].completed;

	saveTask();

	showTasks();
}

// Important

function importantTaskToggle(index) {
	tasks[index].important = !tasks[index].important;

	saveTask();

	showTasks();
}

// Counter

function updateCounter() {
	totalTask.innerHTML = tasks.length;

	let complete = 0;

	let important = 0;

	tasks.forEach(function (task) {
		if (task.completed) {
			complete++;
		}

		if (task.important) {
			important++;
		}
	});

	completedTask.innerHTML = complete;

	importantTask.innerHTML = important;
}

// Save Local Storage

function saveTask() {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Daily Planner JavaScript

// Select All Inputs

let plannerInputs = document.querySelectorAll(".plannerInput");

// Select All Save Buttons

let saveBtns = document.querySelectorAll(".saveBtn");

// Load Data

window.addEventListener("load", function () {
	plannerInputs.forEach(function (input) {
		let key = input.dataset.time;

		let value = localStorage.getItem(key);

		if (value != null) {
			input.value = value;
		}
	});
});

// Save Data

saveBtns.forEach(function (button, index) {
	button.addEventListener("click", function () {
		let input = plannerInputs[index];

		let key = input.dataset.time;

		let value = input.value.trim();

		if (value == "") {
			alert("Please Write Your Plan");

			return;
		}

		localStorage.setItem(key, value);

		alert("Plan Saved Successfully");
	});
});

// Enter Key Save

plannerInputs.forEach(function (input) {
	input.addEventListener("keypress", function (event) {
		if (event.key == "Enter") {
			let key = input.dataset.time;

			let value = input.value.trim();

			if (value == "") {
				alert("Please Write Your Plan");

				return;
			}

			localStorage.setItem(key, value);

			alert("Plan Saved Successfully");
		}
	});
});


// Clear One Slot (Optional)
// Double Click Input


plannerInputs.forEach(function (input) {
	input.addEventListener("dblclick", function () {
		let answer = confirm("Do you want to clear this plan?");

		if (answer) {
			input.value = "";

			localStorage.removeItem(input.dataset.time);
		}
	});
});

let goalInput = document.getElementById("goalInput");
let addGoalBtn = document.getElementById("addGoalBtn");
let goalList = document.getElementById("goalList");

let totalGoal = document.getElementById("totalGoal");
let completedGoal = document.getElementById("completedGoal");
let goalProgress = document.getElementById("goalProgress");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

showGoals();

function showGoals() {
	goalList.innerHTML = "";

	goals.forEach(function (goal, index) {
		let li = document.createElement("li");

		li.className = "goal";

		if (goal.completed) {
			li.classList.add("completedGoal");
		}

		li.innerHTML = `
        
            <span class="goalText">
                ${goal.text}
            </span>

            <div class="goalBtns">

                <button class="goalCompleteBtn" onclick="completeGoal(${index})">
                    ✔
                </button>

                <button class="goalDeleteBtn" onclick="deleteGoal(${index})">
                    🗑
                </button>

            </div>

        `;

		goalList.appendChild(li);
	});

	updateGoalCounter();
}

function addGoal() {
	let text = goalInput.value.trim();

	if (text == "") {
		alert("Please Enter Goal");

		return;
	}

	let obj = {
		text: text,

		completed: false,
	};

	goals.push(obj);

	saveGoals();

	goalInput.value = "";

	showGoals();
}

addGoalBtn.addEventListener("click", addGoal);

goalInput.addEventListener("keypress", function (event) {
	if (event.key == "Enter") {
		addGoal();
	}
});

function completeGoal(index) {
	goals[index].completed = !goals[index].completed;

	saveGoals();

	showGoals();
}

function deleteGoal(index) {
	goals.splice(index, 1);

	saveGoals();

	showGoals();
}

function updateGoalCounter() {
	totalGoal.innerHTML = goals.length;

	let completed = 0;

	goals.forEach(function (goal) {
		if (goal.completed) {
			completed++;
		}
	});

	completedGoal.innerHTML = completed;

	goalProgress.innerHTML = completed + " / " + goals.length;
}

function saveGoals() {
	localStorage.setItem("goals", JSON.stringify(goals));
}

let timerDisplay = document.getElementById("timerDisplay");

let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

let totalTime = 25 * 60;

let timer;

let isRunning = false;

showTime();

function showTime() {
	let minutes = Math.floor(totalTime / 60);

	let seconds = totalTime % 60;

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	timerDisplay.innerHTML = minutes + ":" + seconds;
}

startBtn.addEventListener("click", function () {
	if (isRunning) {
		return;
	}

	isRunning = true;

	timer = setInterval(function () {
		totalTime--;

		showTime();

		if (totalTime <= 0) {
			clearInterval(timer);

			isRunning = false;

			alert("Time Up!");
		}
	}, 1000);
});

pauseBtn.addEventListener("click", function () {
	clearInterval(timer);

	isRunning = false;
});

resetBtn.addEventListener("click", function () {
	clearInterval(timer);

	isRunning = false;

	totalTime = 25 * 60;

	showTime();
});

let quoteText = document.getElementById("quoteText");
let quoteAuthor = document.getElementById("quoteAuthor");
let newQuoteBtn = document.getElementById("newQuoteBtn");

getQuote();

newQuoteBtn.addEventListener("click", function () {
	getQuote();
});

function getQuote() {
	quoteText.innerHTML = "Loading Quote...";
	quoteAuthor.innerHTML = "";

	fetch("https://dummyjson.com/quotes/random")
		.then(function (response) {
			return response.json();
		})

		.then(function (data) {
			quoteText.innerHTML = '"' + data.quote + '"';

			quoteAuthor.innerHTML = "- " + data.author;
		})

		.catch(function () {
			quoteText.innerHTML = "Something went wrong.";

			quoteAuthor.innerHTML = "";
		});
}
let cityInput = document.getElementById("cityInput");
let searchWeatherBtn = document.getElementById("searchWeatherBtn");

let cityName = document.getElementById("cityName");
let temperature = document.getElementById("temperature");
let weatherType = document.getElementById("weatherType");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");

let apiKey = "c6fac77f3d643ad801bf18cefbd3292f";

searchWeatherBtn.addEventListener("click", function () {
	getWeather();
});

cityInput.addEventListener("keypress", function (event) {
	if (event.key == "Enter") {
		getWeather();
	}
});

function getWeather() {
	let city = cityInput.value.trim();

	if (city == "") {
		alert("Please Enter City Name");

		return;
	}

	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	fetch(url)
		.then(function (response) {
			if (!response.ok) {
				throw new Error();
			}

			return response.json();
		})

		.then(function (data) {
			cityName.innerHTML = data.name;

			temperature.innerHTML = Math.round(data.main.temp) + " °C";

			weatherType.innerHTML = data.weather[0].main;

			humidity.innerHTML = data.main.humidity;

			windSpeed.innerHTML = data.wind.speed;
		})

		.catch(function () {
			cityName.innerHTML = "City Not Found";

			temperature.innerHTML = "-- °C";

			weatherType.innerHTML = "--";

			humidity.innerHTML = "--";

			windSpeed.innerHTML = "--";
		});
}