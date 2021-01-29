import './css/styles.scss';
import 'regenerator-runtime/runtime' // required when using async/await with parcel
import fadeIn from './js/fadeIn';
import ranArray from './js/arrayRandomizer';
import './js/focusImage';

document.body.addEventListener('keydown', function() {
  const array1 = [1, 2, 3, 4, 5];
  ranArray(array1);
});

window.addEventListener('DOMContentLoaded', fadeIn);

// document.body.style.cssText += 'color: blue';
// document.body.style.cssText += 'width: 100vw'