let distanceValueKM = document.getElementById("distance-km");
let distanceValueM = document.getElementById("distance-m");

document.getElementById("5k").addEventListener("click", function () {
  distanceValueKM.value = 5;
  distanceValueM.value = "";
});

document.getElementById("10k").addEventListener("click", function () {
  distanceValueKM.value = 10;
  distanceValueM.value = "";
});

document.getElementById("21k").addEventListener("click", function () {
  distanceValueKM.value = 21;
  distanceValueM.value = "0975";
});

document.getElementById("42k").addEventListener("click", function () {
  distanceValueKM.value = 42;
  distanceValueM.value = 195;
});

var radios = document.getElementsByName("selector");

for (i = 0; i < radios.length; i++) {
  radios[i].onclick = function (e) {
    if (e.ctrlKey) {
      this.checked = false;
      distanceValueKM.value = "";
      distanceValueM.value = "";
    }
  };
}

function msg() {
  distanceValueKM = document.getElementById("distance-km");
  distanceValueM = document.getElementById("distance-m");
  fiveKmElement = document.getElementById("5k");
  tenKmElement = document.getElementById("10k");
  halfElement = document.getElementById("21k");
  marathonElement = document.getElementById("42k");
}

function resetBoard() {
  containerElement.innerHTML = "";

  readInput();
}

function readInput() {
  //lectura de input
  hoursValue = parseFloat(document.getElementById("hours").value);
  minutesValue = parseFloat(document.getElementById("minutes").value);
  secondsValue = parseFloat(document.getElementById("seconds").value);
  lapValue = parseFloat(document.getElementById("lap").value);
  distanceValueKM = parseFloat(document.getElementById("distance-km").value);
  distanceValueM = parseFloat(document.getElementById("distance-m").value);

  checkUserInput();
}

function checkUserInput() {
  if (isNaN(distanceValueKM)) {
    alert("Por favor, introduce los kilómetros que quieres hacer.");
    return false;
  }

  if (isNaN(distanceValueM)) {
    distanceValueM = 0;
  }

  if (isNaN(hoursValue)) {
    hoursValue = 0;
  }

  if (isNaN(minutesValue)) {
    minutesValue = 0;
  }

  if (isNaN(secondsValue)) {
    secondsValue = 0;
  }

  if (isNaN(lapValue)) {
    alert("Por favor, introduce una distancia parcial");
  }

  integrateKmAndM();
}

function integrateKmAndM() {
  let minutesString = distanceValueM.toString();
  let array = Array.from(minutesString);
  let acum = 1;
  for (let i = 0; i < array.length; i++) {
    acum *= 10;
  }
  distanceValue = distanceValueKM + distanceValueM / acum;

  printBoard();
}

function printBoard() {
  const namesElement = document.createElement("div");
  namesElement.classList.add("names");
  const columnDistanceElement = document.createElement("div");
  const columnTimeElement = document.createElement("div");
  const columnPaceElement = document.createElement("div");

  columnDistanceElement.innerHTML = "Distancia";
  columnTimeElement.innerHTML = "Tiempo";
  columnPaceElement.innerHTML = "Ritmo";

  namesElement.appendChild(columnDistanceElement);
  namesElement.appendChild(columnTimeElement);
  namesElement.appendChild(columnPaceElement);
  containerElement.appendChild(namesElement);

  playCalculcator(lapValue);
}
