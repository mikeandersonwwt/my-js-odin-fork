const sumAll = function(int1, int2) {
    const min = Math.min(int1, int2);
    const max = Math.max(int1, int2);
    let sum = 0;

    if (int1 < 0 || int2 < 0 ||
        typeof int1 !== "number" ||
        typeof int2 !== "number" ||
        !Number.isInteger(int1) ||
        !Number.isInteger(int2)
    ) {
        return "ERROR";
    } 
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;



// Implement a function that takes 2 positive integers and returns the sum of 
// every integer between (and including) them:

// make sure you pay attention to the function parameters
// create a variable to hold the final sum
// loop through the given numbers (link)
// on each iteration add the number to the sum
// return the sum after finishing the loop