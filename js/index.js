const aa = document.querySelector("#a").style;
const qq = document.querySelector("#a");

const bb = "red";
const cc = "blue";

function b() {
  const d = aa.color;
  if (d === bb) {
    aa.color = cc;
  } else {
    aa.color = bb;
  }
}

function c() {
  aa.color = bb;
  qq.addEventListener("mouseenter", b);
}
c();

function zz() {
  console.log("I'm out");
}

window.addEventListener("offline", zz);

function pp() {
  console.log("I'm in");
}

window.addEventListener("online", pp);
