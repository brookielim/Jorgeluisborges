const items = document.querySelectorAll(".item");
const cursorLabel = document.getElementById("cursorLabel");

items.forEach(item => {
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
