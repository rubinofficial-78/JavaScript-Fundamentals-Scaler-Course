const fs = require('fs');

console.log("first");

fs.readFile('./f1.txt', 'utf-8', (err, data) => {
    if(err){
        return;
    }else{
        console.log(data);
    }
});

console.log("last");

fs.readFile('./f2.txt', 'utf-8', (err, data) => {
    if(err){
        return;
    }else{
        console.log(data);
    }
});

console.log("last");