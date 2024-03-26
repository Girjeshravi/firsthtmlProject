// function
// arrow functions
// array
// var ,let,consr difference
// reassignment
// hoisting
// scopes


 //1. function 
 function greet(){
    console.log("hello good morning");
 }
 greet();
 greet();

//function calling
 function greettimewise(parameter1,parameter2){
    console.log("hello everyone "+parameter1+parameter2);
 }
 greettimewise("good morning "," myself girjesh");

// return statement
// a function can optionally return a value using the return statement

function sum(a,b){
    let result=a+b;
    return result;
}
let ans=sum(5,10);
console.log(ans);

//4. function scope
function myfunction(){
    let x=10;
    console.log(x);
}
// console.log(x); // will give error x is not defined
myfunction();

//5. function expression
let hello =function(){
    console.log("hellow");
}
hello();


// ARROW FUNCTIONS

// let hello =function(){
//     console.log("hellow");
// }
// hello();
let hello2=()=>console.log("hello arrow");

let hello3=()=>{
    console.log("hello chutiye");
    console.log("hello boss");
}

hello2();
hello3();

let multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(5,10));


//ARRAY
//1. CREATING ARRAYS
let arr1=[];
let arr2=["apple","banana","orange"];
let arr3=[9,"hello",true,["dancing","singing","writing"]];
console.log(arr3);

// modifyinh array element 
arr2[1]="kela";
console.log(arr2);

// array length
console.log(arr3.length);

let arr=[1,"hello","orange","santra"];
// array methods and operations
//1 push
arr.push("lockey","adrak");
console.log(arr);

//2 pop
//used to remove last element from the array
arr.pop();
console.log(arr2);

//3 shift
//used to remove the first element from the array
arr.shift();
console.log(arr);

//4 unshift
//used to add the element in the beginning of an array
arr.unshift(1,10,"wow");
console.log(arr);

//5 concat
let arr4=[9,9,93,93,483];
// concat will add the full array at the last of given array
arr2=arr2.concat(arr4);
console.log(arr2);

// let a=3; //using let
// var a=3; // using var
// const a=3; // using const


// scope means wo variable kaha kaha excess kar sakte hain (valid rahega)
//assignment means ham kisi varibale ko kisi bhi datatype or value me change kr sakte hain
//         Reassignment     scope            hoisting
// var   | yes              block,function    hoisted
// let   | yes              block             not hoisted
// const | no               block             not hoisted


//HOISTING

// here we cannot access ayush before initialising
// console.log(ayush); // error
let ayush="bansal";
console.log(ayush);

// console.log(ayush); // error
const ayush1="bansal";
console.log(ayush1);


//here in var the thing is different
console.log(girjesh);
var girjesh="patidar";
console.log(girjesh);
//result:-
// during compilation  the process is like
var girjesh;
console.log(girjesh);//undefined
girjesh="patidar";
console.log(girjesh);//patidar



// SCOPE - WHo can access our variable
let a=100;  // here let is helping us to describe the scope of a
// local scope .... if avariable is declared with let and inside curly brackets the it is local variable
// global scope ....if variable is declared with simple(a=100) and it is written anywhere then it is access from anywhere so it is global variable
 

let c=10;
let b=20;
let sum=a+b;
console.log(sum);
console.log("sum of",a,"and", b,"is",sum); //using double qote
console.log(`sum of ${a} and ${b} is ${sum}`); // using single qote

// to write multiple line string we have to use back clote 
let str = `sjncbsavhjbe
vekjvneiuonv
vckejnveipuvn
venvipenv`;
console.log(str);