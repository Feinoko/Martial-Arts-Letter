// const elements = document.querySelectorAll('*');

// window.onload = function fadeAll() {
//   elements.forEach(function(element, index) {
    
//     setTimeout(function () {
//       console.log(element);
//       // for (let i = 0; i<100 ;i++) {
//       //   element.style.opacity = 0;
//       //   setTimeout(function () {
//       //     element.style.opacity += 0.01;
//       //   }, 50);
//       // }
      
//     }, 100 * index);
//   })
// }

window.addEventListener('DOMContentLoaded', fadeIn);

function fadeIn() {
  // get items to fade (convert them from html collection to node list, to use array methods)
  const itemsToFade = Array.from(document.getElementsByClassName('will-fade'));
  console.log(itemsToFade);
  itemsToFade.forEach(item => item.classList.add('fade-in'));
}

