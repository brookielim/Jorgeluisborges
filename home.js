const menu = document.getElementById("menu");
const items = Array.from(menu.children);
const cursorLabel = document.getElementById("cursorLabel");

items.forEach(item => {
  menu.appendChild(item.cloneNode(true));
});

let position = 0;
const speed = 1.2; 

function animate() {
  position -= speed;

  const totalWidth = menu.scrollWidth / 2;

  if (Math.abs(position) >= totalWidth) {
    position = 0;
  }

  menu.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();


document.querySelectorAll(".item").forEach(item => {

  item.addEventListener("mouseenter", () => {
    cursorLabel.style.display = "block";
    cursorLabel.textContent = item.dataset.title;
  });

  item.addEventListener("mouseleave", () => {
    cursorLabel.style.display = "none";
  });

  item.addEventListener("mousemove", (e) => {
    cursorLabel.style.left = e.clientX + "px";
    cursorLabel.style.top = e.clientY + "px";
  });

});
