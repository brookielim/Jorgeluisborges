const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

const dream = document.getElementById("dream");
const world = document.getElementById("world");
const worldText = document.getElementById("worldText");
const worldImg = document.getElementById("worldImg");

const leftHand = document.getElementById("leftHand");
const rightHand = document.getElementById("rightHand");

function triggerReplace(button, hand, wordElement, blurSrc) {
  button.classList.add("hide");

  hand.src = blurSrc;
  wordElement.style.opacity = "1";
}

btnLeft.addEventListener("click", () => {
  triggerReplace(btnLeft, leftHand, dream, "hand left blur.png");
  dream.classList.add("active");
});

btnRight.addEventListener("click", () => {
  triggerReplace(btnRight, rightHand, world, "hand right blur.png");
});

dream.addEventListener("mouseenter", () => {
  if (!dream.classList.contains("active")) return;

  document.body.classList.add("white-bg");
  dream.classList.add("hovered");

  worldText.style.display = "none";
  worldImg.style.display = "block";
});

dream.addEventListener("mouseleave", () => {
  document.body.classList.remove("white-bg");
  dream.classList.remove("hovered");

  worldText.style.display = "inline";
  worldImg.style.display = "none";
});
