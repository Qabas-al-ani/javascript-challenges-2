// CHALLENGES ONE
// COUNTING LETTERS JAVASCRIPT

// function longestWord(str) {
//   let words = str.split(" ");
//   let longestWord = "";

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }
// const output = longestWord(
//   "Welcome to the 2U job board. Updated daily, we source these positions directly from hundreds of employer partners across a variety of industries. We work closely with partners to understand their hiring needs so we can best advocate for you, our 2U-powered program learners. If you have any questions, please contact"
// );
// console.log(output);

// CHALLENGE 2  MATH SEQUENCE
// SOLUTION

// function mathSequence(arr) {
//   let arith = new Set();
//   let geo = new Set();

//   for (let i = 1; i < arr.length; i++) {
//     let number1 = arr[i] - arr[i - 1];
//     arith.add(number1);
//     let number2 = arr[i] / arr[i - 1];
//     geo.add(number2);
//   }

//   if (arith.size === 1) {
//     return "Arithmetic";
//   }
//   if (geo.size === 1) {
//     return "Geometry";
//   }
//   return -1;
// }
// console.log(mathSequence([2, 4, 6, 8]));

////////////////
// challenge 3 Longest word
// SOLUTION

// function longestWord(str) {
//   let words = str.split(" ");
//   let size = 0;
//   let max = [""];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= size) {
//       size = words[i].length;

//       if (max[max.length - 1].length < words[i].length) {
//         max = [];
//         max.push(words[i]);
//       } else {
//         max = [...max, words[i]];
//       }
//     }
//   }

//   return [...max];
// }

// console.log(longestWord("we source these positions directly from hundreds"));

// CHALLENGE 3 CAPITALIZE FIRST LETTER
//  solution
// function capitalize(str) {
//   let newWord = str.toLowerCase().split(" ");

//   for (let i = 0; i < newWord.length; i++) {
//     newWord[i] =
//       newWord[i].substring(0, 1).toUpperCase() + newWord[i].substring(1);
//   }

//   return newWord.join(" ");
// }
// console.log(capitalize("wE source These poSitions directly from huNdreds"));

// Challenge 4
// return a unique value for str
// Solution

// function unique(str) {
//   for (var i = 0; i < str.length; i++) {
//     if (str.lastIndexOf(str[i]) !== i) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(unique("abcde"));

// challenge 5 Arr sum
//return arr sum value

// function ArrSum(arr) {
//   let temArr = arr.sort((a, b) => {
//     return a - b;
//   });

//   let largest = temArr.pop();
//   let number = 0;
//   temArr.forEach(item => (number += item));
//   return largest === number;
// }
// console.log(ArrSum([1, 6, 4, 2, 13]));

// Challenge 6 unique item using (Set())
// Solution

// function unique(str) {
//   // Solution one
//   //   let tempStr = new Set();

//   //   for (let letter of str) {
//   //     if (tempStr.has(letter)) {
//   //       return false;
//   //     }
//   //     tempStr.add(letter);
//   //   }
//   //   return true;

//   /////////////////////////
//   // Solution two
//   //   to check if there's duplicate

// //   return new Set(str).size === str.length;

// console.log(unique("abcdeaa"));
// }

///////////////////
// Challenge 7  (object property values)
// Solution 1
// let products = [
//   {
//     title: "Iphone8",
//     Company: "QmQ",
//   },
//   {
//     title: "Iphone1",
//     Company: "QQQ",
//   },
//   {
//     title: "Iphone4",
//     Company: "QmQ",
//   },
//   {
//     title: "Iphone8",
//     Company: "QQQ",
//   },
//   {
//     title: "Iphone8",
//     Company: "QmQ",
//   },
// ];
// function getUnique(arr) {
//   //   // if you want to find the company name
//   //   let tempArr = arr.map(item => item.Company);
//   //   //   if you want teh company not to be repeated over and over
//   //   return [...new Set(tempArr)];

//   ///////////
//   // Solution 2 (using reduce method)

//   return [
//     ...arr.reduce((acc, curr) => {
//       acc.add(curr.Company);
//       return acc;
//     }, new Set()),
//   ];
// }
// console.log(getUnique(products));

///////////////////////

// Challenge 8
// count letter in (javascript)

// //  reverse string
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("qabasa"));

//////////////////////
// function isPalindrome(str) {
//   let wordArr = str.split("").reverse().join("");
//   return wordArr === str;
// }
// console.log(isPalindrome("madam"));
////////////////
function reversInt(int) {
  let reversedInt = int.toString().split("").reverse().join("");

  return parseInt(reversedInt);
}
console.log(reversInt(12345));
