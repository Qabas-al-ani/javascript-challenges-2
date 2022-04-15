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

function longestWord(str) {}
