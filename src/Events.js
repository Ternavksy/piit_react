import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dateImage from './assets/images/date_mark.svg';
import addButtonImage from './assets/images/add_btn.png'; // Assuming you saved the uploaded image as add_btn.png
import './Events.css';

const events = [
  { id: 1, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 2, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 3, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 4, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 5, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 6, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 7, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
];

function Events({ isAuthenticated }) {
  const navigate = useNavigate();

  return (
    <div className="events">
      <header className="events-header">
        <h1>Мероприятия</h1>
        {isAuthenticated && (
          <Link to="/add-event">
            <img src={addButtonImage} alt="Add Event" className="add-event-button" />
          </Link>
        )}
      </header>
      <div className="event-cards">
        {events.map((item) => (
          <div className="event-card" key={item.id}>
            <img src={dateImage} alt="Events" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="author" onClick={() => navigate(`/events/${item.id}`)}>{item.author}</p>
            <span className="details-link" onClick={() => navigate(`/events/${item.id}`)}>ЧИТАТЬ ДАЛЕЕ...</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
