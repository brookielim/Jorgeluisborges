const blanket = document.getElementById("blanket");

let isDragging = false;
let offsetY = 0;

let currentY = 0;
let targetY = 0;

let maxDrag = 450;
let snapPoint = 150;

function animate() {
  currentY += (targetY - currentY) * 0.15;

  blanket.style.transform =
    `translateX(-50%) translateY(${currentY}px)`;

  requestAnimationFrame(animate);
}

animate();

// 드래그 시작
blanket.addEventListener("mousedown", (e) => {
  isDragging = true;

  // 클릭한 지점 기준 보정
  const rect = blanket.getBoundingClientRect();
  offsetY = e.clientY - rect.top;

  blanket.style.cursor = "grabbing";
});

// 드래그 중
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let move = e.clientY - offsetY - blanket.getBoundingClientRect().top + currentY;

  if (move < 0) move = 0;
  if (move > maxDrag) move = maxDrag;

  targetY = move;
});

// 드래그 끝
document.addEventListener("mouseup", () => {
  if (!isDragging) return;

  isDragging = false;
  blanket.style.cursor = "grab";

  if (targetY > snapPoint) {
    targetY = maxDrag;
  } else {
    targetY = 0;
  }
});
