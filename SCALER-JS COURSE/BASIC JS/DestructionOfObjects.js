//We can perform destruction in objects also, as follows

let obj1 = {
    name : 'Rubin',
    age : 20,
    gender : 'Male',
    address : {
        city : 'Coimbatore',
        pincode : 642201
    }
}

let {name:n,age:a,gender:g, address: {city : c, pincode:p}} = obj1;

console.log(n);
console.log(c);
console.log(p);


