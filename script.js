window.addEventListener("keydown", play);

function play(e) {
  const music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const styleKey = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!music) return;
  styleKey.classList.add("key");
  music.currentTime = 0;
  music.play();
}
