
// config
const zoomLevel = 1.08; // scale value
const transitionDuration = '.4s'; // time to zoom on hover
const z_index = 500; // to always appear on top in case of overlap. You should not have to touch this

// get image
const images = Array.from(document.getElementsByClassName('image-focus-blur'));

//event handler

for (let i of images) {
  console.log(i);
  i.addEventListener('mouseover', function(e) {

    attachTransitionAnim(i);
    zoomIn(i);
  
    e.preventDefault();
  })

  i.addEventListener('mouseout', function(e) {

    zoomOut(i);
  
    e.preventDefault();
  })

}


// functions

// zoom in img on hover
function zoomIn(i) { // 'i' for image
  i.style.transform = `scale(${zoomLevel})`;
  i.style.zIndex += z_index; // to always appear on top in case of overlap
}

function zoomOut(i) {
  i.style.transform = 'scale(1)';
  i.style.zIndex -= z_index; // resetting z-index
}

// transition animation
function attachTransitionAnim(i) {

  i.style.transition = `all ${transitionDuration} ease`;

}
