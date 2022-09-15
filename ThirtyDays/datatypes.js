// check typeof
console.log(typeof "first"); //string
console.log(typeof true); // boolean
console.log(typeof 1); // number
console.log(typeof "a"); // string
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof ["sid","learner"]); //object
console.log(typeof {firstname:"sid", job:"developer"}); //object

//Declare four variables without assign value

let i;
var we;
let see;
var me;
console.log(i, we, see, me); // undefined undefined undefined undefined

// Declare variables in single line

let firstname="sid", lastname = "shaik", age=25, job="devloper", maritalstatus="single";
console.log(firstname, lastname,job,maritalstatus,age) //sid shaik devloper single 25

//print length of string,array,object
let arr = ["sid","learner"];
let obj = {firstname:"sid", job:"developer"}
console.log(job.length); // 8
console.log(arr.length); //2
console.log(obj.length); // undefined



