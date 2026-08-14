// Immediately Invoked Function Expression (IIFE)

(function one() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    // unnamed IIFE 
    console.log(`DB CONNECTED TWO ${name}`);



})('Abhishek');