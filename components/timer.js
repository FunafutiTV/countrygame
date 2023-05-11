import React, { useState, useEffect } from 'react';

export default function Timer({ setTimerZero, firstClick, refresh }) {
  const [timeLeft, setTimeLeft] = useState(1500);

  useEffect(() => {
    if (firstClick) {
        const endTime = new Date().getTime() + timeLeft * 10;
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            if ((endTime - now) > 0) {
                setTimeLeft(Math.floor((endTime - now) / 10));
            } else {
                setTimeLeft(0);
                setTimerZero(true);
                clearInterval(intervalId);
            }
        }, 10);
    } else { 
        setTimeLeft(1500);
    }
  }, [firstClick]);

  return (
    <div>
      <h2 className="timer">{timeLeft < 1000 ? `0${Math.floor(timeLeft / 100)}` : Math.floor(timeLeft / 100)}:{timeLeft - Math.floor(timeLeft / 100)*100 < 10 ? `0${timeLeft - Math.floor(timeLeft / 100)*100}` : timeLeft - Math.floor(timeLeft / 100)*100}</h2>
    </div>
  );
}