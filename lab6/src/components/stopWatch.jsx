import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0, milliseconds: 0 });
  const [laps, setLaps] = useState([]);
  const [running, setRunning] = useState(false);
  
  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => {
          let { minutes, seconds, milliseconds } = prevTime;
          milliseconds += 10;
          if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds += 1;
          }
          if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
          }
          return { minutes, seconds, milliseconds };
        });
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const startStopwatch = () => setRunning(true);
  const stopStopwatch = () => setRunning(false);
  const recordLap = () => setLaps([...laps, time]);

  return (
    <div>
      <h2>Stopwatch</h2>
      <div>
        {String(time.minutes).padStart(2, '0')}:
        {String(time.seconds).padStart(2, '0')}:
        {String(time.milliseconds / 10).padStart(2, '0')}
      </div>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={recordLap}>Record Lap</button>
      <h3>Laps</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            {String(lap.minutes).padStart(2, '0')}:
            {String(lap.seconds).padStart(2, '0')}:
            {String(lap.milliseconds / 10).padStart(2, '0')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stopwatch;
