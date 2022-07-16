//function pintar(){
//ele = document.getElementById("ele1")
//ele.style.backgroundColor = 'yellow'
//}
//ele = document.getElementById("ele1")
//ele.addEventListener("click", pintar);

let ele = document.getElementById("ele1");
function pintar(ele1, color) {
  ele.style.backgroundColor = color;
}
ele.addEventListener("click", function () {
  pintar(ele1, "yellow");
});
