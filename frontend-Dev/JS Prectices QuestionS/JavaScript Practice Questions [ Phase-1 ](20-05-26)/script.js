console.log("Hare Krishna !");

// ? JavaScript Beginner Practice Questions

//? Console & Basics

// // Print "Hello JavaScript" in the console.
// console.log("Hello JavaScript");

// // Print your name, age, and city using one console.log().
// console.log("My Name is Jatin, age : 18, city : Palanpur.");

// // Print a warning message using console.warn().
// console.warn("YOU ARE MOVE IN WRONG DIRACTION !");

// // Print an error message using console.error().
// console.error("YOU CODE IS VERY LENGTHY");

// // Use console.table() to display an array of 5 numbers.
// console.table([1, 2, 3, 4, 5]);

//? Variables

// // Create a variable called studentName and store your name in it.
// let studentName = "Jatin Prajapati";
// console.log(studentName);

// // Create a variable age and print it.
// let myAge = "20";
// console.log(myAge);

// // Create two variables and swap their values.
// let a = 10;
// let b = 20;

// [a, b] = [b, a];
// console.table([a, b]);

// // Create a constant variable for PI and print it.
// const PI = 3.14;
// console.log(PI);

// // Declare a variable without assigning a value and print it.
// let withoutAssigning;
// console.log(withoutAssigning);

// // Create a variable score and increase it by 10.
// let score = 376;
// let increasebyTen = 10;
// console.log(score + increasebyTen);

// // Create three variables for first name, last name, and full name.
// let firstName = "Jatin";
// let lastName = "Prajapati";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

//? Data Types

// // Create variables of type string, number, boolean, null, and undefined.
// let stringValue = "String Type";
// console.log(stringValue);

// let numberValue = 1234567890;
// console.log(numberValue);

// let booleanValue = true;
// console.log(booleanValue);

// let nullValue = null;
// console.log(nullValue);

// let undefinedValue;
// console.log(undefinedValue);

// // Check the type of different variables using typeof.
// let stringValueChecktypeof = "String Type";
// console.log(typeof stringValueChecktypeof);

// let numberValueChecktypeof = 1234567890;
// console.log(typeof numberValueChecktypeof);

// let booleanValueChecktypeof = true;
// console.log(typeof booleanValueChecktypeof);

// let undefinedValueChecktypeof;
// console.log(typeof undefinedValueChecktypeof);

// let functionValueChecktypeof = () => {};
// console.log(typeof functionValueChecktypeof);

// let arrayValueChecktypeof = [];
// console.log(typeof arrayValueChecktypeof);

// let objectValueChecktypeof = {};
// console.log(typeof objectValueChecktypeof);

// let symbolValueChecktypeof = Symbol();
// console.log(typeof symbolValueChecktypeof);

// // Store your mobile number in a variable and check its type.
// let myPhoneNumber = 8325467228;
// console.log(typeof myPhoneNumber);

// // Create a variable with value null and check its type.
// let nullValueChecktypeof = null;
// console.log(typeof nullValueChecktypeof);

// // Create a bigint number and print it.
// let bigIntValueChecktypeof = 50n;
// console.log(typeof bigIntValueChecktypeof);

//? Type Conversion & Coercion

// // Convert the string "50" into a number.
// let stringNum = "50";
// let convetToNumber = Number(stringNum);
// console.log(convetToNumber);
// console.log(typeof convetToNumber);

// // Convert the number 100 into a string.
// let number = 100;
// let convetToString = String(number);
// console.log(convetToString);
// console.log(typeof convetToString);

// // Convert "true" into a boolean.
// let bollean = "true";
// let convetToBollean = Boolean(bollean);
// console.log(convetToBollean);
// console.log(typeof convetToBollean);

// // 4. Check the output of:
// console.log("5" + 2);
// console.log("5" - 2);
// console.log(true + 1);

