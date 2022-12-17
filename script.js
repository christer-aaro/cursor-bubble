const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('#cursor > span');

window.addEventListener('mousemove', function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

  animateCircles();
})

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    console.log(circle);
    circle.style = 'transform:translate(calc(' + x + 'px - 50%), calc(' + y + 'px - 50%));';
  })
}