const header = document.querySelectorAll(".header");
header.forEach((header) => {
  header.innerHTML = header.textContent
    .split("")
    .map((letter) => (letter === " " ? " " : `<span>${letter}</span>`))
    .join("");
});

function playSound(e) {
  console.log("key Pressed: ", e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");

  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
