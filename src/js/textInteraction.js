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

// to limit the # of calls on mouse over (performance save)
import { throttle } from 'throttle-debounce';
// see https://www.npmjs.com/package/throttle-debounce
// finally was not used, keeping in for the record, to leave a trace that this exists (or you can use lodash too)

class textInteraction {

  // test if import working correctly
  static sayHello() {
    console.log('hello');
  }

  // progressively removing text
  static fluidRemoveText() {
    
    document.body.addEventListener('mouseover', function(e) {
      
      console.log(`hovering body part: ${e.target}`);
      
      
    })
  }


}

export { textInteraction as default };