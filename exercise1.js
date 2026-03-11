// Angel Gabriel Barrera Rangel ST: 5043
// Exercise 2
// Create a function to print a staircase
function staircase(n){ // It gets the number of steps as a parameter
    for (let i = 0 ; i < n; i++){ // Loop to print the steps
        print = "#".repeat(i+1); // It creates a string with the number of "#" equal to the current step
        console.log(print); 
    }
}

staircase(2); // it calls the function with 2 steps