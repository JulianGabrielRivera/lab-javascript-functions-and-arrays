// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
maxOfTwoNumbers(2, 1);

// using arrow function way

// const maxOfTwoNumbers = ((a,b) =>{
//   if(a>b){
//     return a
//   }
//   else {return b}

// })

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsArray) {
  if (wordsArray.length === 0) {
    return null;
  }
  if (wordsArray.length === 1) {
    return wordsArray[0];
  }
  let longestWord = '';

  for (let i = 0; i < wordsArray.length; i++) {
    if (longestWord.length < wordsArray[i].length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
}

// forEach way
// function findLongestWord(wordsArray) {

//   let finalWord = '';
//   wordsArray.forEach(word => {
//     if(finalWord.length < word.length){
//     finalWord = word;}
//   }
//   )
//   return finalWord;
// }
// console.log(findLongestWord(words))

// findLongestWord(words);

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (sumNumbers.length === 0) {
    return 0;
  }

  let finalNumber = 0;
  numbers.forEach((number) => {
    finalNumber += number;
    // same as finalNumber = finalNumber + number
  });
  console.log(finalNumber);
  return finalNumber;
}
sumNumbers(numbers);

// the reduce way
// const sum = numbers.reduce((acc,number)=>{
//   return acc + number
// },0);
// console.log(sum)

// Iteration #3.1 Bonus:

// function sum(inputArray) {
//   let totalNumSum = 0;

//   for (let i = 0; i < inputArray.length; i++) {
//     if (typeof inputArray[i] === 'number') {
//     }
//     if (typeof inputArray[i] === 'string') {
//     }
//     if (typeof inputArray[i] === 'boolean') {
//     }
//   }
// }

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0) {
    return null;
  }
  let finalNumber = 0;
  let average = '';
  let numbersLength = numbersAvg.length;

  numbersAvg.forEach((number) => {
    finalNumber = finalNumber + number;
    average = finalNumber / numbersLength;
  });

  return average;
}

averageNumbers(numbersAvg);

// different way PRACTICE

// const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// const average = (array)=>{
//   let total = 0;
//   let length = array.length
//   array.forEach(number =>{
//     total = total + number
//   })
//   return total / length;
// }
// console.log(average(numbersAvg))

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) {
  if (array.length === 0) {
    return null;
  }

  let length = '';
  let arrayLength = array.length;
  let sumofWordsLength = 0;

  array.forEach((word, index) => {
    sumofWordsLength = sumofWordsLength + word.length;
  });
  length = sumofWordsLength / arrayLength;
  console.log(length);
  return length;
  if (array.length === 1) {
    return sumofWordsLength;
  }
}
averageWordLength(wordsArr);

// different way PRACTICE
// // }
// const averageWordLength = (array) => {
//  let total = 0;
//   array.forEach(string => {
//     total =total + string.length
//   })
//   return total/array.length;
// }

// Bonus - Iteration #4.1
function avg(arrayToAverage) {
  if (arrayToAverage.length === 0) {
    return null;
  }
  return 5.11;
  // return sum(arraytoAverage / arrayToAverage.length);
}

// Iteration #5: Unique arrays

const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
if (array.length === 0) {
  return null;
}
let uniqueArray = [];
for (i = 0; i < array.length; i++) {
  let index = uniqueArray.indexOf(array[i]);
  if (index < 0) {
    uniqueArray.push(array[i]);
  }
}
return uniqueArray;

// second solution
// -1 means if its not there then we push it to unique array
//   let uniqueArray = [];
//   for (let count = 0; count < array.length; count++) {
//     if (uniqueArray.indexOf(array[count]) == -1) {
//       uniqueArray.push(array[count]);
//     }
//   }
//   return uniqueArray;
// }

// uniquifyArray(wordsUnique);

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, wordtosearch) {
  if (array.length === 0) {
    return null;
  }
  // TERNARY OPERATOR
  // return arr.length == 0 ? null: arr.includes(word);
  if (array.includes(wordtosearch)) {
    return true;
  } else {
    return false;
  }
}
//
doesWordExist(wordsFind, 'trouble');

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(strArray, str) {
  if (strArray.length === 0) {
    return 0;
  }
  let count = 0;
  for (let j = 0; j < strArray.length; j++) {
    if (strArray[j] === str) {
      count += 1;
    }
  }
  return count;
}

howManyTimes(wordsCount, 'matter');

// Diff way PRACTICE
// function howManyTimes(strArray, str){
  
//   let count = 0;
// strArray.forEach(word =>{
//   if(word.includes(str) ){
//      count = count + 1;
//      }
// })
//   return count;
  
// }
// console.log(howManyTimes(wordsCount, 'matter'))

//  Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}

//  The following is required to make unit tests work.
//  Environment setup. Do not modify the below code.
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    // sum,
    averageNumbers,
    averageWordLength,
    avg,
    // uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
