// Path: /src/Components/Dashboard/Clock.js

import React, { useState, useEffect } from 'react';
import './Clock.css'; // Optional: Custom CSS for styling

const Clock = ({ showDate = false }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="clock-container">
      {showDate && <div className="date">{time.toLocaleDateString()}</div>}
      <div className="time">{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
