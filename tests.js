import { calculateStartingDistance } from './startingCalculations.js';

const result = calculateStartingDistance([1, 2, 3]);

// Assuming you are sure that the right answer is 3, 5, 6 when the input is 1, 2, 3
if(result === [3, 5, 6]) {
  console.log('Success');
} else {
  console.error(':(');
}
