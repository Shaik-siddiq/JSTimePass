// string uppercase and lowercase
let str = " 30 Days Of JavaScript ";
console.log(str.toUpperCase()) //30 DAYS OF JAVASCRIPT
console.log(str.toLowerCase()) //30 days of javascript
console.log(str.toLocaleUpperCase()) //30 DAYS OF JAVASCRIPT
console.log(str.toLocaleLowerCase()) //30 days of javascript

//slice & substring the string
console.log(str.substring(0,3)) //30
console.log(str.substring(3)) // Days Of JavaScript
console.log(str.substring(3,19)) // Days Of JavaScri
console.log(str.slice(0,3)) // 30
console.log(str.slice(3)) // Days Of JavaScript
console.log(str.slice(3,22)) //Days Of JavaScript

//includes
console.log(str.includes("script")) // false
console.log(str.includes("Script")) //true (includes is caseSensitive)

//split the string
console.log(str.split()) //[ '30 Days Of JavaScript' ]
console.log(str.split(" ")) //[ '30', 'Days', 'Of', 'JavaScript' ]
console.log(str.split("")) /* [
    '3', '0', ' ', 'D', 'a',
    'y', 's', ' ', 'O', 'f',
    ' ', 'J', 'a', 'v', 'a',
    'S', 'c', 'r', 'i', 'p',
    't'
  ] */

  // replace
  console.log(str.replace("JavaScript","Python")) //30 Days Of Python

  //charAt()
console.log(str.charAt(15)) //S
console.log(str.charAt(20)) //t

//charCodeAt()
console.log(str.charCodeAt("a")) //51
console.log(str.charCodeAt(11)) //74

//indexOf
console.log(str.indexOf("a")) //4
console.log(str.indexOf("J")) //11

//last indexOf
const because = 'You cannot end a sentence with because because because is a conjunction';
console.log(because.lastIndexOf("first"+'because'))// -1
console.log(because.lastIndexOf('because')) //47

console.log(because.search("because")) //31

//trim
console.log(str) // here in console the spaces are also visible  30 Days Of JavaScript
console.log(str.trim()) //trims at first and end of string 30 Days Of JavaScript

//startwith
console.log(str.startsWith("Days")) //false
console.log(str.startsWith("30")) //false
console.log(str.startsWith(" ")) //true as the string startswith blank space

//endsWith
console.log(str.endsWith("JavaScript")) //false
console.log(str.endsWith(" ")) //true as the string endsWith blank space

//match
console.log(str.match("a")) //[ 'a', index: 5, input: ' 30 Days Of JavaScript ', groups: undefined ]
const pattern = /a/gi
console.log(str.match(pattern)) //[ 'a', 'a', 'a' ]
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/g //d means for digits and g means global
console.log(txt.match(regEx)) //[ '2019', '30', '2020' ]

//concat
console.log(str.concat(because)) // 30 Days Of JavaScript You cannot end a sentence with because because because is a conjunction
console.log(str.concat(txt)) // 30 Days Of JavaScript In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge

//repeat
console.log(str.repeat(3)) // 30 Days Of JavaScript  30 Days Of JavaScript  30 Days Of JavaScript

//string to number
let ne = "10"
let nm = parseInt(ne)
console.log(ne) //"10"
console.log(Number(ne)) //10
console.log(nm) //10
console.log(+ne) //10

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10')===10) //false
const ns = "10"
if(typeof(ns)!==10){
 const num = parseInt(ns)
  console.log(num===10)  //true
}else{
  console.log(ns)
}

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const fl = '9.8'
if(fl!==10){
  const fl1 = +fl
  const fl2 =Math.round(fl1)
  console.log(fl2===10) //true
}else{
  console.log(fl)
}

// Check if 'on' is found in both python and jargon
const py = "python";
const ja = "jargon";
const reg = /on/gi
console.log(py.match(reg), ja.match(reg)) //['on'] ['on']
if(py.match(reg) && ja.match(reg) == 'on'){
  console.log("on is found in both python and jargon")  //on is found in both python and jargon
}

// I hope this course is not full of jargon. Check if jargon is in the sentence.
const jar = "I hope this course is not full of jargon"
console.log(jar.search("jargon")) //34
console.log(jar.match("jargon")) //['jargon', index: 34, input: 'I hope this course is not full of jargon',groups: undefined]
console.log(jar.match(/jargon/g)) //[ 'jargon' ]

// Generate a random number between 0 and 100 inclusively.
const randomnumber =(min,max)=>Math.floor(Math.random() * ((max - min) +1) + min)
console.log(randomnumber(0,100)) // numbers changes from 0 to 100 randomly
//Generate a random number between 50 and 100 inclusively.
console.log(randomnumber(50,100)) 
// Generate a random number between 0 and 255 inclusively.
console.log(randomnumber(0,225))

// Access the 'JavaScript' string characters using a random number.
const character = "JavaScript"
function randomString (length){
  const charlength = character.length
  let randomstring = ""
  for(i=0;i<length;i++){
   randomstring += character.charAt(Math.floor(Math.random() * charlength))
  }
  return console.log(randomstring)
}
randomString(20) //SriacSpvctSvirpaaraa this is the example of random string

/* Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */
const str3 = `
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
`
console.log(" 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125")   //the above comented output we get here by using \n escape charecter 
console.log(str3) //by using template literal also we can print in new line

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf("because")) //31
const sentence2 = sentence.substring(31,54)
console.log(sentence2) //because because because
console.log(sentence)

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

const sentence3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const pattern1 = /love/gi
console.log(sentence3.match(pattern1).length) //3
console.log(sentence.match(/because/gi).length) //3

/* Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
 */
const senti = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple.
 ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!?
  %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`
const senti2 = senti.replace(/[^a-zA-Z0-9]/g,' ');

console.log(senti2)

const findmostfrequentword = (str)=>{
let words = str.match(/\w+/g); //spliting the sentence
let occurances = {}
for(let word of words){
  if(occurances[word]){
    occurances[word]++
  }else{
    occurances[word]=1
  }
}
let max = 0;
let mostrepeatedword = "";
for(let word of words){
  if(occurances[word] > max){
    max = occurances[word];
    mostrepeatedword = word
  }
}
return mostrepeatedword
}

console.log(findmostfrequentword(senti2)) //tea

/*Calculate the total annual income of the person by extracting the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' */

let salary = 5000;
let annualBonus = 10000;
let onlineMonth=15000;
let annalIncome =salary*12 + onlineMonth*12 + annualBonus ;
console.log(annalIncome) //250000



