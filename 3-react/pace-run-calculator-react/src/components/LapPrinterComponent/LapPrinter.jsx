import React from "react";
import "./LapPrinter.css";

function Calculator(props) {
  const mainLaps = (km, m, l) => {
    let kilometres = Number(km);
    let metres = Number(m);
    let lap = Number(l);
    const totalDistance = integrateKmAndM(kilometres, metres);
    const userLaps = lapAcumulator(totalDistance, lap);

    return userLaps;
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

  const lapAcumulator = (distance, laps) => {
    let newArray = [];
    let acum = 0;
    for (let i = laps; i <= distance; i = i + laps) {
      newArray.push(`km ${(laps + acum).toFixed(2)}`);
      acum += laps;
    }
    if (acum < distance) {
      newArray.push(`km ${distance.toFixed(2)}`);
    }
    return newArray;
  };

  let lapPrinter = mainLaps(props.kilometres, props.metres, props.laps);

  return (
    <div className="container-laps">
      <h5>Distancia</h5>
      {lapPrinter && (
        <ul>
          {lapPrinter.map((item, index) => (
            <p key={index}>
              <hr />
              {item}
            </p>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Calculator;
