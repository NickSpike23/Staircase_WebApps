// Angel Gabriel Barrera Rangel ST: 5043
// Exercise 2
// Create a function to print a staircase
function staircase(n){
    for (let i = 0 ; i < n; i++){
        print = "#".repeat(i+1);
        console.log(print);
    }
}

staircase(2);