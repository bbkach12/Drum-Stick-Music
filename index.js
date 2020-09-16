window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const body = document.getElementsByTagName("body")[0];
  const colors = ["red", "yellow", "green", "lightblue", "blue", "purple"];

  // Working with sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      pad.style.transform = "scale(0.8)";
      setTimeout(function () {
        pad.style.transform = "scale(1)";
      }, 2000);
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });

  // working with bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.display = "block";
    bubble.style.animation = "jump 2s ease";
    body.style.backgroundColor = colors[index];

    setTimeout(function () {
      body.style.backgroundColor = "#fff";
    }, 4000);

    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
