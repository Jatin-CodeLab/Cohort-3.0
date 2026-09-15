let createProduct = document.querySelector("#cretaeProductLargeScreenBtn");
let openForm = document.querySelector("#fillTheForm");
let closeForm = document.querySelector(".close");
let orignalForm = document.querySelector("form");
let productsArr = JSON.parse(localStorage.getItem("products")) || [];
let products = document.querySelector(".products");
let updateIndex = null;
let uiUpdateation = () => {
	products.innerHTML = "";
	productsArr.forEach((eventProduct, index) => {
		products.innerHTML += `<div class="product-cards">
					<div class="img">
						<img
							src="${eventProduct.productUrl}"
							alt="bird"
						/>
					</div>
					<div class="text">
						<p>${eventProduct.productName}</p>
						<p>${eventProduct.productDiscription}</p>
						<p>${eventProduct.productPrice}</p>
					</div>
					<div class="btn">
						<button onclick="updateProduct('${eventProduct.productName}')" id="update">Update</button>

<button onclick="deleteProduct('${index}')" id="delete">Delete</button>
					</div>
				</div>`;
	});
};
uiUpdateation();
createProduct.addEventListener("click", () => {
	openForm.style.display = "flex";
});

closeForm.addEventListener("click", () => {
	openForm.style.display = "none";
});

orignalForm.addEventListener("submit", (e) => {
	e.preventDefault();

	let productName = e.target[0].value;
	let productDiscription = e.target[1].value;
	let productPrice = e.target[2].value;
	let productUrl = e.target[3].value;

	let productObject = {
		productName,
		productDiscription,
		productPrice,
		productUrl,
	};

	if (updateIndex !== null) {
		productsArr[updateIndex] = productObject;
		updateIndex = null;
		localStorage.setItem("products", JSON.stringify(productsArr));
	} else {
		productsArr.push(productObject);
		localStorage.setItem("products", JSON.stringify(productsArr));
	}

	uiUpdateation();
	orignalForm.reset();
	openForm.style.display = "none";
});

let updateProduct = (name) => {
	openForm.style.display = "flex";
	let productDetails = productsArr.find((elem) => elem.productName === name);
	updateIndex = productsArr.findIndex((elem) => elem.productName === name);

	orignalForm[0].value = productDetails.productName;
	orignalForm[1].value = productDetails.productDiscription;
	orignalForm[2].value = productDetails.productPrice;
	orignalForm[3].value = productDetails.productUrl;
};

let deleteProduct = (index) => {
	productsArr.splice(index, 1);
	localStorage.setItem("products", JSON.stringify(productsArr));
	uiUpdateation();
};

// let data = [
// 	{
// 		name: "krishna",
// 		age: 21,
// 		pincode: 562187,
// 	},
// 	{
// 		name: "Govind",
// 		age: 23,
// 		pincode: 852145,
// 	},
// 	{
// 		name: "Madhava",
// 		age: 32,
// 		pincode: 963542,
// 	},
// ];

// let convert = JSON.stringify(data)
// localStorage.setItem("pritamkanaam", convert);

// let dataShow = localStorage.getItem("pritamkanaam");

// console.log(dataShow);
