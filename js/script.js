let pixel = document.querySelectorAll('.pixel');
let eraser = document.querySelector('.eraser');
let chosencolor = document.querySelector('.chosen-color');
for(let p of pixel) {
  p.onclick = function() {
    if(eraser.checked) {
       p.style.backgroundColor='white';
    }
    else {
      p.style.backgroundColor=chosencolor.value;
    }
  }
}