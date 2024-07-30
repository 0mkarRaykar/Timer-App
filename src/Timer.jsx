// Timer.js
import React, { useEffect, useState } from 'react';

const Timer = ({ id, createdTime, duration, onDelete }) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prev => prev - 0.01);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      onDelete(id);
    }
  }, [remainingTime, onDelete, id]);

  return (
    <div className="timer">
      <p>Created: {createdTime}</p>
      <p>Remaining: {remainingTime.toFixed(2)}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Timer;
