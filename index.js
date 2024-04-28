// Code With Faizan

let person = {
    name:"Faizan",
    age: 22
};

console.log(person['name']='hey');

// arrays are dynamic and can store values of different data types

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

function greet(){
    console.log('Hey');
}

greet();

function greet2(name){
    console.log('Hey'+ name);
}

greet();
greet2('John');
function square(number){
    return number * number;
}

console.log(square(2));

function add(a, b){
    let sum = a + b;
    return sum
}

console.log(add(1, 2));

let message = "This is my first program"
console.log(typeof(message))
const message2 = new String('This is my first program first')
console.log(typeof(message2))

//functions od string object

console.log(message2.indexOf('first'));
console.log(message2.lastIndexOf('first'));
// use of lastIndexOf in js?
console.log(message2.replace('first', 'last'))

function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('Drawing Circle');
        }
    }
}

let circle1 = createCircle(2);
circle1.draw();

function Circle(radius){
    this.radius = radius,
    this.draw = function() {
        console.log('Drawing Circle with Constructor');
    }
}

let circle2 = new Circle(2);
circle2.draw();

let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName(){
       return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Value is not a string');
        else{
            let parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];

        }
    }
}

console.log(person2.fullName);
person2.fullName = 'Faizan raza';

console.log(person2.fullName);


let shape ={
    color : "red",
    draw(){
        console.log('Drawing');

    }
}

let anotherCircle = {...shape};
console.log(anotherCircle);

let anotherShape2 = Object.assign({
    color2 : 'blue',
    borderRadius : 4
},shape);

console.log(anotherShape2)

let abc = 'Faizan';
let xyz = `hey ${abc}, 

Glad to see you back.

Good luck! for today.`;
console.log(xyz);

const res = arr.filter(function(value){
    return value < 0;
});
console.log(res);

let arr = [1,-2,3,4];

const res2 = arr.map((n,ind) =>{
    console.log('ind=',ind)
    console.log('n=',n);
    ind += n;
    console.log('summm=',ind);
    
    return ind;
})

console.log(res2);

const num = [1,-2,3,-4,5];
const a1= num.filter(n => n > 0).map(i => ({key : i})).filter(obj => obj.key > 2 && obj.key < 5);
console.log(a1);
