// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// function add(num) {
//   return num + 3;
// }
// var addedNum = numbers.map(add);
// console.log(addedNum);
// //Filter - Create a new array by keeping the items that return true.

// function greater(num) {
//   return num > 10; // return numbers greater than 10
// }
// var greaterNum = numbers.filter(greater);
// console.log(greaterNum);

// //Reduce - Accumulate a value by doing something to each item in an array.
// var totalNum = numbers.reduce(function (accumulator, currentNumber) {
//   console.log(`The accumulator is : ${accumulator}`);
//   console.log(`The currentNumber is :${currentNumber}`);
//   return accumulator + currentNumber;
// });
// console.log(`The total is : ${totalNum}`);

// //Find - find the first item that matches from an array.
// var firstNum = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(firstNum);
// //FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

// function getMeaning(emojiObject) {
//   return emojiObject.meaning;
// }
// var meanings = emojipedia.map(getMeaning);
// console.log(meanings);

// get with id
// var meaning1 = emojipedia.find(function (emojiObject) {
//   if (emojiObject.id == 1) {
//     return emojiObject.meaning;
//   }
// });

// var meaning2 = emojipedia.find(function (emojiObject) {
//   if (emojiObject.id == 2) {
//     return emojiObject.meaning;
//   }
// });
// var meaning3 = emojipedia.find(function (emojiObject) {
//   if (emojiObject.id == 3) {
//     return emojiObject.meaning;
//   }
// });

// console.log(meaning1.meaning.substring(1, 100));
// console.log(meaning2.meaning.substring(1, 100));
// console.log(meaning3.meaning.substring(1, 100));

// sorter way
//! creating the array
var noIds = 3; // how many elements i want in my id
var ids = Array.from({ length: noIds }, (value, index) => index + 1); // create the array
var meanings = ids.map((id) => {
  const emojiObject = emojipedia.find((obj) => obj.id === id);
  return emojiObject ? emojiObject.meaning.substring(1, 100) + "..." : null;
});

console.log(meanings);