// // Create a variable with value "123abc" and convert it into a number.
// let valuej = "123abc";
// console.log(valuej);
// console.log(Number(valuej));

// // Use parseInt() on "500px".
// console.log(parseInt("500px"));

//? Operators

// // Add two numbers and print the result.
// let aNumber = 12;
// let bNumber = 8;
// console.log(aNumber + bNumber);

// // Find the remainder when 25 is divided by 4.
// console.log(25 % 4);

// // Find the square of a number using exponent operator.
// let num = 5;
// let square = num ** 2;
// console.log(square);

// // Increment a variable using `++`.
// let increaseAValue = 19;
// console.log(increaseAValue++);
// console.log(increaseAValue);

// // Decrement a variable using `-`.
// let DecrementAValue = 11;
// console.log(DecrementAValue--);
// console.log(DecrementAValue);

// // Use `+=` operator to increase a variable by 20.
// let lastNumber = 80;
// lastNumber += 20
// console.log(lastNumber);

// // Compare two numbers using `>`, `<`, `>=`, `<=`.
// console.log(10 > 9);
// console.log(10 < 9);
// console.log(10 >= 10);
// console.log(10 <= 9);

// // Check if two values are strictly equal using `===`.
// let x = 23;
// let y = 45;
// if (x === y) {
//     console.log("equle");
// } else {
//     console.log("Not equle");
// }

// // Compare `"10"` and `10` using both `==` and `===`.
// console.log("10" === 10);
// console.log("10" == 10);

// // Create two boolean variables and test `&&`, `||`, and `!`.
// let test = true
// let test1 = false
// console.log(test && test1);
// console.log(test || test1);
// console.log(test != test1);

//? Strings

// // Create a string and print its length.
// let name = "jatin"
// console.log(name.length);

// // Convert a string into uppercase.
// let uppercaseString = "krishna"
// console.log(uppercaseString.toUpperCase());

// // Convert a string into lowercase.
// let lowercaseString = "RADHA";
// console.log(lowercaseString.toLowerCase());

// // Check if a string includes the word `"JavaScript"`.
// let checkIncludes = "Hello ! JavaScript"
// console.log(checkIncludes.includes("JavaScript"));

// // Extract the word `"World"` from `"Hello World"`.
// let textTo = "World";
// console.log("Hello " + textTo);

// // Replace `"apple"` with `"mango"` in a sentence.
// let sentectWord = 'apple'
// sentectWord = "mango"
// console.log(`Hello my new ${sentectWord}`);

// // Split `"HTML,CSS,JS"` into an array.
// let split = "html,css,js"
// console.log(split.split(","));

// // Remove extra spaces from a string.
// let extra = "   hello html my name is krishna    "
// console.log(extra.trim());

// // Repeat the word `"Hi"` 5 times.
// console.log("hello ".repeat(5));

// // Print the first character of a string.
// let ch = "JavaScript"
// console.log(ch[0]);

// // Use template literals to print:`"My name is Aman and I am 20 years old"`
// let aa = "Aman"
// let ageis = 20
// console.log(`My name is ${aa} and I an ${ageis} years old`);

//? Numbers & Math

// // Round `4.7` using `Math.round()`.
// console.log(Math.round(4.5));

// // Find the square root of 81.
// console.log(Math.sqrt(81));

// // Find the maximum number from `10, 20, 5, 99`.
// console.log(Math.max(10,20,5,99));

// // Generate a random number between 1 and 10.
// console.log(Math.random()*10);

// // Convert `"99.99"` into an integer.
// console.log(parseInt("99.99"));

// // Check whether `25` is an integer or not.
// console.log(Number.isInteger(25));

// // Use `toFixed(2)` on `3.141592`.
// console.log(3.141592.toFixed(2));

//? Conditionals

