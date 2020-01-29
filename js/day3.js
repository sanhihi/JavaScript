const a = document.querySelector("h2");

const colors = ["#23B08F", "#2E8BD1", "#9458B0", "#D25146"];

const superEventHandler = {
  b: function() {
    a.innerHTML = "The mouse is here!";
    a.style.color = colors[0];
  },
  c: function() {
    a.innerHTML = "The mouse is gone!";
    a.style.color = colors[1];
  },
  d: function() {
    a.innerHTML = "You just resized!";
    a.style.color = colors[2];
  },
  e: function() {
    a.innerHTML = "That was a right click!";
    a.style.color = colors[3];
  }
};

a.addEventListener("mouseenter", superEventHandler.b);
a.addEventListener("mouseout", superEventHandler.c);
window.addEventListener("resize", superEventHandler.d);
window.addEventListener("contextmenu", superEventHandler.e);
