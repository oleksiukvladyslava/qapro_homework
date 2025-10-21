let filterRegex = /\b[^Aa]{6,}\b/g;

console.log("Wonderful".match(filterRegex));
console.log("Joyful".match(filterRegex));
console.log("Happiness".match(filterRegex));
console.log("Time".match(filterRegex));
console.log("Task".match(filterRegex));
console.log("Apple".match(filterRegex));