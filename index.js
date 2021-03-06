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
// function chunkedArray(arr, len) {
//   const chunk = [];
//   i = 0;
//   while (i < arr.length) {
//     chunk.push(arr.slice(i, i + len));
//     i += len;
//   }
//   return chunk;
// }
// console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
////////////////////
// function flattenArray(arrays) {
//   return arrays.reduce(function (a, b) {
//     return a.concat(b);
//   });
// }
// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
/////////////////////
// function isAnagram(str1, str2) {
//   return formatString(str1) === formatString(str2);

//   // helper function
//   function formatString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
//   }
// }
// console.log(isAnagram("below", "elbow"));
//////////////////
// function letterChanges(str) {
//   let newStr = str.replace(/[a-z]/gi, function (char) {
//     if (char === "z" || char === "Z") {
//       return "A";
//     } else {
//       return String.fromCharCode(char.charCodeAt() + 1);
//     }
//   });
//   newStr = newStr.replace(/a|e|o|u|i/gi, function (vowel) {
//     return vowel.toUpperCase();
//   });
//   return newStr;
// }
// console.log(letterChanges("Hello there"));
/////////////////////
// function addAll(...numbers) {
//   // var args = Array.prototype.slice.call(arguments);
//   // var total = 0;
//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }
//   // return total;
//   //////////////////////////
//   return numbers.reduce((acc, cur) => acc + cur);
// }
// console.log(addAll(1, 2, 3));
////////////////////////////
// function allPrimes(num) {
//   total = 0;

//   function isPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(allPrimes(10));
//////////////////////
// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);

//   function filterArray(arr) {
//     return args.indexOf(arr) === -1;
//   }
//   return arr.filter(filterArray);
// }
// console.log(seekAndDestroy([1, 2, 3, 4, 5, 6, "hello"], 1, 2, 6));
////////////////
// function reversedString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reversedString("hello"));
//////////////
// function isPalindrome(str) {
//   let newWordArray = str.split("").reverse().join("");
//   return newWordArray === str;
// }
// console.log(isPalindrome("madams"));
////////////////////
// function reversedInt(int) {
//   let newInt = int.toString().split("").reverse().join("");
//   return parseInt(newInt);
// }
// console.log(reversedInt(712));
//////////////////////
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
////////////////////////
// function longestWordArray(sen) {
//   // clean the array
//   let cleanArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//   // sort the array
//   let sorted = cleanArr.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   // if multiple words put into an array
//   let oneWordArray = sorted.filter(function (word) {
//     return word.length === sorted[0].length;
//   });

//   // if more than one value
//   if (oneWordArray.length === 1) {
//     return oneWordArray[0];
//   } else {
//     return oneWordArray;
//   }
// }
// console.log(longestWordArray("Helloo, My name is Qabas"));
//////////////////
// function chunkedArray(arr, len) {
//   // init chunked array
//   let chunked = [];
//   // set index
//   let i = 0;
//   // loop through while the i is less than the length of the array
//   while (i < arr.length) {
//     chunked.push(arr.slice(i, i + len));
//     i += len;
//   }
//   return chunked;
// }
// console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
/////////////////////
// function flattenedArray(arrays) {
//   return arrays.reduce(function (a, b) {
//     return a.concat(b);
//   });
// }
// console.log(
//   flattenedArray([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );
//////////////////////////
// function isAnagram(str1, str2) {
//   return formatString(str1) === formatString(str2);
//   // helper function
//   function formatString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
//   }
// }
// console.log(isAnagram("hello", "olleh"));
////////////////////////////////
// function letterChanges(str) {}
// console.log(letterChanges("hello there"));
///////////////
// function addAll(...numbers) {
//   //   return numbers.reduce(function (a, b) {
//   //     return a + b;
//   //   });
//   ///////////////////
//   let total = 0;
//   numbers.forEach(function (num) {
//     return (total += num);
//   });
//   return total;
// }
// console.log(addAll(1, 2, 3));
////////////////////////////
// function allPrimes(num) {
//   let total = 0;

