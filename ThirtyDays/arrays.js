/* First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length) */

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = text.split(" ")
console.log(words)
console.log(words.length)

/* In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart.unshift('Meat'))
console.log(shoppingCart.pop())
console.log(shoppingCart.push('Sugar'))
console.log(shoppingCart) //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]
console.log(shoppingCart)


// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
const sorting = ages.sort((a,b)=>a-b);
console.log(sorting) //[ 19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
console.log(Math.min(...sorting)) //19
console.log(Math.max(...sorting)) //26
// Find the median age(one middle item or two middle items divided by two)
const median = arr =>{
const mid = Math.floor(arr.length/2);
return arr.length %2 !==0? sorting[mid]:(sorting[mid-1]+sorting[mid])/2
}
console.log(median([...sorting])) //24
// Find the average age(all items divided by number of items)

// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array