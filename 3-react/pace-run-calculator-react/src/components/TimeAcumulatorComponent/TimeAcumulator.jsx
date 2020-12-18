import React from "react";
import "./TimeAcumulator.css";

function TimeAcumulator({
  kilometres,
  metres,
  hours,
  minutes,
  seconds,
  laps: lap,
}) {
  const mainPace = (km, m, h, min, s, l) => {
    let kilometres = Number(km);
    let metres = Number(m);
    let lap = Number(l);
    let hours = Number(h);
    let minutes = Number(min);
    let seconds = Number(s);
    const totalDistance = integrateKmAndM(kilometres, metres);
    const integratedTime = timeInMinutes(hours, minutes, seconds);
    const pace = thePace(totalDistance, integratedTime);
    const userPace = paceAcumulator(pace, lap, totalDistance);
    return userPace;
  };

  const integrateKmAndM = (kilometros, metros) => {
    let minutesString = metros.toString();
    let array = Array.from(minutesString);
    let acum = 1;
    for (let i = 0; i < array.length; i++) {
      acum *= 10;
    }
    const distanceValue = kilometros + metros / acum;
    return distanceValue;
  };

  function timeInMinutes(hours, minutes, seconds) {
    const toMinutes = hours * 60 + minutes + seconds / 60;
    return toMinutes;
  }

  const thePace = (distance, time) => {
    const firstNumber = Math.floor(time / distance);
    const firstNumberMod = (time / distance - firstNumber).toFixed(4);
    const secondNumber = Math.round(firstNumberMod * 60);
    const IntegrateSecond = secondNumber / 100;

    const timer = firstNumber + IntegrateSecond;
    return timer;
  };

  const paceAcumulator = (pace, lap, totalDistance) => {
    let newArray = [];
    let acum = 0;
    for (let i = lap; i <= totalDistance; i = i + lap) {
      newArray.push(`${pace.toFixed(2)} min/km`);
      acum += lap;
    }
    if (acum < totalDistance) {
      newArray.push(`${pace.toFixed(2)} min/km`);
    }
    return newArray;
  };

  let pacePrinter = mainPace(kilometres, metres, hours, minutes, seconds, lap);

  //--------Tabla del tiempo acumulado---------------------------------------
  const mainTime = (km, m, h, min, s, l) => {
    let kilometres = Number(km);
    let metres = Number(m);
    let lap = Number(l);
    let hours = Number(h);
    let minutes = Number(min);
    let seconds = Number(s);
    const totalDistance = integrateKmAndM(kilometres, metres);
    const integratedTime = timeInMinutes(hours, minutes, seconds);
    const paceOnLap = timeLap(integratedTime, lap, totalDistance);
    const acumulator = timeAcumulator(
      paceOnLap,
      totalDistance,
      lap,
      integratedTime
    );
    return acumulator;
  };

  const timeAcumulator = (pace, distance, laps, time) => {
    let newArray = [];
    let currentLap = 0;
    let acum = 0;
    for (let i = laps; i <= distance; i = i + laps) {
      currentLap += laps;
      debugger;
      let timecheck = timechecker(pace, acum);
      newArray.push(timecheck);
      debugger;
      acum = timecheck;
    }
    if (currentLap < distance) {
      const unpackableLaps = distance - currentLap;
      const lastPace = timeLap(time, unpackableLaps, distance);
      newArray.push(lastPace);
    }
    return newArray;
  };

  const timechecker = (lap, acumulator) => {
    let totalTime = 0;
    let firstNumberTime = Math.trunc(lap);
    let secondNumberTime = lap - firstNumberTime;

    let firstNumberAcumulator = Math.trunc(acumulator);
    let secondNumberAcumulator = acumulator - firstNumberAcumulator;

    let firstNumber = firstNumberTime + firstNumberAcumulator;
    let secondNumber = secondNumberTime + secondNumberAcumulator;

    if (secondNumber > 0.595) {
      firstNumber += 1;
      secondNumber -= 0.6;
    }

    totalTime = (firstNumber + secondNumber).toFixed(2);
    return totalTime;
  };

  function timeLap(time, lap, distance) {
    const theLap = distance / lap;

    const firstNumber = Math.floor(time / theLap);
    const firstNumberMod = time / theLap - firstNumber;
    const secondNumber = firstNumberMod * 60;
    const IntegrateSecond = secondNumber / 100;

    const timeLap = firstNumber + IntegrateSecond;
    return timeLap;
  }
  //aqui no va pacePrinter sino que debere calcular el ritmo dentro de la funcionnpm
  let timePrinter = mainTime(kilometres, metres, hours, minutes, seconds, lap);

  return (
    <div className="printer">
      <div className="print-time">
        <h5>Tiempo</h5>
        {timePrinter && (
          <ul>
            {timePrinter.map((item, index) => (
              <p key={index}>
                <hr />
                {item}
              </p>
            ))}
          </ul>
        )}
      </div>
      <div className="pace">
        <h5>Ritmo</h5>
        {pacePrinter && (
          <ul>
            {pacePrinter.map((item, index) => (
              <p key={index}>
                <hr />
                {item}
              </p>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TimeAcumulator;
