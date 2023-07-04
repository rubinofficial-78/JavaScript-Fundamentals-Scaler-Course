//Polymorphism means an behavior existing in many forms

//For diffferent situations it will be behaved differently

class Animal{
    sound(){
        console.log("All the animals uses to make sound");
    }
}


class Cat{
    sound(){
        console.log("Cat meows");
    }
}


class Lion{
    sound(){
        console.log("Lion roars");
    }
}

let animal = new Animal();
let cat = new Cat();
let lion = new Lion();

animal.sound();
cat.sound();
lion.sound();