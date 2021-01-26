window.addEventListener('DOMContentLoaded', fadeIn);

function fadeIn() {
  
  let count = 0;
  
  // while (count < 10) {
    
    const itemsToFade = Array.from(document.getElementsByClassName('will-fade'));

      setInterval(function() {
        // run this at each interval, will stop iterating when count is above # of elements to fade in
        if (count < itemsToFade.length) {
          itemsToFade[count].classList.add('fade-in');
          count ++;
          console.log(`bip ${count}`);
        } else {
          // exit the function once all items have faded in, to avoid set Interval running forever
          return;
        }
        console.log(count); // debug, to check that function does stop running after all elements have faded in
      }, 70);
}



