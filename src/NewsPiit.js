import React from 'react';
import { Link } from 'react-router-dom';
import './NewsPiit.css';
import newsImage from './assets/images/card.svg';
import addButtonImage from './assets/images/add_btn.png';

const newsData = [
  { id: 1, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в главном кабинете кафедры программирования и информационных систем. Собрание будет проведено Махортовым Сергеем Дмитриевичем. На собрании будут обсуждаться следующие темы: разнообразие...', date: '02.04.2024' },
  { id: 2, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 3, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 4, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 5, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 6, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 7, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
];

const NewsPiit = ({ isAuthenticated }) => {
  return (
    <div className="news-piit-container">
      <header className="news-piit-header">
        <h1>Новости</h1>
        {isAuthenticated && (
          <Link to="/add-news">
            <img src={addButtonImage} alt="Add News" className="add-news-button" />
          </Link>
        )}
      </header>

      <main className="news-piit-main">
        {newsData.map((newsItem) => (
          <article key={newsItem.id} className="news-piit-article">
            <img src={newsImage} alt="News" className="news-piit-image" />
            <h2>{newsItem.title}</h2>
            <p>{newsItem.description}</p>
            <p>{newsItem.date}</p>
            <Link to={`/news/${newsItem.id}`} className="news-piit-read-more">Подробнее...</Link>
          </article>
        ))}
      </main>
    </div>
  );
};

export default NewsPiit;
