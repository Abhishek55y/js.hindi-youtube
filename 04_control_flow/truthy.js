const userEmail = [];

if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't have user email");
}

// Falsy values
// false, 0, -0, 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??)
// null or undefined hone par next value leta hai

let val1;

// val1 = 5 ?? 10;          // 5
// val1 = null ?? 10;       // 10
// val1 = undefined ?? 10;  // 10

val1 = null ?? 10 ?? 20;
console.log(val1); // 10

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice > 80
    ? console.log("price is more than 80")
    : console.log("price is less than or equal to 80");