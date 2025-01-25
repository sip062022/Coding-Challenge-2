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

// Task 3: Working with Objects //

let objectEmployee = {       // declares the object objectEmployee
    name: "Mary",            // defines key "name" 
    age: 25,                  // defines key "age"
    department: "Finance",    // defines key "department"
    isActive: true           // defines key "isActive"
};
console.log("Original Object:", objectEmployee); // Displays the original object as { name: "Mary", age: 25, department: "Finance", isActive: true }

function updateDepartment (name, newDepartment) {  // defines function to update the department (as shown in Canvas)
    name.department = newDepartment;      // continued function to updated department 
    return name; // continued function to update department
};

let employeeRecord =  { name: "Mary", age: 25, department: "Finance", isActive: true };  // defines which employee record to update
let updatedRecord = updateDepartment(employeeRecord, "Accounting");  // defines that we will be changing "finance" to "accounting"
console.log("Object after changing department:", updatedRecord);  // Displays the updated object as { name: "Mary", age: 25, department: "Accounting", isActive: true }

objectEmployee.Position = "Analyst"; // Adds the position of "analyst" to the object of objectEmployee
console.log("Object after adding position:", objectEmployee); // Displays the updated object as { name: "Mary", age: 25, department: "Finance", isActive: true, Position: "Analyst" }

// Task 4: Array of Objects //

let customers = [   // defines the array as "customers"
    {name: "Andy", email: "Andy@gmail.com", purchaseAmount: 50},  // defines first object which contains Andy's name, email, and purchase amount
    {name: "Blake", email: "Blake@gmail.com", purchaseAmount: 40}, // defines second object which contains Blake's name, email, and purchase amount
    {name: "Claire", email: "Claire@gmail.com", purchaseAmount: 30} // defines third object which contains Claire's name, email, and purchase amount
];

let newCustomer = {name: "Dave", email: "Dave@gmail.com", purchaseAmount: 20} // defines the new object to be added
customers.push(newCustomer); // adds a new object to the end of the array
console.log(customers); // Displays the new array with all four customers
