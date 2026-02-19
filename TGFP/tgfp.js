document.addEventListener("DOMContentLoaded", function(){

  const clock = document.getElementById("clock");
  const screen2 = document.getElementById("screen2");

  let clickCount = 0;
  let peeked = false;

  clock.addEventListener("click", function(){

    clickCount++;

    if(clickCount === 1){
      clock.src = "clock2.png";
    }

    else if(clickCount === 2){
      clock.src = "clock3.png";
    }

    else if(clickCount === 3){
      clock.src = "clock1.png";

      screen2.classList.add("peek");
      peeked = true;
    }

    if(clickCount > 3){
      clickCount = 1;
    }

  });

  screen2.addEventListener("click", function(){
    if(peeked){
      screen2.classList.remove("peek");
      screen2.classList.add("active");
    }
  });

});
