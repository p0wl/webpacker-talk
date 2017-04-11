/* eslint-disable */

/*** math.js */
// This function isn't used anywhere
export function square(x) {
  return x * x;
}

// This function gets included
export function cube(x) {
  return x * x * x;
}

/*** app.js */
import { cube } from './math'

console.log('cube', cube(9))