// // Check whether a number is positive or negative.
// let pone = Number(prompt("Enter number"));
// if (pone > 0) {
// 	console.log("positive");
// } else if (pone < 0) {
// 	console.log("negative");
// } else if (pone === 0) {
// 	console.log("zero");
// } else {
// 	console.log(Number("NaN"));
// }

// // Check whether a number is even or odd.
// let evod = Number(prompt("Enter a number : "))
// if (evod % 2 === 0) {
//     console.log("even");
// } else {
// 	console.log("odd");
// }

// // Check whether a person is eligible to vote.
// let age = Number(prompt("enter your age :"))
// if (age >= 18) {
//     console.log("go for vote");
// } else {
//     console.log("you can not for vote");
// }

// // Find the largest among two numbers.
// let num1 = 32
// let num2 = 235
// if (num1 > num2) {
//     console.log("num1 is big");
// } else {
//     console.log("num2 is big");
// }

// // Find the largest among three numbers.
// let num1 = 37;
// let num2 = 35;
// let num3 = 25;
// if (num1 > num2) {
// 	if (num1 > num3) {
// 		console.log("num1 is big");
// 	}
// } else if (num2 > num1) {
// 	if (num2 > num3) {
// 		console.log("num2 is big");
// 	}
// } else {
// 	console.log("num3 is big");
// }

// // Check whether a year is a leap year.
// let year = 2016;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
// 	console.log("year is leap year");
// } else {
// 	console.log("year is not leap year");
// }

// // Check whether a number is divisible by both 3 and 5.
// let number = 9
// if (number % 3 === 0) {
//     console.log("this number is divisible by 3");
//     if (number % 5 === 0) {
//         console.log("this number is divisible by both 3 and 5");
//     }
// } else {
//     console.log("not ");
// }

// // Create a simple grading system:
// // - 90+ → A
// // - 75+ → B
// // - 50+ → C
// // - below 50 → Fail
// let studentGrading = 98
// if (100 >= studentGrading && studentGrading >= 95) {
// 	console.log("A+");
// } else if (90 <= studentGrading && studentGrading <= 95) {
// 	console.log("A");
// } else if (80 <= studentGrading && studentGrading <= 90) {
// 	console.log("B");
// } else if (70 <= studentGrading && studentGrading <= 80) {
// 	console.log("C");
// } else if (55 <= studentGrading && studentGrading <= 70) {
// 	console.log("D");
// } else if (37 <= studentGrading && studentGrading <= 55) {
// 	console.log("E");
// } else {
// 	console.log("FAIL !");
// }

// // Check whether a character is a vowel or consonant.
// let a = "u"
// if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
// 	console.log("this character is vowel");
// } else {
// 	console.log("this character is consonant");
// }

// // Create a calculator using `switch` statement.
// let calNumber = prompt("enter");
// let ans;
// let num1 = 50
// let num2 = 6
// switch (calNumber) {
// 	case "+":
// 		ans = num1 + num2;
// 		console.log(ans);
// 		break;
// 	case "-":
// 		ans = num1 - num2;
// 		console.log(ans);
// 		break;
// 	case "*":
// 		ans = num1 * num2;
// 		console.log(ans);
// 		break;
// 	case "/":
// 		ans = num1 / num2;
// 		console.log(ans);
// 		break;
// 	default:
// 		break;
// }

// // Print the day name based on a number (1–7).
// let day = 1;
// switch (day) {
// 	case 1:
// 		console.log("Monday");
// 		break;
// 	case 2:
// 		console.log("Tuesday");
// 		break;
// 	case 3:
// 		console.log("Wednday");
// 		break;
// 	case 4:
// 		console.log("Thuesday");
// 		break;
// 	case 5:
// 		console.log("Friday");
// 		break;
// 	case 6:
// 		console.log("Satureday");
// 		break;
// 	case 7:
// 		console.log("Sunday");
// 		break;
// 	default:
// 		break;
// }

