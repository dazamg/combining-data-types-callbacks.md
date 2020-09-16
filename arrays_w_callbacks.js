//Callbacks

  //1. ADDITION
  //Make a function add that takes two arguments 
  //(numbers) and sums them together

  let add = (num, num1) => {
    return num + num1
} 
console.log(add(3,4))

//2. Subtraction
//Make a function subtract that takes two arguments 
//(numbers) and subtracts them

let subtract = (num, num1) => {
  return num - num1
} 
console.log(subtract(6, 4))

//3.

//Make a function multiply that takes two arguments and multiplies them

let multiply = (num, num1) => {
  return num * num1
} 
console.log(multiply(6, 4))

//4.

//Make a function divide that takes two arguments and divides them

let divide = (num, num1) => {
return num / num1
} 
console.log(divide(8, 4))

//5/6.

//Make a function calculate that takes three arguments.
//Assume the two arguments are a number ie num1, num2 and 
//a function called operates (a callback).
// Make it so that when calculate is invoked, 
//the callback "operates" on the numbers and returns the value.


let calculate = (operates,num, num1) => {
return operates(num,num1)
} 

let operates = (num,num1) => {
return num + num1
}

calculate(operates,5,6)

//6.
//Call calculate 4 times, each time using one of the 
//operation functions you wrote

let calculate = (operates,num, num1) => {
return operates(num,num1)
add()
multiply()
subtract()
divide()
} 
let operates = (num,num1) => {
return num + num1
}

calculate(operates,5,6)
calculate(add,5,6)
calculate(multiply,5,6)
calculate(subtract,5,6)
calculate(divide,12,6)


//Function definition placement

const bar = () => {
console.log('bar here');
}
bar()

const foo = () => {
console.log('foo here');
}
foo()

//ERROR READING
// foo()
// const foo ()=>{
//   console.log('hi');
// }

const foo = ()=>{
  console.log('hi');
}
foo()

//Code is executed from top to bottom or the way 
//codes is hoisted is it reads
//that function or variable and stores it. 
//When that function is invoke then it execute that code
//Function is not declared or written wrong(const foo = () => {})


//Section 3 Array Methods with Callbacks

//Section 3 Array Methods with Callbacks

//Two arrays to work with

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']



//1. EVERY

//Determine if every number is greater than or equal to 0

const greaterEqual0 = nums.every(function(num) {
return num => 0;
});
console.log(greaterEqual0)

//determine if every word shorter than 8 characters

const det = panagram.every(function(word){
return word.length < 8;
});
console.log(det)


//2.Filter

//filter the array for numbers less than 4


const less4 = (num) => {
return (num < 4)
}
can = nums.filter(less4);
console.log(can)

//filter words that have an even length

const evenWord = (word) => {
return (word.length % 2 == 0)
}
pan = panagram.filter(evenWord);
console.log(pan)


//3.FIND

//Find the first value divisible by 5

const run = (num) => {
return (num % 5 == 0);
}
let result = nums.find(run);
console.log(result)

//.find the first word that is longer than 5 characters
const firstWord = (word) => {
if (word.length > 5) {
  console.log(word)
} else {
  console.log("No word is longer than 5 characters")
}

}
nan = panagram.find(firstWord);
console.log(nan)


//4.FIND INDEX

//.find the index of the first number that is divisible by 3

const ben = (num) => {
return (num % 3 == 0);
}
let result1 = nums.findIndex(ben);
console.log(result1)


//find the index of the first word that is less than 2 characters long
const wordIndex = (word) => {
if (word.length < 2)  {
  console.log(word)
} else {
  console.log("No word have less than 2 characters")
}
}
big = panagram.findIndex(wordIndex);
console.log(big)

//5. FOREACH

//.console.log each value of the nums array multiplied by 3

// this way gave me the answer but with duplicate values
// for(let i = 0; i < nums.length; i++) {
//   console.log(nums[i] * 3)
// }
// nums.forEach(function(ti) {
//   console.log(ti)
// })
// It's not the new way but i was able to find the solution
const right = []
for(let i = 0; i < nums.length; i++) {
right.push(nums[i] * 3)
}
console.log(right)


//console.log each word with an exclamation point at the end of it

for(let i = 0; i < panagram.length; i++) {
  console.log(panagram[i] + "!")
}

panagram.forEach(function(panagram) {
})



//6. MAP

//make a new array of each number multiplied by 100

//   const upper = [];
// for (let i = 0; i < panagram.length; i++) {
//   cased.push(panagram[i].toUpperCase());
// }
// console.log(upper);

const upper = panagram.map((person) => {
return person.toUpperCase();
});
console.log(upper);


//make a new array of all the words in all uppercase

// const downer = nums.map((num) => {
//    console.log(num * 100)
// });
// console.log(downer);

// It's not the new way but i was able to find the solution
const downer = [];
for (let i = 0; i < nums.length; i++) {
downer.push(nums[i] * 100);
}
console.log(downer);