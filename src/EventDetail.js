// src/EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';
import DateTimeWidget from './DateTimeWidget';
import authorImage from './assets/images/author.png';  // Import the author image

const events = [
  {
    id: 1,
    title: 'Собрание студентов',
    subtitle: '27 мая 2023, 10:00',
    date: '03-02-2023',
    time: '13:30',
    author: 'Сычев А. В.',
    fullText: `О словах-отражениях. Это чувственные образы, только не прямые, как свет или звук, а слабенькие: отсвет, отзвук, отголосок. Как будто звук откуда-то отражается и к вам идет.`, // Truncated for brevity
  },
  {
    id: 2,
    title: 'Собрание студентов',
    subtitle: '27 мая 2023, 10:00',
    date: '03-02-2023',
    time: '13:30',
    author: 'Сычев А. В.',
    fullText: `О словах-отражениях. Это чувственные образы, только не прямые, как свет или звук, а слабенькие: отсвет, отзвук, отголосок. Как будто звук откуда-то отражается и к вам идет.`, // Truncated for brevity
  },
  {
    id: 3,
    title: 'Собрание студентов',
    subtitle: '27 мая 2023, 10:00',
    date: '03-02-2023',
    time: '13:30',
    author: 'Сычев А. В.',
    fullText: `О словах-отражениях. Это чувственные образы, только не прямые, как свет или звук, а слабенькие: отсвет, отзвук, отголосок. Как будто звук откуда-то отражается и к вам идет.`, // Truncated for brevity
  },
];

function EventDetail() {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-detail">
      <div className="event-header">
        <div className="author-info">
          <img src={authorImage} alt="Author" className="author-image" />
          <div className="author-details">
            <p><strong>{event.author}</strong></p>
            <h3 className="event-subtitle">{event.subtitle}</h3>
          </div>
        </div>
        <DateTimeWidget date={event.date} time={event.time} />
        <h2>{event.title}</h2>
      </div>
      <p>{event.fullText}</p>
    </div>
  );
}

export default EventDetail;