// // Check whether a username is `"admin"` and password is `"1234"`.
// let username = "adtmin"
// let password = 12345
// if (username == "admin" && password == 12345) {
// 	console.log("This is user valid !");
// } else {
// 	console.log("This is not valid User !");

// }

//? Truthy & Falsy

// Check whether an empty string is truthy or falsy.
// console.log(Boolean("")); // yes ! empty srting is falsy.

// Check whether `0` is truthy or falsy.
// console.log(Boolean(0)); // yes ! 0 is falsy.

// Check whether `[]` is truthy or falsy.
// console.log(Boolean([])); // yes ! [] is true

// // Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.
// let data = "Govind";
// if (data) {
// 	console.log("Valid");
// } else {
// 	console.log("Not Valid");
// }

//? Ternary Operator

// // Check whether a number is even or odd using ternary operator.
// 8 % 2 === 0 ? console.log("even") : console.log("odd");

// // Check whether age is above 18 using ternary operator.
// let age = 18
// console.log(age <= 18 ? "Yes" : "No");

// // Find the greater number between two values using ternary operator.
// let num1 = 85
// let num2 = 55
// console.log(num1 > num2 ? "number 1 is big": "number is 2 big");

//? Mixed Practice Questions

// // Create a mini biodata program using variables and template literals.
// let name = "krishna"
// let city = "Vrindavan"
// let Pincode = 369856
// let age = 16
// console.log(`My name is ${name}.and age is ${age}, too pincode ${Pincode}.so city is ${city}`);

// // Calculate the area of a rectangle.
// let l = 10
// let w = 5
// console.log(l*w);

// // Calculate the simple interest.
// let p = 1000
// let r = 5
// let t = 2
// let si = (p * r * t) / 100
// console.log(si);

// // Convert temperature from Celsius to Fahrenheit.
// let c = 30;
// let f = (c * 9 / 5) + 32
// console.log(f);

// // Convert kilometers into meters.
// let km = 5
// let m = km * 1000
// console.log(m);

// // Calculate total marks and percentage of 5 subjects.
// let html = 45
// let css = 87
// let js = 65
// let python = 97
// let coa = 97
// let total = html + css + js + python + coa
// console.log(`total mark is ${total}`);
// let per = (total *  100) / 500
// console.log(per);

// // Calculate electricity bill based on units consumed.
// let units = 45
// let bill;
// if (units <= 100) {
// 	bill = units * 5
// }
// else {
// 	bill = units * 8
// }
// console.log(bill);

// // Create a username generator using first name and birth year.
// let first_Name = "Manish"
// let birth_year = 2005
// console.log(`You UserName is { ${first_Name}_${birth_year}}`);

// // Check whether a string starts with a specific letter.
// let str = '&govind'
// let first_letter = str[0]
// if (first_letter == '!' || first_letter == '@' || first_letter == '#' || first_letter == '$' || first_letter == '^' || first_letter == '&') {
// 	console.log("Yes, In this string in first letter is Specific letter : " + first_letter);
// } else {
// 	console.log("NO !");
// }

// // 10. Count the total characters in a sentence excluding spaces.
// let sentence = 'hello world jatin rfhit jhdjnv gtk ok'
// console.log(sentence.length);

//? Logical Thinking Questions

// // Take two numbers and print which one is greater.
// let n1 = 45;
// let n2 = 65;
// if (n1 > n2) {
// 	console.log("Number is big");
// } else {
// 	console.log("number 2 is big");
// }

// // Check whether a number lies between 10 and 50.
// let n1 = 45
// if (n1 >= 10 && n1 <= 50) {
// 	console.log("number is between 10 ans 50");
// } else {
// 	console.log("Not");
// }

// // Check whether a password length is greater than 8.
// let password = "082905J2"
// let length = password.length
// if (length >= 8 ) {
//     console.log("Strong Password !")
// } else {
//     console.log("Weeek password !")
// }

