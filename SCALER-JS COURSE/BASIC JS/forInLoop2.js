//Write a JS Program to print the values and the index position of the array using For-in loop

var colors = ['Red', 'Yellow', 'Blue', 'Green', 'Rose', 'Gold'];

for(var color in colors){
    console.log(color+" -> "+colors[color]);
}