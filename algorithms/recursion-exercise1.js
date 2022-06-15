// Exercise about Recursion 1 (Factorial)

// let result = 1;
// const findFactorialRecursive = (number) => {
//   result *= number;
//   if (parseInt(number) - 1 >= 1) {
//     return findFactorialRecursive(number - 1);
//   }
  
//   return result;
// } 

const findFactorialRecursive = (number) => {
  // 5 * (4 * (3 * (2)))
  if(number === 2) return number;
  return number * findFactorialRecursive(number - 1);
}


const findFactorialLooping = (number) => {
  let result = 1;
  for(let i = number; i > 1; i--) { result *= i };
  return result;
} 

// expected: 5 * 4 * 3 * 2 * 1 = 120;
// const loopingResult = findFactorialLooping(5);
// console.log('loopingResult >> ', loopingResult);

const recursiveResult = findFactorialRecursive(5);
console.log('recursiveResult >> ', recursiveResult);