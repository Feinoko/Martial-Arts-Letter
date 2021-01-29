import { indexOf } from "lodash";

// config
const zoomLevel = 1.08; // scale value
const transitionDuration = '.8s'; // time to zoom on hover
const z_index = 500; // to always appear on top in case of overlap. You should not have to touch this

// get image
let images = Array.from(document.getElementsByClassName('image-focus-blur'));

//event handler

// surveys all images
for (let i of images) {
  
  attachTransitionAnim(i);
  console.log(i);

  // triggers event on all images on mouseover / mouseout
  i.addEventListener('mouseover', function(e) {flow(i);});
  i.addEventListener('mouseout', function(e) {recess(i);});

  // triggers same event on focus
  i.addEventListener('focus', function(e) {flow(i);});
  i.addEventListener('blur', function(e) {recess(i);});                         

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

function grayOthers(i) {

  console.log(`the index of the hovered image is ${images.indexOf(i)}`);

  // remove the hovered image index to apply blur effect to all but hovered
  images.splice(images.indexOf(i), 1);

  for (let i of images) {
    i.style.transition = `all ${transitionDuration} ease`;
    i.style.filter = 'grayscale(1)';
  }
}

function unGray() {
  for (let i of images) {
    i.style.transition = `all ${transitionDuration} ease`;
    i.style.filter = 'grayscale(0)';
  }
}

function refill() {
  // re-fill array of image (re-add the removed index)
  images = Array.from(document.getElementsByClassName('image-focus-blur'));
}

function flow(i) {
  grayOthers(i);
  attachTransitionAnim(i);
  zoomIn(i);
}

function recess(i) {
  zoomOut(i); // revert to original size
  unGray(i);
  refill(); // re-fill array of image (re-add the removed index)
}
