const a = document.querySelector("h2");

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

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
    a.style.color = colors[4];
  }
};

a.addEventListener("mouseenter", superEventHandler.b);
a.addEventListener("mouseout", superEventHandler.c);
window.addEventListener("resize", superEventHandler.d);
window.addEventListener("contextmenu", superEventHandler.e);
