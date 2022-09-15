/* A volume of a rectangular prism is calculated as follows:
 volume = length x width x height. Write a function which calculates volumeOfRectPrism. */

 const volumeOfRectPrism = (a,b,c)=>{
    const volume = a * b * c
    console.log(volume)
 }
 volumeOfRectPrism(32,45,62)

/*  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
 Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
 Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

const BMIcalculator = (age,height,weight)=>{
    const BMI = weight/(height*height);
    if(BMI < 18.5 && age >= 20 ){
        console.log(`Underweight: BMI is less than 18.5 and the BMI is ${BMI}`)
    }
    else if( BMI > 18.5 && BMI <= 24.5 && age >= 20){
        console.log(`Normal weight: BMI is 18.5 to 24.9 and the BMI is ${BMI}`)
    }
    else if(BMI >= 25 && BMI <= 29.9 && age>= 20){
          console.log(`Overweight: BMI is 25 to 29.9 and the BMI is ${BMI}`)
    }else{
        console.log(`Obese: BMI is 30 or more and the BMI is ${BMI} `)
    }
}

BMIcalculator(27, 1.6, 76)

/* Math.max returns its largest argument. Write a function findMax that 
takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0 */

const findMax = (min, max, eq)=>{
  console.log(Math.max(min, max, eq))
}
findMax(200,500,-1000)

/* Write a function called checkSeason,
 it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer. */

 const checkSeason = (season)=>{
    switch(season){
        case 'autumn':
            return console.log(`it is ${season}`)
        case 'winter':
            return console.log(`it is ${season}`)
        case 'spring':
            return console.log(`it is ${season}`)
        case 'summer':
            return console.log(`it is ${season}`)
        case 'rainny':
            return console.log(`it is ${season}`)
        default:
            return console.log("there is no such season")
    }
 }

 checkSeason('spring')
 checkSeason('noseason')

/*  Linear equation is calculated as follows: ax + by + c = 0. Write a 
 function which calculates value of a linear equation, solveLinEquation. */

 function solveLinEquation (a,b,c){
    let y= ""
    for(let i = 0; i<=c; i++){
        if((c-(i*a))%b == 0){
            y= (c-(i*a))/b
            return console.log(`x=${i}, y=${y}`)
        }else{
            return console.log('no solution find')
        }
    }
 }

 solveLinEquation(4,2,8)
 solveLinEquation(20,22,50)

 /* Quadratic equation is calculated as follows: ax2 + bx + c = 0.
  Write a function which calculates value or values of a quadratic equation, solveQuadEquation. */

  const solveQuadEquation = (a,b,c)=>{
    let discriminant = b * b - 4 * a * c;
    let root1, root2
    if(discriminant >0 ){
        root1 = (-b + Math.sqrt(discriminant))/(2*a)
        root2 = (-b - Math.sqrt(discriminant))/(2*a)
        console.log(`The roots of quaratic equation are ${root1} and ${root2}`);
    }else if(discriminant == 0){
        root1 = root2 = -b /(2 * a);
        console.log(`The roots of quaratic equation are ${root1} and ${root2}`);
    }else{
        let realPart = (-b/(2*a)).toFixed(2);
        let imagePart = (Math.sqrt(-discriminant)/(2*a)).toFixed(2)
        console.log(`The roots of quadratic equation are ${realPart} + ${imagePart}i and ${realPart} - ${imagePart}i`)
    }
  }

  solveQuadEquation(1,4,4);

//   Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = ()=>{
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let hrs = date.getHours()
    let min = date.getMinutes()

  return  console.log(`${day}/${month}/${year} ${hrs}:${min}`)
}

showDateTime()

// Declare a function name swapValues. This function swaps value of x to y.

const swapValues = (a,b)=>{
    let temp = a;
    a= b;
    b=temp
    console.log(a,b)
}

swapValues(3,8)