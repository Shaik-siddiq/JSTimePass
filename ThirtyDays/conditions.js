/* Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me. */

const Compare =(age1, age2)=>{
if(age1>age2){
    console.log(`Your ${age1-age2} older than me`)
}else{
    console.log(`your ${age2-age1} younger than me`)
}
}
Compare(27, 24) //Your 3 older than me
Compare(30, 35) //your 5 younger than me

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

const Even = (num)=>{
if(num%2 === 0){
    console.log(`${num} is even number`)
}else{
    console.log(`${num} is odd number`)
}
}

Even(2) //2 is even number
Even(7) //7 is odd number
Even(12) //12 is even number

/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
const Score =(score)=>{
    if(score >= 80 && score <= 100){
        console.log(`score is ${score} and got A grade`)
    }else if(score >=70 && score <= 89){
        console.log(`score is ${score} and got B grade`)
    }else if(score >=60 && score <= 69){
        console.log(`score is ${score} and got C grade`)
    }else if(score >=50 && score <= 59){
        console.log(`score is ${score} and got D grade`)
    }else{
        console.log(`socre is ${score} and got F grade`)
    }
}

Score(85)  //score is 85 and got A grade
Score(77) //score is 77 and got B grade
Score(63) //score is 63 and got C grade
Score(52) //score is 52 and got D grade
Score(41)  //socre is 41 and got F grade

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

const Season =(season)=>{
switch(season){
    case "Antumn":
       return console.log("September, October or November, the season is Autumn");
    case "Winter":
       return console.log("December, January or February, the season is Winter");
    case "Spring":
        return console.log("March, April or May, the season is Spring");       
    default:
        return console.log("June, July or August, the season is Summer")
}
}

Season("Antumn") //September, October or November, the season is Autumn
Season("Summer") //June, July or August, the season is Summer

//Check if a day is weekend day or a working day. Your script will take day as an input.
const Weekend = (day)=>{
    if(day.toLowerCase()==="sunday" || day.toLowerCase() ==="saturday"){
        console.log(`${day} is weekend`)
    }else{
        console.log(`${day} is working day`)
    }
}
Weekend("saturday") //saturday is weekend
Weekend("Firday") //Firday is working day
Weekend("SUNDAY") //SUNDAY is weekend
Weekend("SATURDAY") //SATURDAY is weekend

// Write a program which tells the number of days in a month.
const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
console.log(month.length)
const D = new Date()
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
const NumberofDaysinMonth =(days)=>{
       if(month[days] === "jan" || month[days] === "Mar" || month[days] ==="May" || month === "July" || month[days] === "Aug" || month[days] === "Oct" || month[days] === "Dec"){
       return console.log(`${month[days]} is 31 days`)
       }else if(month[days] === "Feb" && daysInMonth(2020, 2)){
         return console.log(`${month[days]} is 29 days leap year`)
       }else if(month[days] === "Feb" && daysInMonth(D.getFullYear, 2)){
           return console.log(`${month[days]} is 28 days leap year`) 
       }
       else{
        return console.log(`${month[days]} is 30 days`)
       }
} 
NumberofDaysinMonth(3) //Apr is 30 days
NumberofDaysinMonth(2) //Mar is 31 days
NumberofDaysinMonth(1) //Feb is 29 days leap year
NumberofDaysinMonth(0) //Jan is 30 days
