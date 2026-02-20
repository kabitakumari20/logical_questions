// A function that accepts a callback function as an argument
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();  // This calls the callback function passed to greet
}

// A callback function
function afterGreeting() {
    console.log('Callback function executed!');
}

// Using the greet function with a callback
greet('Alice', afterGreeting);