//   function isPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(allPrimes(100));
///////////////
// function seekAndDestroy(arr, ...rest) {
//   return arr.filter(val => !rest.includes(val));
// }
// console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));
/////////////////////////
// function sortByHeight(arr) {
//   let arr1 = [];
//   let arr2 = [];

//   arr.forEach((val, i) => {
//     if (val === -1) {
//       arr.push(i);
//     } else {
//       arr2.push(val);
//     }
//   });
//   let sortedArr = arr.sort((a, b) => a - b);
//   arr1.forEach((val, i) => sortedArr.splice(arr1[i], 0, -1));
//   return sortedArr;
// }
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 180, 160]));
//////////////////////
// function missingLetter(str) {
//   let compare = str.charCodeAt(0);
//   let missing;

//   str.split("").map((char, i) => {
//     if (str.charCodeAt(i) === compare) {
//       compare++;
//     } else {
//       missing = String.fromCharCode(compare);
//     }
//   });
//   return missing;
// }
// console.log(missingLetter("abcdeghigklmnopqrstuvewxyz"));
////////////////////////
// function evenOddNum(arr) {
// //   let evenNum = 0;
// //   let oddNum = 0;

// //   arr.forEach(num => (num % 2 === 0 ? (evenNum += num) : (oddNum += num)));
// //   return [evenNum, oddNum];
// // }
// // console.log(evenOddNum([50, 60, 60, 45, 71]));
/////////////////
// function repeatedLetter(str) {
//   let charMap = {};
//   let maxNum = 0;
//   let maxChar = "";
//   str.split("").forEach(char => {
//     // if (charMap[char]) {
//     //   charMap[char]++;
//     // } else {
//     //   charMap[char] = 1;
//     // }
//     charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
//   });
//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }
// console.log(repeatedLetter("javascriptssssssssss"));
//////////////////////////// second solution //////////////////////////////
//     let newArr1 = str.split(" ");

//     newArr1 = newArr1.map(item => {
//       let newItem = item.toLowerCase().split("");
//       return newItem.reduce(
//         (acc, cur) => {
//           acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
//           return acc;
//         },
//         { max: 1, word: item }
//       );
//     });
//     return newArr1;
// }

// ////////////////

// function capitalizeLetter(str) {
//   let newWord = str.toLowerCase().split(" ");

//   for (let i = 0; i < newWord.length; i++) {
//     newWord[i] =
//       newWord[i].substring(0, 1).toUpperCase() + newWord[i].substring(1);
//   }

//   return newWord.join(" ");
// }
// console.log(capitalizeLetter("qabas aL aNI"));

/////////////////////
// function longestWordArray(sen) {
//   // clean the array
//   let cleanArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//   // sort the array
//   let sorted = cleanArr.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   // if multiple words put into an array
//   let oneWordArray = sorted.filter(function (word) {
//     return word.length === sorted[0].length;
//   });

//   // if more than one value
//   if (oneWordArray.length === 1) {
//     return oneWordArray[0];
//   } else {
//     return oneWordArray;
//   }
// }
// function letterChanges(str) {
//   // if multiple words put into an array
//   let oneWordArray = sorted.filter(function (word) {
//     return word.length === sorted[0].length;
//   });

//   //   // if more than one value
//   if (oneWordArray.length === 1) {
//     return oneWordArray[0];
//   } else {
//     return oneWordArray;
//   }
// }
///////////////////
// function birthdayCakeCandles(candles) {
//   let max = 0;
//   let count = 0;

//   for (let i = 0; i < candles.length; i++) {
//     if (max < candles[i]) {
//       max = candles[i];
//     }
//   }
//   for (let i = 0; i < candles.length; i++) {
//     if (max === candles[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(birthdayCakeCandles(24));
// Challenge 6 unique item using (Set())
// Solution

