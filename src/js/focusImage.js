// get image
const images = Array.from(document.getElementsByClassName('image-focus-blur'));

//event handler

for (let i of images) {
  console.log(i);
  i.addEventListener('mouseover', function(e) {

    console.log('mousing over');
    scaleImg(i);
  
    e.preventDefault();
  })
}



// functions

// zoom in img on hover
function scaleImg(i) {
  i.style.transform = 'scale(1.2)';
}