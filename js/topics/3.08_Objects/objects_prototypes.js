//function instantiation
// function Animal(name, energy)
// {
//     let animal = {}; //let create animal object
//     animal.name = name;
//     animal.energy=energy;

//     animal.eat = function(amount)
//     {
//         console.log(`${this.name} is eating`);
//         this.energy +=amount;
//     }

//     animal.sleep = function(length)
//     {
//         console.log(`${this.name} is sleeping`);
//         this.energy +=length;
//     }

//     animal.play = function(length)
//     {
//         console.log(`${this.name} is playing`);
//         this.energy -=length;
//     }
//     return animal;
// }

// const leo=Animal('Leo',7);
// const snoop=Animal('Snoop',10);
// leo.eat(10);  // same like console.log
// leo.sleep(5);

//Functional Instantiation with shared methods.
const animalMethods = { //this is animalMethods object

    eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    },

    sleep(length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    },

    play(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
};

// function Animal(name, energy)
// {
//     let animal={};
//     animal.name=name;
//     animal.energy=energy;
//     animal.eat=animalMethods.eat;
//     animal.sleep=animalMethods.sleep;
//     animal.play=animalMethods.play;
//     return animal;
// }
// const leo=Animal('Leo',7);
// const snoop=Animal('Snoop',10);
// leo.eat(10);

//Object.create
const parent = {
    name: "John",
    age: 30,
    nationality: "German"
};

const child = Object.create(parent);
child.name = "Doe";
child.age = 20;

console.log(child);
console.log(child.name);
console.log(child.age);
console.log(child.nationality);
console.log(parent.name);

//Functional Instantiation with shared methods and Object.create
// function Animal(name, energy)
// {
//     let animal=Object.create(animalMethods);
//     animal.name=name;
//     animal.energy=energy;
//     // animal.eat=animalMethods.eat;
//     // animal.sleep=animalMethods.sleep;
//     // animal.play=animalMethods.play;
//     return animal;
// }
// const leo=Animal('Leo',7);
// const snoop=Animal('Snoop',10);
// leo.eat(10);

//So far, so good. There are still some improvements we can make though. It seems that still have to manage a separate object (animalMethods) in order to share methods across instances. 
//that we can implement through prototype.
//Prototype -every function in JavaScript has a prototype property that references an object.
function doThings() { }
console.log(doThings.prototype); // doThings {}
// function doThings() {} = doThings.prototype

//Prototype Instantiation
function Animal(name, energy) {
    let animal = Object.create(Animal.prototype); // Object.create(animalMethods);
    animal.name = name;
    animal.energy = energy;
    return animal;
}
Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
}
Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
}
const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);
leo.eat(10);

//let arr=[9,29,3];
//arr.forEach() // Array.prototype.forEach

//Object Prototype
let obj={};
console.log(obj);

//Built in prototypes : Array, Date, Function
let arr= [1, 2,3];
console.log(arr.__proto__ ===Array.prototype);

console.log(arr.__proto__.__proto__ === Object.prototype );
console.log(arr.__proto__.__proto__.__proto__);

console.log(arr);  //the result of Array.prototype.toString.

//Another example
function f() {}
console.log("Function...");
console.log(f.__proto__==Function.prototype);
console.log(f.__proto__.__proto__==Object.prototype);

//Javascript array prototype constructor

Array.prototype.myTest = function() {
    console.log('Array prototype...');
    for(i=0; i<this.length; i++)
    {
        this[i]=this[i].toUpperCase();
    }
};

var fruits = ["Orange","Apple","Mango","Banana"];
console.log(fruits);
fruits.myTest();
console.log(fruits);

var testArr= ['a','b','c'];
testArr.myTest();
console.log(testArr);

//Map
var arr1=[2,3,9,16]; //0..3

//old way
var temp=[];
for(i=0; i<arr1.length; i++)
{
  temp.push(arr1[i]*2);
}
console.log(temp);

//using array method
const result=arr1.map(x=>x*2);
console.log(result);

//with function defination
var counter=0;
var newArr=arr1.map(myFunction);  //arr1 : 2,3,9,16
console.log(newArr);
function myFunction(num)
{
    //console.log(counter);
    //counter++;
    return num*10;
}
