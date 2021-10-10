const PCT = [75, 75, 10, 10, 70, 80, 80, 60];
let elements = document.getElementsByClassName("progress-bar");

function fillPCT(element, i) {
  for (j = 0; j <= PCT[i]; j++) {
    let strPCT = j.toString() + "%";
    element.style.width = strPCT;
  }
}

function fillAll() {
  for (i = 0; i < 8; i++) {
    fillPCT(elements[i], i);
  }
}

for (i = 0; i < 8; i++) {
  elements[i].style.width = "0%";
}

addEventListener("scroll", fillAll);
