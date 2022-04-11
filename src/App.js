import "./App.css";
import React from "react";
import { useState } from "react";
import { InputForm } from "./components/InputForm";
import { OutputBoard } from "./components/OutputBoard";
import axios from "axios";

function App() {
  const dtStart = null;
  const dtStop = null;
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
  const [setForm, setFormOn] = React.useState(false);
  const [cdate, setDate] = useState(dtStart);
  const [cdateStop, setDateStop] = useState(dtStop);
  const [projectboard, setBoard] = useState([]);

  const updateBoardArray = (eachEntry) => {
    setBoard([...projectboard, { ...eachEntry, cdate, cdateStop, time }]);

    const userData = {
      projectname: eachEntry.projectname,
      cdate: cdate,
      cdateStop: cdateStop,
      time: time,
    };
    axios
      .post("http://localhost:5000/projects", userData)
      .then((res) => console.log(res.data));
  };

  const handelDate = (e) => {
    let dtStart = new Date().toLocaleString() + "";
    setDate(dtStart);
  };

  const handelDateStop = () => {
    let dtStop = new Date().toLocaleString() + "";
    setDateStop(dtStop);
  };

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      <header className="App-header">Timely</header>

      <div className="container">
        <div className="timer">
          <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div>
          {!timerOn && time === 0 && (
            <button
              onClick={() => {
                setTimerOn(true);
                handelDate();
              }}
            >
              Start
            </button>
          )}
          {timerOn && (
            <button
              onClick={() => {
                setTimerOn(false);
                handelDateStop();
              }}
            >
              Stop
            </button>
          )}
          {!timerOn && time > 0 && (
            <button
              onClick={() => {
                setTime(0);
                setFormOn(false);
              }}
            >
              Reset
            </button>
          )}
          {!timerOn && time > 0 && (
            <button onClick={() => setFormOn(true)}>Save result!</button>
          )}
        </div>
        {setForm && (
          <InputForm updateBoardArray={updateBoardArray} cdate={cdate} />
        )}
        <OutputBoard projectboard={projectboard} />
      </div>
    </div>
  );
}

export default App;
