//  Use the Date object to do the following activities

// What is the year today?
const D = new Date()
console.log(D.getFullYear()) //2022

// What is the month today as a number?
const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
console.log(D.getMonth()+1) //Displays the numerical month – the +1 converts the month from digital (0-11) to normal. output is 4
console.log(months[D.getMonth()]) // for Arrays there is no need of adding +1 as the array starts index from 0 // output is Apr

// What is the date today?
console.log(D.getDate()) //11

// What is the day today as a number?
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(D.getDay())//1
console.log(weekdays[D.getDay()]) //Monday

// What is the hours now?
console.log(D.getHours()) //11
// What is the minutes now?
console.log(D.getMinutes()) //53
// Find out the numbers of seconds elapsed from January 1, 1970 to now. 
console.log(D.getTime()/1000) //1649658395.417

/* Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100 */

// const base = prompt("Enter base value here:");
// const height = prompt("Enter height value here:");
// alert(0.5*base*height); //100 it will be done only in chrome inspect here in terminal it will throw an Refernce Error as promt is not defined;

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// const sideA =prompt("entre value A:")
// const sideB = prompt("entre value B:")
// const sideC = prompt("entre value C:")
// const result = parseInt(sideA)+parseInt(sideB)+parseInt(sideC)
// console.log(`perimeter = ${result}`) //perimeter = 12

/* Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. */

// let dob = new Date("07/21/2003")
// let dob = new Date("07/21/2007")
let dob = new Date("07/21/1995")
// let dob =new Date(propmt("enter the date of birth:"))

let monthDiff = Date.now() - dob.getTime()

let ageDt = new Date(monthDiff)

let year = ageDt.getUTCFullYear();

let age = Math.abs(year - 1970)
console.log(age)
if(age >= 18){
    console.log((` you are ${age} you can drive now`))
}else{
    console.log((`you have still ${18-age} years`))
}


/* Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds. */

console.log(`you lived ${dob.getTime()/1000} seconds`); //you lived 806265000 seconds

/* Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */

const yy = D.getFullYear()
const mon = months[D.getMonth()]
const dd = D.getDate()
const hh = D.getHours()
const mm = D.getMinutes()

console.log(`${yy}-${mon}-${dd} ${hh}:${mm}`) //2022-Apr-15 15:15
console.log(`${dd}-${mon}-${yy} ${hh}:${mm}`) //15-Apr-2022 15:15
console.log(`${dd}/${mon}/${yy} ${hh}:${mm}`) //15/Apr/2022 15:15

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
const time = () => {
    const yy = D.getFullYear()
    const mon = months[D.getMonth()]
    const dd = D.getDate()
    const hh = D.getHours()
    const mm = D.getMinutes()
    console.log(`${yy}-${mon}-${dd} ${hh}:${mm}`)
    }
setInterval(time, 1000); // for every second time gets updated and gets screening
setTimeout(time, 1000); // after onesecond the time gets on screen and screening stops

