const g = document.querySelector("body"),
  n = g.querySelector("h1");

function b() {
  const y = window.innerWidth;

  if (y > 740) {
    g.classList = "ccc";
    n.innerHTML = "I'm yellow~!";
    n.style.color = "#040364";
  } else if (y < 640) {
    g.classList = "aaa";
    n.innerHTML = "I'm blue~~TT";
    n.style.color = "#65CC06";
  } else {
    g.classList = "bbb";
    n.innerHTML = "I'm purple!@_@";
    n.style.color = "#3B951F";
  }
}

function u() {
  window.addEventListener("resize", b);
}

u();
