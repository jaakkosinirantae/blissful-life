/* 
   Filename: ComplexCodeExample.js
   Description: This code is a demonstration of a complex JavaScript implementation using multiple concepts and techniques.
*/

// Person class representing a person with a name, age, and gender
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Method to get the person's details
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

// Function to calculate the factorial of a given number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Creating instances of the Person class
const person1 = new Person("John Doe", 25, "Male");
const person2 = new Person("Jane Smith", 30, "Female");

// Printing the details of the persons
console.log(person1.getDetails());
console.log(person2.getDetails());

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Array of numbers
const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

// Printing prime numbers from the array
console.log("Prime Numbers:");
for (let number of numbers) {
  if (isPrime(number)) {
    console.log(number);
  }
}

// Function to capitalize the first letter of each word in a string
function capitalizeString(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
  }
  return words.join(" ");
}

// Testing the capitalizeString function
console.log(capitalizeString("hello world")); // Output: Hello World
console.log(capitalizeString("javascript is awesome")); // Output: Javascript Is Awesome

// Recursive function to calculate the Fibonacci series
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Printing the Fibonacci series
console.log("Fibonacci Series:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}

// Function to generate a random number between two given numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate and print 5 random numbers between 1 and 10
console.log("Random Numbers:");
for (let i = 0; i < 5; i++) {
  console.log(getRandomNumber(1, 10));
}

// Class representing a Rectangle with width and height
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }

  // Method to calculate the perimeter of the rectangle
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Creating an instance of the Rectangle class
const rectangle = new Rectangle(5, 10);

// Printing the area and perimeter of the rectangle
console.log("Rectangle Details:");
console.log("Area:", rectangle.calculateArea());
console.log("Perimeter:", rectangle.calculatePerimeter());

// Long function to demonstrate code complexity
function complexFunction() {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      sum += i;
    } else {
      sum -= i;
    }
  }
  return sum;
}

// Calling the complex function and printing the result
console.log("Complex Function Result:", complexFunction());

// More code...
// ...
// ...

// End of code