// cd

///////////////////////
//   Solution two
//     to check if there's duplicate

//   return new Set(str).size === str.length;

// console.log(unique("abcdeaa"));
// }
/////////////////////////////
// function unique(str) {
//   Solution one
//     let tempStr = new Set();

//     for (let letter of str) {
//       if (tempStr.has(letter)) {
//         return false;
//       }
//       tempStr.add(letter);
//     }
//     return true;
// ///////////////////////
// function isPalindrome(str) {
//   let wordArr = str.split("").reverse().join("");
//   return wordArr === str;
// }
// console.log(isPalindrome("madam"));
////////////////////////////////
// function isPalindrome(str) {
//   const strArr = str.split("").reverse().join("");
//   return strArr === str;
// }
// console.log(isPalindrome("madam"));
//////////////////

// function reverseString(str) {
//   return str.replace().split("").reverse().join("");
// }
// console.log(reverseString("qabas"));
/////////////////////
// function reversedInt(int) {
//   let newInt = int.toString().split("").reverse().join("");

//   return parseInt(newInt) * Math.sign(int);
// }
// console.log(reversedInt(-12345));
/////////////////////
// function capitalizeLetter(str) {
//   let strArr = str.toLowerCase().split(" ");

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() +
//       strArr[i].substring(1).toLowerCase();
//   }
//   return strArr.join(" ");
// }
// console.log(capitalizeLetter("qaBAs aL ani"));
////////////////////
// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = "";
//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
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
//////////////////////
// function longestWord(sen) {
//   const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//   const sortedArr = wordArr.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   const filteredArr = sortedArr.filter(function (word) {
//     return word.length === sortedArr[0].length;
//   });
//   if (filteredArr.length === 1) {
//     return filteredArr[0];
//   } else {
//     filteredArr;
//   }
// }
// console.log(longestWord("qabas, al, ani is a, pathetic"));
//////////////////////////
// function chunkedArray(arr, len) {
//   const newChunks = [];
//   let i = 0;
//   while (i < arr.length) {
//     newChunks.push(arr.slice(i, i + len));
//     i += len;
//   }
//   return newChunks;
// }
// console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
//////////////////////////
// function flattenArr(arrays) {
//   return arrays.reduce(function (acc, curr) {
//     return acc.concat(curr);
//   });
// }
// console.log(flattenArr([[1, 2], [3, 4], [5, 6, 7], [8]]));
////////////////////////////////
// function isAnagram(str1, str2) {
//   return formatString(str1) === formatString(str2);

//   function formatString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
//   }
// }
// console.log(isAnagram("below", "elbow"));
//////////////////////////
// function letterChanges(str) {
//   // return formatString(str1) === formatString(str2);
//   // function formatString(str) {
//   //   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
//   // }
//   //////////////////////////
// }
// console.log(letterChanges("hello there"));
// ///////////////////
// function letterChanges(str) {
//   return formatString(str1) === formatString(str2);
//   function formatString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
//   }
// }
// console.log(letterChanges("hello there"));
//////////////////////////////////
// function letterChanges(str) {
//   // if multiple words put into an array
//   let oneWordArray = sorted.filter(function (word) {
//     return word.length === sorted[0].length;
//   });

//   //   // if more than one value
//   if (oneWordArray.length === 1) {
//     return oneWordArray[0];
//   } else {
//     return oneWordArray;
//   }
// }
/////////////////////////
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
///////////////////////////
// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = "";
//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
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
// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = "";
//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
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
//////////////////////////
// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseStr("qabas"));
/////////////////
// function isPalindrome(str) {
//   const wordArray = str.split("").reverse().join("");
//   if (wordArray === str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome("madam"));
///////////////////
// function reverseInt(int) {
//   let newInt = int.toString().split("").reverse().join("");
//   return parseInt(newInt) * Math.sign(int);
// }
// console.log(reverseInt(-12345));
/////////////////////
// function maxCharacter(str) {
//   let charMap = {};
//   let maxNum = 0;
//   let maxChar = "";

