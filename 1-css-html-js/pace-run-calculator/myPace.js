let distanceValue = 0;
let lapValue = 0;
let hoursValue = 0;
let minutesValue = 0;
let secondsValue = 0;
const containerElement = document.getElementsByClassName(
  "container-printer"
)[0];

function timeInMinutes(hours, minutes, seconds) {
  const toMinutes = hours * 60 + minutes + seconds / 60;
  return toMinutes;
}

function PaceCalculator(distance) {
  const allInMinutes = timeInMinutes(hoursValue, minutesValue, secondsValue);
  const firstNumber = Math.floor(allInMinutes / distance);
  const firstNumberMod = (allInMinutes / distance - firstNumber).toFixed(4);
  const secondNumber = Math.round(firstNumberMod * 60);
  const IntegrateSecond = secondNumber / 100;

  const time = firstNumber + IntegrateSecond;
  return time;
}

function timeLap(distance, laps) {
  const allInMinutes = timeInMinutes(hoursValue, minutesValue, secondsValue);
  const theLap = distance / laps;

  const firstNumber = Math.floor(allInMinutes / theLap);
  const firstNumberMod = allInMinutes / theLap - firstNumber;
  const secondNumber = firstNumberMod * 60;
  const IntegrateSecond = secondNumber / 100;

  const timeLap = firstNumber + IntegrateSecond;
  return timeLap;
}

function timeAcumulator(acumulator, myTime) {
  let firstNumberTime = Math.trunc(myTime);
  let secondNumberTime = myTime - firstNumberTime;

  let firstNumberAcumulator = Math.trunc(acumulator);
  let secondNumberAcumulator = acumulator - firstNumberAcumulator;

  let firstNumber = firstNumberTime + firstNumberAcumulator;
  let secondNumber = secondNumberTime + secondNumberAcumulator;

  if (secondNumber > 0.59) {
    firstNumber += 1;
    secondNumber = secondNumber - 0.6;
  }
  const totalTime = firstNumber + secondNumber;
  return totalTime;
}

function playCalculcator(laps) {
  const pace = PaceCalculator(distanceValue);
  let myLaps = 0;
  let acumulator = 0;
  let myTime = timeLap(distanceValue, lapValue);
  for (let i = laps; i <= distanceValue; i = i + laps) {
    myLaps = myLaps + laps;
    const totalTime = timeAcumulator(acumulator, myTime);
    acumulator = totalTime;
    const lapElement = document.createElement("div");
    lapElement.classList.add("printable");
    lapElement.innerHTML = myLaps.toFixed(1);

    const paceElement = document.createElement("div");
    paceElement.classList.add("printable");
    paceElement.innerHTML = pace.toFixed(2);

    const timeElement = document.createElement("div");
    timeElement.classList.add("printable");
    timeElement.innerHTML = totalTime.toFixed(2);

    const containerlap = document.createElement("div");
    containerlap.classList.add("container-lap");
    containerlap.appendChild(lapElement);
    containerlap.appendChild(timeElement);
    containerlap.appendChild(paceElement);

    containerElement.appendChild(containerlap);
  }

  if (myLaps < distanceValue) {
    const unpackablaLaps = distanceValue - myLaps;
    const timeOnLap = timeLap(distanceValue, unpackablaLaps);
    const lastLap = timeAcumulator(acumulator, timeOnLap);

    const lapElement = document.createElement("div");
    lapElement.classList.add("printable");
    lapElement.innerHTML = distanceValue.toFixed(1);

    const paceElement = document.createElement("div");
    paceElement.classList.add("printable");
    paceElement.innerHTML = pace.toFixed(2);

    const timeElement = document.createElement("div");
    timeElement.classList.add("printable");
    timeElement.innerHTML = lastLap.toFixed(2);

    const containerlap = document.createElement("div");
    containerlap.classList.add("container-lap");

    containerlap.appendChild(lapElement);
    containerlap.appendChild(timeElement);
    containerlap.appendChild(paceElement);

    containerElement.appendChild(containerlap);
  }
}
