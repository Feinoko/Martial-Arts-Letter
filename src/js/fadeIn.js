/* =====================

Module name : fadeIn

Author : JLeCorre
Email : jonathanlecorre@gmail.com
Version : 1.0.0
Date of issue : 26.01.2021

Description : fades in all DOM elements with the class 'will-fade'

Instructions : add the fadeIn function as callback in any eventListener (ex: DOMContentLoaded if you want DOM to fade in on page load) by adding a class 'fade-in' containing a transition opacity, which you must define yourself in CSS

========================*/

export default function fadeIn() {
  
  let count = 0; // init count

  // config vars
  const delay = 150; // interval between fades in
  const random = true; // shuffles the array of DOM elems so that fade in is not linear but scattered (artistic effect)
    
    let itemsToFade = Array.from(document.getElementsByClassName('will-fade'));

    // gets randomized if random param = true
    if (random) {
      itemsToFade = itemsToFade.sort(() => 0.5 - Math.random());
    }

      setInterval(function() {
        // run this at each interval, will stop iterating when count is equal / above # of elements to fade in
        if (count < itemsToFade.length) {
          itemsToFade[count].classList.add('fade-in');
          count ++;
          console.log(`ping # ${count}`); // for debug
        } else {
          // exit the function once all items have faded in, to avoid set Interval running forever
          return;
        }
        console.log(count); // debug, to check that function does stop running after all elements have faded in
      }, delay);
}



