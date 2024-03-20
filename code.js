document.addEventListener("DOMContentLoaded", function() {
    setTimeout(createFallingNumbers, 2000);
  });
  
  function createFallingNumbers() {
    for (let i = 0; i < 50; i++) {
      createFallingNumber("4");
      createFallingNumber("0");
    }
  }
  
  function createFallingNumber(number) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "30");
    svg.setAttribute("height", "30");
    svg.setAttribute("viewBox", "0 0 30 30");
    svg.style.position = "absolute";
    svg.style.left = Math.random() * window.innerWidth + "px";
    svg.style.top = "-30px";
  
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "15");
    text.setAttribute("y", "20");
    text.setAttribute("font-size", "20");
    text.setAttribute("text-anchor", "middle");
    text.textContent = number;
  
    svg.appendChild(text);
    document.body.appendChild(svg);
  
    svg.animate([
      { transform: "translateY(-100vh)" },
      { transform: "translateY(100vh)" }
    ], {
      duration: Math.random() * 2000 + 2000,
      easing: "ease-in-out",
      fill: "forwards"
    }).onfinish = function() {
      svg.remove();
    };
  }
  