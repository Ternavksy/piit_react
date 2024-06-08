import React from 'react';
import './AddNews.css';
import addImage from './assets/images/Vector.png'; // Correctly importing the image

const AddNews = () => {
  return (
    <div className="add-news-container">
      <h2>Новость</h2>
      <div className="add-news-content">
        <div className="add-news-image">
          <img src={addImage} alt="Add" />
          <button className="add-image-button">+</button>
        </div>
        <div className="add-news-form">
          <label htmlFor="title">Заголовок</label>
          <input type="text" id="title" placeholder="Напишите текст новости..." />
          <button className="save-button">Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
