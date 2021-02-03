import './css/styles.scss';
import 'regenerator-runtime/runtime' // required when using async/await with parcel
import seqFadeIn from './js/fadeIn';
import './js/focusImage';

import textInteraction from './js/textInteraction';

// tile fade in effect
window.addEventListener('DOMContentLoaded', seqFadeIn);



/* ================
philosophical quote hover effect
================== */ 
//#region quote

const ELquote = document.getElementById('philo-quote');

// effect should trigger whenever user enters the whole div, not just the quote text
ELquote.addEventListener('mouseenter', effectIn);
ELquote.addEventListener('mouseleave', effectOut);

// event handler function
function effectIn() {
  const ELlines = Array.from(document.getElementsByClassName('quote-line'));
  // apply to quote lines
  ELlines.forEach(function(line) {
    line.style.transition = 'background-color 1s ease';
    line.style.backgroundColor = 'rgb(135, 26, 26)';
  });
  // apply to author name also
  const ELauthor = document.getElementById('quote-author');
  ELauthor.style.transition = 'color 1s ease';
  ELauthor.style.color = 'rgb(135, 26, 26)';
}

function effectOut() {
  const ELlines = Array.from(document.getElementsByClassName('quote-line'));
  // apply to quote lines
  ELlines.forEach(function(line) {
    line.style.transition = 'background-color 1s ease';
    line.style.backgroundColor = '#A7A7A7';
  });
  // apply to author name also
  const ELauthor = document.getElementById('quote-author');
  ELauthor.style.transition = 'color 1s ease';
  ELauthor.style.color = '#A7A7A7';
}
//#endregion
document.body.addEventListener('mouseover', function(e) {
  return new Promise((resolve, reject) => {
    console.log(`hovering body part: ${e.target}`);
    const ELquoteText = document.getElementById('quote-text');
    if (e.target === ELquoteText) {
      let quoteText = ELquoteText.textContent;
      // wait a bit before start removing
      setTimeout(() => {
        // loop that removes the last char at each iteration, with a set delay
        setInterval(() => {
          // exit loop when string is empty
          if (quoteText.length === 0) { return; };
          // remove the last char
          quoteText = quoteText.substring(0, quoteText.length - 1);
          console.log(quoteText.length);
          // reassign the string without the last char
          ELquoteText.textContent = quoteText;
        }, 20);
      }, 1300);
      resolve();
    }
  }).then(console.log('hello'));
})


// .then(textInteraction.textAppear());