//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
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
///////////////////////
// function longestWordArray(str) {
//   let newWord = str.toLowerCase().match(/[a-z0-9]+/g);
//   let sortedArray = newWord.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   let longestWord = sortedArray.filter(function (word) {
//     word.length === longestWord[0].length;
//   });
//   return longestWord;
// }
// console.log(longestWordArray("Hello, my name is Qabas"));
//////////////////////
// function longestWordArray(str) {
//   let newWord = str.toLowerCase().match(/[a-z0-9]+/g);
//   let sortedArray = newWord.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   let longestWord = sortedArray.filter(function (word) {
//     word.length === longestWord[0].length;
//   });
//   return longestWord;
// }
// console.log(longestWordArray("Hello, my name is Qabas"));
//////////////////////////////
// function letterChanges(str) {
//   return formatString(str1) === formatString(str2);
//   function formatString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
//   }
// }
// console.log(letterChanges("hello there"));
//////////////////////////////
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
//////////////////////////////////////
// function birthdayCakeCandles(candles) {
//   let max = 0;
//   let count = 0;

//   for (let i = 0; i < candles.length; i++) {
//     if (max < candles[i]) {
//       max = candles[i];
//     }
//   }
//   for (let i = 0; i < candles.length; i++) {
//     if (max === candles[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(birthdayCakeCandles(24));
//////////////////
// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = "";
//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
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
/////////////////////////
// function isAnagram(str1, str2) {
//   return formatString(str1) === formatString(str2);
//   // helper function
//   function formatString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
//   }
// }
// console.log(isAnagram("hello", "olleh"));
/////////////////////////////
// function repeatedLetter(str) {
//   let charMap = {};
//   let maxNum = 0;
//   let maxChar = "";
//   str.split("").forEach(char => {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//     charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
//   });
//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }
// console.log(repeatedLetter("javascriptssssssssss"));
///////////////////////////
// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = "";
//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
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
/////////////////////////
// function chunkedArray(arr, len) {
//   const newChunks = [];
//   let i = 0;
//   while (i < arr.length) {
//     newChunks.push(arr.slice(i, i + len));
//     i += len;
//   }
//   return newChunks;
// }
// console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
// ////////////////////////
//////////////////
// function flattenArr(arrays) {
//   return arrays.reduce(function (acc, curr) {
//     return acc.concat(curr);
//   });
// }
// console.log(flattenArr([[1, 2], [3, 4], [5, 6, 7], [8]]));
///////////////////
// function sortByHeight(arr) {
//   let arr1 = [];
//   let arr2 = [];

//   arr.forEach((val, i) => {
//     if (val === -1) {
//       arr.push(i);
//     } else {
//       arr2.push(val);
//     }
//   });
//   let sortedArr = arr.sort((a, b) => a - b);
//   arr1.forEach((val, i) => sortedArr.splice(arr1[i], 0, -1));
//   return sortedArr;
// }
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 180, 160]));
/////////////////////////
// function letterChanges(str) {
//   // if multiple words put into an array
//   let oneWordArray = sorted.filter(function (word) {
//     return word.length === sorted[0].length;
//   });

