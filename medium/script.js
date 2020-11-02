var input = prompt("Tell me a secret!");

if (input.toUpperCase() === input) {
    console.log("Stop yelling! It's a secret!")
} else if (input === input.toLowerCase()) {
    console.log("I can't hear you. You're whispering.")
} else {
    console.log("You're talking normally and I heard you perfectly.")
}