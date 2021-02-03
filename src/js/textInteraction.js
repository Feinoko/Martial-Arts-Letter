/* =====================

Module name : textInteraction

Author : Jonathan Le Corre
Email : jonathanlecorre@gmail.com
Version : 1.0.0
Date of release (latest release): 

Description : when hovering text, removes it to introduce new text

Instructions : 

Steps :
-on hover, progressive remove text (like a backspace animation)
-show another msg with type anim : "patience is the mother of all virtues"
-make 3 dots appears slowly below text area, to test user's patience
-make text fade in : you are not without virtue, you may enter the realm of wisdom
-add a button, on click, open modal, containing wisdom quotes from famous personalities (fetch API)

========================*/

class textInteraction {

  // test if import working correctly
  static sayHello() {
    console.log('hello');
  }

  // progressively removing text
  static fluidRemoveText(e) {

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
    };
  };

  static textAppear() {

    document.body.addEventListener('mouseover', function () {
      const ELquoteText = document.getElementById('quote-text');
      const quoteText = `Patience is the mother of all virtues`;
      const quoteLength = quoteText.length;
      let text = '';
      let i = 0;
      // wait a bit before start typing
      setTimeout(() => {
        // loop that adds a char at each iteration, with a set delay
        setInterval(() => {
          // exit loop when string is complete
          if (text.length === quoteLength) { return; };
          // remove the last char
          ELquoteText.textContent += quoteText.charAt(i);
          i++

          // quoteText = quoteText.substring(0,quoteText.length-1);
          // console.log(quoteText.length);
          // reassign the string without the last char
          // ELquoteText.textContent = quoteText;
        }, 20);
      }, 1300);
    });
  };
};

export { textInteraction as default };