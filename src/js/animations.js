const elements = document.querySelectorAll('*');

window.onload = function fadeAll() {
  elements.forEach(function(element, index) {
    
    setTimeout(function () {
      console.log(element);
      // for (let i = 0; i<100 ;i++) {
      //   element.style.opacity = 0;
      //   setTimeout(function () {
      //     element.style.opacity += 0.01;
      //   }, 50);
      // }
      
    }, 100 * index);
  })
}