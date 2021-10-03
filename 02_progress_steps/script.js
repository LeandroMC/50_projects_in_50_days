const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeCircle = 1;

update();

next.addEventListener('click', () => {
  if (activeCircle < circles.length) {
    activeCircle++;
  }
  update();
  console.log(activeCircle);
});

prev.addEventListener('click', () => {
  if (activeCircle > 1) {
    activeCircle--;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    // if (idx < activeCircle)
    //   circle.classList.add('active');
    // else
    //   circle.classList.remove('active');
    //
    idx < activeCircle ? circle.classList.add('active') : circle.classList.remove('active');
  });

  const activeCircles = document.querySelectorAll('.active');

  progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';

  if (activeCircle === 1) {
    prev.disabled = true;
  } else if (activeCircle === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
