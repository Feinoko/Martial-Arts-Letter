/* =====================

Module name : textInteraction

Author : Jonathan Le Corre
Email : jonathanlecorre@gmail.com
Version : 1.0.0
Date of release (latest release): 

Description : when entering text, removes it to introduce new text

Instructions : 

Steps :
-on hover, progressive remove text (like a backspace animation)
-show another msg with type anim : "patience is the mother of all virtues"
-make 3 dots appears slowly below text area, to test user's patience
-make text fade in : you are not without virtue, you may enter the realm of wisdom
-add a button, on click, open modal, containing wisdom quotes from famous personalities (fetch API)

========================*/

class textInteraction {

  constructor(letterDelay, delayBeforeStartRemoveText) { /* removeTextDelay, delayBeforeFiringTextAppear) { */
    this.letterDelay = letterDelay;
    this.delayBeforeStartRemoveText = delayBeforeStartRemoveText;
    this.textappearDelay = 120;
    this.quoteText = document.getElementById('quote-text').textContent; // to save the original saying in a var
    this.fuse = true;
  }

  // calculate removeTextDelay
  calcRemoveTextDelay() {
    return (this.letterDelay * document.getElementById('quote-text').textContent.length + this.delayBeforeStartRemoveText);
  }

  // progressively removing text
  fluidRemoveText() {

    const ELquoteText = document.getElementById('quote-text');

    if (this.fuse) {
      this.fuse = false;
      let quoteText = ELquoteText.textContent;
      // wait a bit before start removing
      setTimeout(() => {
        // loop that removes the last char at each iteration, with a set delay
        const timer = setInterval(() => { // you must declare the setInterval in expression (with a const), in order to be able to clearInterval 
          // exit loop when string is empty
          if (quoteText.length === 0) {
            this.textAppear();
            clearInterval(timer);
          };
          // remove the last char
          quoteText = quoteText.substring(0, quoteText.length - 1);

          // reassign the string without the last char
          ELquoteText.textContent = quoteText;
        }, this.letterDelay); // delay between each call (setInterval)
      }, this.delayBeforeStartRemoveText);  // delay of the setTimeout
    }



  };

  textAppear() {

    const ELquoteText = document.getElementById('quote-text');
    const quoteText = `Patience is the mother of all virtues...`;
    const quoteLength = quoteText.length;
    let text = '';
    let i = 0;


    // wait for previous to complete (i know... problem with promises, i cant get them to work yet)
    const delay = this.calcRemoveTextDelay() + 1000; // wait for 1st function then wait another 2s
    setTimeout(() => {
      // loop that adds a char at each iteration, with a set delay
      const repeater = setInterval(() => {
        // exit loop when string is complete
        if (text.length === quoteLength-1) {
          console.log('clearing interval');
          clearInterval(repeater);
        };
        // remove the last char
        ELquoteText.textContent += quoteText.charAt(i);
        text = ELquoteText.textContent;
        i++
      }, this.textappearDelay*2);
    }, delay);
  }

  removeAuthor() {
    const author = document.getElementById('quote-author');
    author.classList.add('fadeout-quote-author');
  }

};

export { textInteraction as default };