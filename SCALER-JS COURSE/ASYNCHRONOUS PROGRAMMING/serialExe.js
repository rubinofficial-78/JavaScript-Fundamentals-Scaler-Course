const fs = require('fs');

fs.readFile('./f1.txt','utf-8', cb1);
function cb1(err, data){
    if(err) return;
    console.log(data);
    fs.readFile('./f2.txt','utf-8', cb2);
}

function cb2(err, data){
    if(err) return;
    console.log(data);
    fs.readFile('./f3.txt','utf-8', cb3);
}

function cb3(err, data){
    if(err) return;
    console.log(data);
}