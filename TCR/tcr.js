const eyes = document.querySelectorAll(".eye");

const positionSets = [
  [
    { x: -250, y: -100, r: -12 },
    { x: 220, y: -60, r: 10 },
    { x: -180, y: 160, r: -8 },
    { x: 120, y: 120, r: 15 }
  ],
  [
    { x: 180, y: 80, r: 8 },
    { x: -200, y: -50, r: -14 },
    { x: 150, y: 200, r: 6 },
    { x: -100, y: 150, r: -10 }
  ],
  [
    { x: -50, y: 200, r: -6 },
    { x: 200, y: -120, r: 12 },
    { x: -220, y: 300, r: -16 },
    { x: 100, y: -300, r: 9 }
  ]
];

eyes.forEach((eye, index) => {
  let current = -1; 

  eye.style.transform = "translate(0px, 0px) rotate(0deg)";

  eye.addEventListener("mouseenter", () => {
    current++;

    if (current >= positionSets[index].length) {
      current = 0;
    }

    const pos = positionSets[index][current];

    eye.style.transform = `
      translate(${pos.x}px, ${pos.y}px)
      rotate(${pos.r}deg)
    `;
  });
});
