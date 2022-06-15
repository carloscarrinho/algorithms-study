/* THOR */

// 1. identify where is the light;
// 2. identify where is Thor;
// 3. identify the direction Thor should go;
    // 3.1 Take the path between lightX and initialTx
    // 3.2 Take the path between lightY and initialTy

// expected input at start: an array with 4 items (e.g. ['31', '4', '3', '9'])
// expected input at each round: an integer with the remaining turns (e.g. "98");
// expected output: A single line providing the move to be made: N NE E SE S SW W ou NW

// N -> 0, negative;
// NE -> positive, negative;
// E -> positive, 0;
// SE -> positive, positve;
// S -> 0, positive;
// SW -> negative, positive;
// W -> negative, 0;
// NW -> negative, negative;

// provided data
const inputs = [ '0', '17', '31', '4' ];
let lightX = parseInt(inputs[0]);
let lightY = parseInt(inputs[1]);
let initialTx = parseInt(inputs[2]);
let initialTy = parseInt(inputs[3]);
let remainingTurns = 10;

let currentX = initialTx, currentY = initialTy;
let move = '';

// currentX = 31, currentY = 4 -> SW
// quando currentY = 17 tem que parar em 17 -> W
if(currentX > lightX && currentY > 0) {
    
}


// program
// let moveX = lightX - initialTx; // 0 - 31 == -31 (left)
// let moveY = lightY - initialTy; // 17 - 4 = 13 (down)

// let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

// let direction;

// if(!moveX && moveY > 0) { // S
//     direction = directions[4]
// } else if(!moveX && moveY < 0) { //N
//     direction = directions[0]
// } else if(moveX > 0 && !moveY) { // E
//     direction = directions[2];
// } else if(moveX < 0 && !moveY) { // W
//     direction = directions[6];
// } else if(moveX > 0 && moveY > 0) { // SE
//     direction = directions[3];
// } else if(moveX > 0 && moveY < 0) { // NE
//     direction = directions[1];
// } else if(moveX < 0 && moveY > 0) { // SW
//     direction = directions[5];
// } else { // (moveX < 0 && moveY < 0) NW
//     direction = directions[7];
// }