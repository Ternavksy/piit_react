import React, { useState } from 'react';
import './AddEvent.css'; // Create and style this file according to your design

const AddEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to save the event here
    console.log('Event saved:', { title, description });
  };

  return (
    <div className="add-event">
      <h1>Мероприятие</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Напишите текст мероприятия</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="save-button">Сохранить</button>
      </form>
    </div>
  );
};

export default AddEvent;