// // Check if a person can drive:
// // -- age > 18
// // -- has license = true
// let age = 18
// let license = true
// if (age >= 18 && license) {
//     console.log("You drive well")
// } else {
//     console.log("No drive a car")
// }

// // Check whether a number is divisible by 2, 3, or both.
// let n = 6;
// if (n % 2 == 0) {
// 	if (n % 3 == 0) {
// 		console.log("yes");
// 	}
// } else {
// 	console.log("no");
// }

// // Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
// let time = new Date().getHours();
// if (time < 12) {
//     console.log("morning")
// } else if(time < 17){
//    console.log("after")
// } else {
//     console.log("evening")
// }

// // Find whether a number is a multiple of 10.
// let n = 30;
// if (n % 10 == 0) {
// 	console.log("multiple of 10");
// } else {
// 	console.log("not multiple of 10");
// }

// // Create a simple discount calculator.
// let amount = 2000;
// let discount = 15;
// let bill;
// if (amount >= 2000) {
// 	bill = (amount * discount) / 100;
// 	amount = amount - bill;
// 	console.log(amount);
// } else {
// 	console.log("Your bill lessthen 2000");
// }

// // Check whether a product is in stock.
// let stock = true;
// if (stock) {
// 	console.log("Yes");
// } else {
// 	console.log("no");
// }

// Calculate final bill after GST.
// let amount = 2000;
// let gst = 15;
// let bill;
// if (amount >= 2000) {
// 	bill = (amount * gst) / 100;
// 	amount = amount + bill;
// 	console.log(amount);
// } else {
// 	console.log("Your bill lessthen 2000");
// }

//?  Challenge Questions for Beginners

// // Generate a random OTP of 4 digits.
// let otp = Math.floor(1000 + Math.random() * 9000);
// console.log(otp);

// // Reverse a 3-letter string manually.
// let str = "STR"
// let rev = str[2] + str[1] + str[0];
// console.log(rev);

// // Find the last character of a string.
// let strLast = "Krishna"
// console.log(strLast[strLast.length - 1]);

// // Convert a full name into uppercase initials.
// let fullName = "Jatin Prajapati";
// let initials = fullName[0] + fullName[6];
// console.log(initials.toUpperCase());

// // Check whether two strings are equal ignoring case sensitivity.
// let str = "shna";
// let str2 = "krishna";
// if (str.toUpperCase() === str2.toUpperCase()) {
// 	console.log("are equal");
// } else {
// 	console.log("not equal");
// }

// // Create a simple login validation system.
// let user = 'k8ishna'
// let password = 1234567890
// if (user === "krishna" && password === password) {
// 	console.log("Log in system is start !");
// } else {
// 	console.log("Log in system not proper ready !");
// }

// // Find whether a number is a 2-digit or 3-digit number.
// let number = 250;
// if (number >= 10 && number <= 99) {
// 	console.log("2-digit number");
// } else if (number >= 100 && number <= 999) {
// 	console.log("3-digit number");
// } else {
// 	console.log("Other number");
// }

// // Create a mini ATM balance checker.
// let atm = 50000;
// let withdraw = 6000;
// if (withdraw <= atm) {
// 	atm = atm - withdraw;
// 	console.log(atm);
// } else {
// 	console.log("you atm no money");
// }

// // Simulate a traffic light system using `switch`.
// let light = "yellow"
// switch (light) {
// 	case "red":
// 		console.log("All Vehicals are stop !");
// 		break;
// 	case "yellow":
// 		console.log("All Vehicals are slow !");
// 		break;
// 	case "green":
// 		console.log("Go !");
// 		break;

// 	default:
// 		break;
// }

// // Build a small marksheet generator using variables and conditionals.
// let marks = 78;
// if (marks >= 90) {
// 	console.log("Grade A");
// } else if (marks >= 75) {
// 	console.log("Grade B");
// } else if (marks >= 50) {
// 	console.log("Grade C");
// } else {
// 	console.log("Fail");
// }   
