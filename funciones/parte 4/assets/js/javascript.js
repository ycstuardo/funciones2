document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    changecolor = "blue";
  } else if (event.key === "s") {
    changecolor = "red";
  } else if (event.key === "d") {
    changecolor = "green";
  } else if (event.key === "f") {
    changecolor = "yellow";
  }
});

let box1 = document.querySelector("#box1");
box1.addEventListener(
  "click",
  () => (box1.style.backgroundColor = changecolor)
);

let box2 = document.querySelector("#box2");
box2.addEventListener(
  "click",
  () => (box2.style.backgroundColor = changecolor)
);

let box3 = document.querySelector("#box3");
box3.addEventListener(
  "click",
  () => (box3.style.backgroundColor = changecolor)
);

let box4 = document.querySelector("#box4");
box4.addEventListener(
  "click",
  () => (box4.style.backgroundColor = changecolor)
);
