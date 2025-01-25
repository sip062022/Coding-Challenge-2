// Task 1: Working with Arrays //

let products = ["Pen", "Pencil", "Marker", "Highlighter", "Eraser"]; // declare the array "products" which contains pen, pencil, marker, highlighter, and eraser 
products.unshift("Crayon"); // adds "crayon" to the beginning of the array
let popped = products.pop(); // establishes "Eraser" as the item to be deleted from the end of the array
console.log(products); // Displays the array as Crayon, Pen, Pencil, Marker, Highlighter

// Task 2: Accessing and Modifying Arrays //

let scores = [60, 70, 80, 90, 100]; // declare the array "scores" which contains the values of 60, 70, 80, 90, and 100
scores.splice(1,1, 85); // replaces 70 with 85
console.log(scores); // displays the array as 60, 85, 80, 90, 100.

let total = scores.reduce((sum, scores) => sum + scores, 0); // This adds all the values in the array to find the total
let numberOfElements = scores.length ; // This calculates the number of elements in the array.
let averageScore = total/numberOfElements; // This performs the calculate to find average by dividing the total of all scores by the number of elemeents, or 415/5=83.
console.log("Average Score:", averageScore); // Displays the average score as "Average Score: 83"

