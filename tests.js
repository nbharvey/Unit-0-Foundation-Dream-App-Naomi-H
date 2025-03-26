//this is a very simple testing setup for startingCalculations.js
import { calculateStartingDistance } from './startingCalculations.js';

const result = calculateStartingDistance([1, 2, 3]);
console.log(result);

// Assuming you are sure that the right answer is 3, 5, 6 when the input is 1, 2, 3
if (result[0] === '1.1' && result[1] === '2.2' && result[2] === '3.3') {
  console.log('Success');
} else {
  console.error(':(');
}
