// App.js
import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';

const App = () => {
  const [timers, setTimers] = useState([]);
  const [newTimerDuration, setNewTimerDuration] = useState('');

  const handleAddTimer = () => {
    const newTimer = {
      id: Date.now(),
      createdTime: new Date().toLocaleString(),
      duration: parseFloat(newTimerDuration),
    };
    setTimers([...timers, newTimer]);
    setNewTimerDuration('');
  };

  const handleDeleteTimer = (id) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  return (
    <div className="app">
      <div className="left-side">
        {timers.map(timer => (
          <Timer
            key={timer.id}
            id={timer.id}
            createdTime={timer.createdTime}
            duration={timer.duration}
            onDelete={handleDeleteTimer}
          />
        ))}
      </div>
      <div className="right-side">
        <input
          type="number"
          value={newTimerDuration}
          onChange={(e) => setNewTimerDuration(e.target.value)}
          placeholder="Enter seconds"
        />
        <button onClick={handleAddTimer}>Add Timer</button>
      </div>
    </div>
  );
};

export default App;
