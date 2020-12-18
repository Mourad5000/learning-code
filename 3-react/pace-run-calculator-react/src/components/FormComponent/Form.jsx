import React, { useState } from "react";
import "./Form.css";

import LapPrinter from "../LapPrinterComponent/LapPrinter";
import TimeAcumulator from "../TimeAcumulatorComponent/TimeAcumulator";

function PaceCalculator() {
  const [data, setData] = useState({
    kilometres: 0,
    metres: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    laps: 0,
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  /* const enviarDatos = (event) => {
    event.preventDefault(); //evita que se procese de manera automatica

    event.target.reset(); //te pone todo los INPUTS a 0
  };
*/
  return (
    <div className="form-container">
      <form>
        <section className="distance">
          <h3>¿A cuánto debo ir si quiero hacer...?</h3>
          <h5>¿Qué distancia vas a hacer?</h5>
          <div className="input-favourites">
            <div className="km-selector">
              <input type="radio" name="selector" id="5k" />
              <label htmlFor="5k">5km</label>
            </div>
            <div className="km-selector">
              <input type="radio" name="selector" id="10k" />
              <label htmlFor="5k">10km</label>
            </div>
            <div className="km-selector">
              <input type="radio" name="selector" id="21k" />
              <label htmlFor="5k">1/2 Maratón</label>
            </div>
            <div className="km-selector">
              <input type="radio" name="selector" id="42k" />
              <label htmlFor="5k">Maratón</label>
            </div>
          </div>
          <div className="entrada-km">
            O escribe aquí la distancia:{" "}
            <input
              className="input-distance"
              type="number"
              name="kilometres"
              onChange={handleInputChange}
              id="distance-km"
              placeholder="Kilómetros"
              autoComplete="off"
              required
            />
            :
            <input
              className="input-distance"
              type="number"
              name="metres"
              onChange={handleInputChange}
              id="distance-m"
              placeholder="Metros"
              autoComplete="off"
              required
            />
          </div>
        </section>
        <h5>¿Qué tiempo quieres hacer?</h5>
        <section className="time">
          <input
            className="input-time"
            type="number"
            id="hours"
            name="hours"
            onChange={handleInputChange}
            placeholder="Horas"
            autoComplete="off"
            required
          />
          :
          <input
            className="input-time"
            type="number"
            id="minutes"
            name="minutes"
            onChange={handleInputChange}
            placeholder="Minutos"
            autoComplete="off"
            required
          />
          :
          <input
            className="input-time"
            type="number"
            id="seconds"
            name="seconds"
            onChange={handleInputChange}
            placeholder="Segundos"
            autoComplete="off"
            required
          />
        </section>
        <h5>¿Cada cuánto te quieres controlar?</h5>
        <section className="km">
          <input
            className="input"
            type="number"
            id="lap"
            name="laps"
            onChange={handleInputChange}
            placeholder="Distancia de vuelta"
            autoComplete="off"
            required
          />
        </section>
      </form>
      <div className="the-calculator">
        {data.kilometres !== 0 &&
          data.metres !== undefined &&
          data.laps !== "" &&
          data.laps > 0 && (
            <LapPrinter
              kilometres={data.kilometres}
              metres={data.metres}
              laps={data.laps}
            />
          )}
        <div className="timeAcumulator">
          {data.laps !== "" && data.laps > 0 && (
            <TimeAcumulator
              kilometres={data.kilometres}
              metres={data.metres}
              hours={data.hours}
              minutes={data.minutes}
              seconds={data.seconds}
              laps={data.laps}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PaceCalculator;
