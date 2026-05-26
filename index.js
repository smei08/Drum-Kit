window.addEventListener("keydown", function (e) {
  console.log("key pressed:", e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log("audio found:", audio);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});
