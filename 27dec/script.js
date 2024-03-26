// console.log("hello world222")

// outputting text in console
// data types
// conditionals
// loops
// function
// opearator
// array
// var ,let,const difference
// reassignment
// hoisting
// scopes


// outputting text in console
console.log("hello world");
// console.log is a function that is used to display the text hello world

//1) Concatenating strings
// simply means joining
let firstname="ayush";
let lastname="bansal"; 
console.log(firstname+" "+lastname);
// this code will tell how to concenate using + operator

// 2) mathematical calculations
let radius=5; 
console.log(Math.PI*radius*radius);

// boolean expressions
// true /false
console.log(5>10);

// 4)array displaying
let arr=["a","b","c"];
console.log(arr);

// loosely handles language-- js
//java is strictly types language
let a=10;
console.log(a);

a="Ayush bansal";
console.log(a);

a=true;
console.log(a);

// -------------------------------------------------------
// data types
// in javascript we just declare a variable not a datatype
// 1.STRING
let name="girjesh patidar";
console.log(typeof name);
//a="z"//string
//a='z' //string
// a=`hello`//back tick string

//2. number
let age=25.3676;
console.log(typeof age);

//3. boolean
let ans=true;
console.log(typeof ans);
console.log(ans);

//4. Null
let address=null;
// here variable stores a null value ,indicating the absence of a value

// 5.undefined
let phonenumber;
console.log(phonenumber); //undefined
// phonenumber is declared but have not assigned a value;
// hence it has undefined data type

// 6.Array
let abc=["aak","qwe","wweretr"];
// ordered collection of elements
console.log(abc);

//7. Object
let person={
    name:"jayesh mahajan",
    age:9,
    isStudent:false,
    hobbies:["apples","toy","orange","kiwi"]
}
console.log(person);
console.log(typeof person);

// 8 Date
let currentDate=new Date();
console.log(currentDate);
// this variable stores a date data type
// it initializes the variable with the current date and time

//9. Big int

let lgNumber=1234567890123456234567890123456789012345678n;
// n is used to create a number to bigint literal



// OPERATORS
// 1.ARITHMETIC OPERATORS
let sum=10+5;
console.log(sum);

// 2.substraction
let difference=10-4;
console.log(difference);

// 3. Multiplication
let prod=10*5;
console.log(prod);

// 4 division
let quotient=15/4;
console.log(quotient);

// 5.Modulo operator(reminder)
let quotient3=15%4;
console.log(quotient3);

//6 Increment operator
let number=5;
//post increment
console.log(number++);
// pre increment
console.log(number);

// 7 decrement operator
let number2=5;
// post decrement
console.log(number2--);
console.log(number2)
// predcrement operatot
number2=5;
console.log(--number2); // means first we decrease the value and then we are printing that
console.log(number2);

// 8.exponential operator
let square=2**4;
console.log(square);

console.log(5+"5");//55 beacause while concenating number converts to strinf
console.log("5"+5);//55
console.log(5+(+"5"));//10


//9 unary plus operator
// unary plus operator will be imposed before a number string ,it converts the string to a number
let num=+"5";
console.log(num);
console.log(typeof num);//number

let num1=+"aakash";
console.log(num1);//NaN
console.log(typeof num1);//number


//10. unary negation
let num2=10;
let num3=-num2; // it changes the sign of the variable
console.log(num3);



//conditionals
// 1 if statement +//2 if else statement
let x=10;
if(x>15){
    console.log("come to if statement");
}
else{
    console.log("x is smaller then 15");
}
//3. if else if else statement
let score=85;
if(score>90){
    console.log("excellent");
}else if(score>=70){
    console.log("good");
}else{
    console.log("average");
}



// ternary operator
let isRaining=true;
// (condition)?"statement when true":"statement when false"
let weather=isRaining?"take an umbrella":"enjoy dhoop";

if(isRaining){
    weather="take an umbrella";
}else{
    weather="enjoy dhoop";
}
console.log(weather);


// 5 switch statement
let day=3;
let dyname;
switch(day){
    case 1:
        dyname="monday";
        break;
    case 2:
        dyname="tuesday";
        break;
    case 3:
        dyname="wednesday";
        break;
    case 4:
        dyname="thursday";
        break;
    default:
        dyname="unknown input";    

}
console.log(dyname);


// loops
// 1. for loop
for(let i=0;i<10;i++){
    console.log(i);
}
//5/2=2.5 in javaScript
//5/2=2 in java
//parseInt(5/2)=2 in javascript

//2.while loop
let aa=5;
while(aa>=0){
    console.log(aa);
    aa--;
}