//   //   // if more than one value
//   if (oneWordArray.length === 1) {
//     return oneWordArray[0];
//   } else {
//     return oneWordArray;
//   }
// }
/////////////////////////
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
/////////////////////
// function reversedInt(int) {
//   let newInt = int.toString().split("").reverse().join("");
//   return parseInt(newInt) * Math.sign(int);
// }
// console.log(reversedInt(-12345));
/////////////////////
// function capitalizeLetter(str) {
//   let strArr = str.toLowerCase().split(" ");

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() +
//       strArr[i].substring(1).toLowerCase();
//   }
//   return strArr.join(" ");
// }
// console.log(capitalizeLetter("qaBAs aL ani"));
/////////////////////
// function reversedInt(int) {
//   let newInt = int.toString().split("").reverse().join("");
//   return parseInt(newInt) * Math.sign(int);
// }
// console.log(reversedInt(-12345));
//////////////////////
// function capitalizeLetter(str) {
//   let strArr = str.toLowerCase().split(" ");

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() +
//       strArr[i].substring(1).toLowerCase();
//   }
//   return strArr.join(" ");
// }
// console.log(capitalizeLetter("qaBAs aL ani"));
//////////////////
// function reversedInt(int) {
//   let newInt = int.toString().split("").reverse().join("");
//   return parseInt(newInt) * Math.sign(int);
// }
// console.log(reversedInt(-12345));
//////////////////////////////////////////////////////////////////////
// CHALLENGES ONE
// COUNTING LETTERS JAVASCRIPT

// function longestWord(str) {
//   //   let words = str.split(" ");
// //   let longestWord = "";

// //   for (let word of words) {
// //     if (word.length > longestWord.length) {
// //       longestWord = word;
// //     }
// //   }

// //   return longestWord;
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
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
//////////////////////
// function isPalindrome(str) {
//   let newWordArr = str.split("").reverse().join("");
//   return newWordArr === str;
// }
// console.log(isPalindrome("qavas"));
///////////////////////
// function reverseInt(int) {
//   let newInt = int.toString().split("").reverse().join("");
//   return parseInt(newInt);
// }
// console.log(reverseInt(12345));
//////////////////////
// function capitalizeLetter(str) {
//   let newWord = str.toLowerCase().split(" ");

//   for (let i = 0; i < newWord.length; i++) {
//     newWord[i] =
//       newWord[i].substring(0, 1).toUpperCase() +
//       newWord[i].substring(1).toLowerCase();
//   }
//   return newWord.join(" ");
// }
// console.log(capitalizeLetter("i love coding"));
///////////////
// function maxCharacter(str) {
//   let charMap = {};
//   let maxNum = 0;
//   let maxChar = "";

//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });
//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//     return maxChar;
//   }
// }
// console.log(maxCharacter("qabas"));
/////////////////////////////
// function addAll(...num) {
//   return num.reduce((acc, curr) => acc + curr);
// }
// console.log(addAll(2, 3, 4, 5, 6));
//////////////////
// function allPrimes(num) {
//   let total = 0;

//   function isPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(allPrimes(100));
//////////////////////////
// function longestWordArray(sen) {
//   let newWordArr = sen
//     .toLowerCase()

//     .match(/[a-z0-9]+/g);
//   let sortedArr = newWordArr.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   let filteredArr = sortedArr.filter(function (word) {
//     return word.length === sortedArr[0].length;
//   });
//   if (filteredArr.length === 1) {
//     return filteredArr[0];
//   } else {
//     return filteredArr;
//   }
// }
// console.log(longestWordArray("hello, my name is, qabas"));
///////////////////
// function chunkedArray(arr, len) {
//   let chunkedArr = [];
//   let i = 0;
//   while (i < arr.length) {
//     chunkedArr.push(arr.slice(i, i + len));
//     i += len;
//   }
//   return chunkedArr;
// }
// console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
//////////////////////////
// function flattenedArray(arrays) {
//   return arrays.reduce(function (a, b) {
//     return a.concat(b);
//   });
// }
// console.log(flattenedArray([[1, 2], [3, 4], [5, 6], [7, 8], [9]]));
//////////////////////////
// function isAnagram(str1, str2) {
//   return formatString(str1) === formatString(str2);

