/** Recursion
 * 1. Identify the base case (the condition to stop the recursion);
 * 2. Identify the recursive case (the condition to keep looping into the recursive funtion);
 * 3. Take care about the return of the function (the return should be chained through the loop);
 */

// NAIVE EXAMPLE
let counter = 0;

function inception() {
  // Step 1 - the condition to stop looping
  if(counter > 3) return "done!";
  counter++;

  // Step 2 - the recursive case (calling the recursive function)
  return inception(); // Step 3 (taking care with the returns of the function, see the note below)

  // note about step 3: if we don't "return" the function, the "return 'done' 
  // inside of recursion will be lost in the loop, because the child "inception"
  // is returning "undefined" to its parent.
}