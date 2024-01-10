
import React, { useState, useEffect } from 'react';
import { format, differenceInMilliseconds } from 'date-fns';
import './Countdown.css';

const Countdown = () => {
  const targetDate = new Date('July 5, 2024 00:00:00 GMT+0000');

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeRemaining = differenceInMilliseconds(targetDate, now);

    if (timeRemaining <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h2>Countdown to Girls Trip</h2>
      <div className="countdown-timer">
        <div className="countdown-item">
          <span>{timeRemaining.days}</span>
          <p>Days</p>
        </div>
        <div className="countdown-item">
          <span>{timeRemaining.hours}</span>
          <p>Hours</p>
        </div>
        <div className="countdown-item">
          <span>{timeRemaining.minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="countdown-item">
          <span>{timeRemaining.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
