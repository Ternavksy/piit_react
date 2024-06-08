// src/DateTimeWidget.js
import React from 'react';
import './DateTimeWidget.css';

const DateTimeWidget = ({ date, time }) => {
  return (
    <div className="date-time-widget">
      <div className="date">{date}</div>
      <div className="time">{time}</div>
    </div>
  );
};

export default DateTimeWidget;
