const fs = require('fs');

console.log("First");

const data = fs.readFileSync('./f1.txt', 'utf-8');

console.log(data);

console.log("Last");