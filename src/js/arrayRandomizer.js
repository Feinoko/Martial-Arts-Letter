/* =====================
Module name : arrayRandomizer

Author : Jonathan Le Corre
Email : jonathanlecorre@gmail.com
Version : 1.0.0
Date of release (latest release): 27.01.2021

Description : randomize indexes of arrays passed in (ex : [1,2,3] can become [2,3,1])

Instructions : import in any JS file. No dependencies
========================*/

export default function randomizeArray(arr) {
  arr = arr.sort(() => 0.5 - Math.random());
  console.log(arr);
};

// could also have used:
// export { randomizeArray as default }; at bottom of code, instead of inline export default

/* how it works : puts before if sort argument is negative, after if positive */

// https://daily-dev-tips.com/posts/vanilla-javascript-shuffle-array/