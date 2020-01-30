const a = document.querySelector("h1");

function b() {
  const c = new Date(),
    d = c.getHours(),
    e = c.getMinutes(),
    f = c.getSeconds();
  a.innerHTML = `${d < 10 ? `0${d}` : d} : ${e < 10 ? `0${e}` : e} : ${
    f < 10 ? `0${f}` : f
  }`;
}

function g() {
  b();
  setInterval(b, 1000);
}

g();