//   function formatString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
//   }
// }
// console.log(isAnagram("below", "elbow"));
////////////////////////
// function isAnagram(str1, str2) {
//   return formatString(str1) === formatString(str2);
//   function formatString(str) {
//     return str.replace(/[^\w]/g, "").split("").sort().join("");
//   }
// }
// console.log(isAnagram("below", "elbow"));
////////////////////////////////////
// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseStr("hello"));
///////////////////
// function isPalindrome(str) {
//   let newWordArr = str.split("").reverse().join("");
//   return newWordArr === str;
// }
// console.log(isPalindrome("madam"));
/////////////////////////////
// function reverseInt(int) {
//   let newNum = int.toString().split("").reverse().join("");

//   return parseInt(newNum) * Math.sign(int);
// }
// console.log(reverseInt(-123));
////////////////////
// function capitalizeLetter(str) {
//   let newWordArr = str.toLowerCase().split(" ");

//   for (let i = 0; i < newWordArr.length; i++) {
//     newWordArr[i] =
//       newWordArr[i].substring(0, 1).toUpperCase() + newWordArr[i].substring(1);
//   }
//   return newWordArr.join(" ");
// }
// console.log(capitalizeLetter("hello my name is qabas "));
/////////////////////
// function maxCharacter(str) {
//   let charMap = {};
//   let maxNum = 0;
//   let maxChar = "";

//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
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
////////////////////////
// function addAll(...numbers) {
//   let total = 0;
//   numbers.forEach(num => (total += num));
//   return total;
// }
// console.log(addAll(2, 1, 3, 5));
/////////////////////
// function primeNumber(num) {
//   let total = 0;

//   function isPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(primeNumber(10));
/////////////////////////////////
// function seekAndDestroy(arr, ...rest) {
//   return arr.filter(val => !rest.includes(val));
// }
// console.log(seekAndDestroy([1, 2, 3, 3, 4, "hello"], 3));
//////////////////////
// function sortByHeight(a) {
//   let arr1 = [];
//   let arr2 = [];

//   a.forEach((val, i) => {
//     if (val === -1) {
//       arr1.push(i);
//     } else {
//       arr2.push(val);
//     }
//   });
//   let sortedArr = arr2.sort((a, b) => a - b);
//   arr1.forEach((val, i) => sortedArr.splice(arr1[i], 0, -1));
//   return sortedArr;
// }
// console.log(sortByHeight([-1, 80, 90, -1, -1, 110, 100]));
///////////////////////////
// function missingLetter(str) {
//   let compare = str.charCodeAt(0);
//   let missing;

//   str.split("").map((char, i) => {
//     if (str.charCodeAt(i) === compare) {
//       compare++;
//     } else {
//       missing = String.fromCharCode(compare);
//     }
//   });
//   return missing;
// }
// console.log(missingLetter("abce"));
/////////////////////////////
// function evenOddNum(arr) {
//   let evenNum = 0;
//   let oddNum = 0;
//   arr.forEach(num => (num % 2 === 0 ? (evenNum += num) : (oddNum += num)));
//   return [evenNum, oddNum];
// }
// console.log(evenOddNum([50, 60, 60, 45, 71]));
//////////////////
// function longestWordArray(sen) {
//   let newWordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

//   let sortedArray = newWordArr.sort((a, b) => b.length - a.length);

//   let filteredArr = sortedArray.filter(
//     word => word.length === sortedArray[0].length
//   );

//   if (filteredArr.length === 1) {
//     return filteredArr[0];
//   } else {
//     return filteredArr;
//   }
// }
// console.table(longestWordArray("hello, my name is qabasa"));
///////////////////////

// const flightTime = 130;

// let movieLengths = [60, 65, 80, 70, 75, 55, 40, 45, 85, 90, 95, 30, 35];

// Ideal output: [
//   [60, 70],[90, 40],
// ];

// function myFlight(flightTime) {
//   let idealOutPut = [];

//   let sorted = movieLengths.sort((a, b) => a - b);

