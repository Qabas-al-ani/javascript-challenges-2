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
// function reversInt(int) {
//   let reversedInt = int.toString().split("").reverse().join("");

//   return parseInt(reversedInt);
// }
// console.log(reversInt(12345));
// //////////////
// function capitalizeLetter(str) {
//   let strArr = str.toLowerCase().split(" ");

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   }
//   return strArr.join(" ");
// }

// console.log(capitalizeLetter("qaBas al aNI"));
/////////////////////
// function fizzBuzz() {
//   for (let i = 1; i < 100; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
//   return fizzBuzz;
// }
// console.log(fizzBuzz(100));
///////////////////////
// function maxChars(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxCharacter = "";

//   str.split("").forEach(char => {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });
//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxCharacter = char;
//     }
//   }
//   return maxCharacter;
// }
// console.log(maxChars("qabas"));
////////////////////////////
// function longestWord(sen) {
//   // to take off comas
//   const longest = sen.toLowerCase().match(/[a-z0-9]+/g);
//   // to sort the array
//   const sorted = longest.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   // if multiple words
//   const sortedWords = sorted.filter(word => {
//     return word.length === sorted[0].length;
//   });

//   if (sortedWords.length === 1) {
//     return sortedWords[0];
//   } else {
//     return sortedWords;
//   }
// }
// console.log(longestWord("my Name is, Qabas"));
////////////////////////

// function chunkArray(arr, len) {
//   // init the chunked arr
//   const chunkedArray = [];
//   // set index
//   let i = 0;
//   // loop while i is less than array length
//   while (i < arr.length) {
//     chunkedArray.push(arr.slice(i, i + len));
//     i += len;
//   }
//   return chunkedArray;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
// /////////////////////////
// function isAnagram(str1, str2) {
//   return formatString(str1) === formatString(str2);
// }

// // helper function
// function formatString(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }
// console.log(isAnagram("elbow", "below"));
////////////////////////
// solution
// function letterChanges(str) {
//   let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char) {
//     if (char === "z" || char === "Z") {
//       return "a";
//     } else {
//       return String.fromCharCode(char.charCodeAt() + 1);
//     }
//   });
//   newStr = newStr.replace(/[a|e|i|o|u]/gi, function (vowel) {
//     return vowel.toUpperCase();
//   });
//   return newStr;
// }
// console.log(letterChanges("Hello There"));
////////////////////////////////
// function addAll(...numbers) {
//   return numbers.reduce((acc, cur) => acc + cur);
// }
// console.log(addAll(1, 2, 3));
/////////////////////
// function allPrimes(numbers) {
//   let total = 0;

//   function isPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= numbers; i++) {
//     if (isPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(allPrimes(100));
////////////////////
// find duplicate
// function findDuplicates(num) {
//   numberArr = new Set();
// }
// console.log();
////////////////////////////////////////////////
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello qabas"));
///////////////////////////////////////////////

// function isPalindrome(str) {
//   let newWordArray = str.split("").reverse().join("");
//   return newWordArray === str;
// }
// console.log(isPalindrome("madams"));
//////////////////////
// function reversedInt(int) {
//   let newNum = int.toString().split("").reverse().join("");
//   return parseInt(newNum) * Math.sign(int);
// }
// console.log(reversedInt(-12345));
///////////////////////////////////////////////
// (Counting objects: 100% (5/5), done)
// function capitalizeLetters(str) {
// let wordArr = str.toLowerCase().split(" ");

// for (let i = 0; i < wordArr.length; i++) {
//   wordArr[i] =
//     wordArr[i].substring(0, 1).toUpperCase() + wordArr[i].substring(1);
// }
// return wordArr.join(" ");

///////////////////
// solution 2
//   return str.toLowerCase().replace(/\b[a-z]/gi, function (letter) {
//     return letter.toUpperCase();
//   });
// }
// console.log(capitalizeLetters("qaBas aL aNI"));
////////////////////////////////
// function maxCharacter(str) {
//   let charMap = {};
//   let maxNum = 0;
//   let maxChar = "";

//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       return charMap[char]++;
//     } else {
//       return (charMap[char] = 1);
//     }
//   });
//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }
// console.log(maxCharacter("qabas"));

///////////////////////////////////
// function fizzBuzz() {
//   for (let i = 1; i < 100; i++) {
//     if (i % 15 === 0) {
//       console.log("Fizz Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// console.log(fizzBuzz(100));
//////////////////////////////////
// function longestWord(sen) {
//   //  filter the sen match
//   let senArray = sen.toLowerCase().match(/[a-z0-9]+/g);
//   // sort by length
//   const sorted = senArray.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   // if multiple words
//   const longestWordArray = sorted.filter(function (word) {
//     return word.length === sorted[0].length;
//   });
//   return longestWordArray;
// }
// console.log(longestWord("Qabas, al ani"));
////////////////////////
function chunkedArray(arr, len) {
  return arr;
}
