import './css/styles.scss';
import 'regenerator-runtime/runtime' // required when using async/await with parcel
import seqFadeIn from './js/fadeIn';
import './js/focusImage';

import textInteraction from './js/textInteraction';
import dummy from './js/dummyClass';


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

// ==philo quote event handler==

const textInter = new textInteraction(20, 1500, 120);

textInter.calcRemoveTextDelay();

document.body.addEventListener('mouseover', e => {
  textInter.fluidRemoveText(e);
});

document.body.addEventListener('mouseover', e => {
  textInter.textAppear(e);
});


// const dum = new dummy(1,2);

// dum.secondFunc();


