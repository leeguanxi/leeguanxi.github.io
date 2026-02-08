/* Please check my dribbble design at https://dribbble.com/shots/13118573-Minimal-Envelope-Animation
 */
let open = gsap.timeline({ paused: true, reversed: true });
let zoom = gsap.timeline({ paused: true, reversed: true });
let $top = $(".top");
let $close = $(".close");
/* I used two animations for more control and to test delay call*/
$top.click(() => {
  open.play();
  zoom.play();
});

$close.click(() => {
  zoom.reverse();
  gsap.delayedCall(1, () => {
    open.reverse();
  });
});

open.
to(
".top-cover",
{
  duration: 0.5,
  ease: "power1.out",
  transformOrigin: "top",
  boxShadow: 0,
  rotateX: 180 },

0).

to(
".top",
{
  zIndex: 1 },

0.05).

to(
".top",
{
  filter: "drop-shadow(0px 2px 3px rgba(50, 0, 50, 0)" },

0);


zoom.
to(".paper", { zIndex: 1 }, 0.3).
to(".paper", { duration: 0.5, y: -120, zIndex: 2 }, 0.5).
to(
".paper",
{ duration: 0.5, y: 0, scale: 2, zIndex: 3, ease: "power1.out" },
1).

to(".shadow", { scaleX: 1.5 }, 1);

/* MODAL */

const openBtn = document.getElementById('openModal');

//const envelope = document.getElementById('envelope');
const modal = document.getElementById('modal');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const response = document.getElementById('response');
const question = document.getElementById('question') 
    

openBtn.addEventListener('click', () => {
    modal.classList.add('active');
});


function moveNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

yesBtn.addEventListener('click', () => {
  question.innerHTML = "<img src=\"https://i.pinimg.com/originals/ce/18/a3/ce18a32e937e71edeae5f21e75425148.gif\" style=\"width: 60%; height:auto;\"> <h3>YAYYY!!</h3>";
  response.innerHTML = "<p>(please let me know which you've picked 😋)</p>"
  noBtn.style.display = 'none';
  const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["heart"],
  colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

confetti({
  ...defaults,
  particleCount: 50,
  scalar: 2,
});

confetti({
  ...defaults,
  particleCount: 25,
  scalar: 3,
});

confetti({
  ...defaults,
  particleCount: 10,
  scalar: 4,
});
})

const paragraphs = document.querySelectorAll('.fade');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');

  // Reset in case modal is reopened
  paragraphs.forEach(p => p.classList.remove('show'));

  paragraphs.forEach(p => {
    const delay = Number(p.dataset.delay) || 0;
    setTimeout(() => {
      p.classList.add('show');
    }, delay); // delay between paragraphs
  });
});

