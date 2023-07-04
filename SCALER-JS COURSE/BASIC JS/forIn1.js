//A for-in loop is a special kind of loop in javascript where it used to traverse the properties in the objects and also traverse the array elements aswell


var colors = {
    primary : 'Red',
    secondary : 'Blue',
    tertary : 'Green'
}

for(var color in colors){
    console.log(color+" -> "+colors[color]);
}
