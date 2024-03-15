// Question No 1
// Display "Hello World" 5 times using a for loop

for (let i = 0; i < 5; i++) {
    document.write("<p>Hello World</p>");
}

// Question No 2
// Write a program to print numeric counting from 1 to 10.

// Print numeric counting from 1 to 10
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Question No 3
// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// Take input for table number and length from the user
let tableNumber = parseInt(prompt("Enter the table number:"));
let tableLength = parseInt(prompt("Enter the length of the table:"));

// Print multiplication table using a for loop
document.write("<h2>Multiplication Table of " + tableNumber + ":</h2>");
document.write("<ul>");

for (let i = 1; i <= tableLength; i++) {
    let result = tableNumber * i;
    document.write("<li>" + tableNumber + " x " + i + " = " + result + "</li>");
}

document.write("</ul>");

// Question No 4
// You have an array A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] Write each element on new line with the help of for loop.

// Array A
let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// Write each element on a new line using a for loop
document.write("<h2>Elements of Array A:</h2>");
document.write("<ul>");

for (let i = 0; i < A.length; i++) {
    document.write("<li>" + A[i] + "</li>");
}

document.write("</ul>");

// Question No 5
// Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// Array of fruits
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Print items of the array along with their index using a for loop
document.write("<h2>Fruits:</h2>");
document.write("<ul>");

for (let i = 0; i < fruits.length; i++) {
    document.write("<li>" + fruits[i] + "</li>");
}

for (let i = 0; i < fruits.length; i++) {
    document.write("<li>" + " Element at Index: " + i + " is " + fruits[i] + "</li>");
}

document.write("</ul>");


// Question No 6

// Ask the user for the number of items
let numberOfItems = parseInt(prompt("Enter the number of items:"));

// Display the number of items
document.write("<p>Number of items: " + numberOfItems + "</p>");

// Initialize an empty array to store the items
let itemsArray = [];

// Use a for loop to prompt the user for each item and store them in the array
for (let i = 0; i < numberOfItems; i++) {
    let item = prompt("Enter item " + (i + 1) + ":");
    itemsArray.push(item);
}

// Display the items in the array
document.write("<p>Items:</p>");
document.write("<ul>");

for (let i = 0; i < itemsArray.length; i++) {
    document.write("<li>" + itemsArray[i] + "</li>");
}

document.write("</ul>");

// Question no 7

// a. Counting: 1, 2, 3, ..., 15
document.write("<h2>Counting:</h2>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

// b. Reverse counting: 10, 9, 8, ..., 1
document.write("<h2>Reverse counting:</h2>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

// c. Even: 0, 2, 4, ..., 20
document.write("<h2>Even:</h2>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

// d. Odd: 1, 3, 5, ..., 19
document.write("<h2>Odd:</h2>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}

// e. Series: 2k, 4k, 6k, ..., 20k
document.write("<h2>Series:</h2>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}

// Question No 8


// Array of items
let Ar = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for item in the array
function searchItem() {
    // Get user input
    let userInput = prompt("Enter an item to search:");

    // Convert user input to lowercase for case-insensitive search
    userInput = userInput.toLowerCase();

    // Initialize variable to track if item is found
    let found = false;

    // Loop through the array to search for the item
    for (let i = 0; i < Ar.length; i++) {
        // Convert current array item to lowercase for case-insensitive comparison
        let currentItem = Ar[i].toLowerCase();

        // If item is found, set found to true and break out of the loop
        if (currentItem === userInput) {
            found = true;
            break;
        }
    }

    // Prompt user based on search result
    if (found) {
        document.getElementById("search-result").innerHTML = "<p>Item found: " + userInput + "</p>";
    } else {
        document.getElementById("search-result").innerHTML = "<p>Item not found.</p>";
    }
}

// Call the searchItem function when user clicks the search button
// document.getElementById("search-button").addEventListener("click", searchItem);
