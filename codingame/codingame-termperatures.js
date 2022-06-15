// let inputs = [];
// let finalNumber = null;

// for(let i = 0; i < inputs.length; i++) {
//     if(finalNumber === null) {
//         finalNumber = parseInt(inputs[i]);
//         continue;
        
//     } else if (Math.abs(finalNumber) === Math.abs(inputs[i])) {
//         finalNumber = Math.abs(finalNumber); 
//     } else {
//         finalNumber = Math.abs(inputs[i]) < Math.abs(finalNumber) ? inputs[i] : finalNumber;
//     }
// }


// var inputs = ['-3', '1', '5', '7', '-2', '3'];
var inputs = [ '24', '-5', '12', '21','5', '42' ];

let sortedTemperatures = inputs.sort((a,b) => 
    Math.abs(parseInt(a)) - Math.abs(parseInt(b)) || parseInt(b) - parseInt(a) 
);

console.log('sortedTemperatures >> ', sortedTemperatures);
console.log(sortedTemperatures[0] || 0);