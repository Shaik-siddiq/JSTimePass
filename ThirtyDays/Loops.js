// Iterate 0 to 10 using for loop, do the same using while and do while loop
/* for(let i = 0; i<=10; i++){
    console.log(i); // 0 1 2 3 4 5 6 7 8 9 10
}
let s = 0;
while(s<=10){
    console.log(s); // 0 1 2 3 4 5 6 7 8 9 10
    s++
} */

//do while
/* do{
    console.log(s)
    s++
}
while(s<=10)  *///  0 1 2 3 4 5 6 7 8 9 10

// Iterate 10 to 0 using for loop, do the same using while and do while loop

/* for(let i = 10; i>=0; i--){
    console.log(i) //10 9 8 7 6 5 4 3 2 1 0
}
 */
/* Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    ####### */

    let n = 5;
    let str = "";
    for(let m = 1; m<=n; m++){
        for(let j = 0; j<m; j++ ){
            str += "#";
        }
        str += "\n";
    }
    console.log(str);

/*   Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */
for(a=0; a<=10; a++){
 let mul = a * a
console.log(`${a} X ${a} = ${mul}`)
}

/* Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */
 console.log("i i^2 i^3")
for(c=0; c<=10; c++){
    let d = c*c
    let e = c*c*c
    console.log(` ${c} ${d} ${e}`)
}

// Use while loop to iterate from 0 to 100 and print only even numbers
let f = 0;
while(f<=100){
    if(f%2 === 0){
        console.log(f)
    }
    f++
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(g=0; g<=100; g++){
    if(g%2 === 1){
        console.log(g)
    }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
for(let h = 0; h<=100; h++){
    let flag = 0;
    for(let j=2; j<=h; j++){
        if(h%j === 0){
            flag= 1
            break;
        }
    }
    if(h> 1 && flag == 0){
        console.log(h)
    }
}

/* Use for loop to iterate from 0 to 100 and print the sum of all numbers.

The sum of all numbers from 0 to 100 is 5050. */
let prevnum = 0
for(let n=0; n<=1000; n++){
prevnum = prevnum + n
if(prevnum === 5050){
    console.log(` the expected number:${prevnum}`)
}
}

/* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500. */
let eves = 0;
let odds = 0;
for(let m=0; m<=100; m++){ 
    if(m % 2 === 0){
        eves = eves + m
        console.log(eves+ "this is even")
        eves == 2550 ? console.log(` the expected number:${eves}`) : "" //the expected number:2500
    }else{
        odds = odds + m
        console.log(odds+ " this is odd")
       odds == 2500? console.log(` the expected number:${odds}`): null // the expected number:2550
    }
}

/* Develop a small script which generate array of 5 random numbers and the numbers must be unique */

let p = [];
for(let i=1; i<=10; i++){
        q = Math.floor(Math.random() * 10) + i
       p.push(q)
       console.log([...p]) //[3,  8,  5,  9,  7, 15, 10, 16, 18, 15] spread operator eliminates duplicate array
}

/* Develop a small script which generate a six characters random id: */

const makeid = ()=>{
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i<=5; i++){
        text += possible.charAt(Math.floor(Math.random() *possible.length))
    }
    return text;
}
console.log(makeid())//tp76GQ  another time run  this is another id: qbnYsj


/* Write a script which generates a random hexadecimal number.
'#ee33df' */

const hexadecimal = num =>{
    let j= num.toString(16)
   return "#" + j
}

console.log(hexadecimal(15)) //#f
console.log(hexadecimal(90)) //#5a

const genRanHex = size => [...Array(size)].map(()=> Math.floor(Math.random() * 16).toString(16)).join("")
console.log("#" + genRanHex(15)) //#e3a12cccb16ef22 another time run  this is another id: #f99e59bcdf305cf


// Write a script which generates a random rgb color number.
const RandomRgbColor = ()=>{
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z =  Math.floor(Math.random() * 256);
    console.log(`rgb(${x}, ${y}, ${z})`)

}
RandomRgbColor()


/* ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
Using the above countries array, create an array for countries length'. */

const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA",'ICELAND'];

const countrieslength = () =>{
    const res = countries.map(counlenght => counlenght.length)
    return res
}
console.log(countrieslength()) //[ 7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Find the country containing the hightest number of characters in the countries array
const largestnumber = largest=>{
    return largest.reduce((acc, conv)=>{
        return acc.length>conv.length? acc: conv
    },"")
   }

console.log(largestnumber(countries))
/* Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

const countriesjson = ()=>{
    const args = countries.map(country=>{
        let result =  country.slice(0,3)
         return [country.toLowerCase(), result, country.length]
    })
    return args
     }
console.log(countriesjson());

/* In above countries array, check if there is a country or countries containing the word 'land'.
 If there are countries containing 'land', print it as array. If there is no country
 containing the word 'land', print 'All these countries are without land'. */

 const landcontains = ()=>{
    let land = countries.filter(country => country.includes("LAND"))
    return land
 }
 console.log(landcontains())

 /* Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ] */

  const fullStack = [ ['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']];
console.log(fullStack.toString());