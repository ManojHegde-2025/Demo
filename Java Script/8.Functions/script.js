// // --- Named Function ---
// function sum  (a,b){ //-- function defination
//     sum = a+b;
//     console.log("sum =",sum);
// }

// sum(2,5) //-- function call

// --- Anonymous Function ---
let sum = function (a,b){ 
    sum = a+b;
    return sum
}

console.log("sum = ", sum(10,15))