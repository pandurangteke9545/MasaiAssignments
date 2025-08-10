import React, { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10); // default 10 sec
  const intervalRef = useRef(null);

  // Effect to manage the stopwatch
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    // Cleanup on stop/unmount
    return () => clearInterval(intervalRef.current);
  }, [running]);

  // Play sound when target time is reached
  useEffect(() => {
    if (seconds === Number(targetTime) && targetTime > 0) {
      const audio = new Audio(
        "https://www.soundjay.com/button/beep-07.wav" // free beep sound
      );
      audio.play().catch(() => console.log("Beep! Target reached."));
      setRunning(false); // stop automatically
    }
  }, [seconds, targetTime]);

  // Button handlers
  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Stopwatch</h1>

      {/* Display elapsed seconds */}
      <h2>{seconds} s</h2>

      {/* Target time input */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          Target time (seconds):{" "}
          <input
            type="number"
            value={targetTime}
            onChange={(e) => setTargetTime(e.target.value)}
            style={{ width: "60px", textAlign: "center" }}
            min="1"
          />
        </label>
      </div>

      {/* Control buttons */}
      <button onClick={start} disabled={running}>
        Start
      </button>
      <button onClick={stop} disabled={!running}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