//   for (let i = 0; i < sorted.length; i++) {
//     for (let j = 0; j < sorted.length; j++) {
//       if (i !== j) {
//         console.log(sorted[i], sorted[j]);
//         if (sorted[i] + sorted[j] === flightTime) {
//           idealOutPut.push([sorted[i], sorted[j]]);
//         }
//       }
//     }
//   }

//   return idealOutPut;
// }

// console.log(myFlight(flightTime));
// function longestWordArray(sen) {
//   let newWordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

//   let sortedArray = newWordArr.sort((a, b) => b.length - a.length);

//   let filteredArr = sortedArray.filter(
//     word => word.length === sortedArray[0].length
//   );

//   if (filteredArr.length === 1) {
//     return filteredArr[0];
//   } else {
//     return filteredArr;
//   }
// }
// console.table(longestWordArray("hello, my name is qabasa"));
/////////////////
// function sumOfDifferences(arr) {
//   let sum = 0;
//   let dif = 0;
//   let sortedArr = arr.sort((a, b) => b - a);
//   //    return  (sortedArr[0] -  sortedArr[1]) + (sortedArr[1] -  sortedArr[2])
//   for (let i = 0; i < sortedArr.length - 1; i++) {
//     dif = sortedArr[i] - sortedArr[i + 1];
//     sum += dif;
//   }
//   return sum;
// }
// console.log(sumOfDifferences([10, 1, 2]));
//////////////////
// function eachCons(array, n) {
//   let res = [];

//   for (let i = 0; i < array.length; i++) {
//     res.push(array.slice(i, i + n));
//   }

//   return res.filter(e => e.length === n);
// }
////////////////////
// const stringToNumber = function (str) {
//   // put your code here
//   return parseInt(str);
// };
///////////////////
// function between(a, b) {
//   // your code here
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
///////////////////
// function howMuchILoveYou(nbPetals) {
//   if (nbPetals % 6 == 1) {
//     return "I love you";
//   } else if (nbPetals % 6 == 2) {
//     return "a little";
//   } else if (nbPetals % 6 == 3) {
//     return "a lot";
//   } else if (nbPetals % 6 == 4) {
//     return "passionately";
//   } else if (nbPetals % 6 == 5) {
//     return "madly";
//   } else {
//     return "not at all";
//   }
// }

// howMuchILoveYou(0);
//////////////////////
// function doubleInteger(i) {
//   // i will be an integer. Double it and return it.
//   return i * 2;
// }
// const arr = [1, 2, 1, 5, 7, 3, 4, 5, 6, 7, 8, 9];
// console.log([new Set(arr)]);
// function XO(str) {
//   let x = 0;
//   let o = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "x" || str[i] == "X") {
//       x++;
//     } else if (str[i] == "o" || str[i] == "O") {
//       o++;
//     }
//   }
//   console.log("x = ", o);
//   //         if(x === o) {
//   //     return true

//   //   }
//   if (!x && !o) {
//     return true;
//   }
//   return x == o;
// }
// console.log(XO("zpzxxxxxxxoooo"));
//////////////////////////
// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// function countPositivesSumNegatives(input) {
//   let positiveNums = 0;
//   let negativeNums = 0;
//   if (input === null || input.length === 0) {
//     return [];
//   } else {
//     input.forEach(num => (num > 0 ? positiveNums++ : (negativeNums += num)));
//   }
//   return [positiveNums, negativeNums];
// }
// // // console.log(countPositivesSumNegatives());
// console.log((100.1 / 5) % 1 === 0 && (100.1 / 20) % 1 === 0);

// const arr = [134, 24, 355, 455, 555, 643, 7, 100];

// function smallestNum(arr) {
//   let newNum = [];
//   return arr.Math.min(newNum);
// }
// smallestNum(arr);

///////////

// function doubled(arr) {
//   return arr.map(n => {
//     return n * 2;
//   });
// }
// console.log(doubled([1, 2, 3]));
function doubled(arr) {
  return arr.map(n => {
    return n * 2;
  });
}
console.log(doubled([1, 2, 3]));
