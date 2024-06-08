import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './NewsPiit.css';
import newsImage from './assets/images/card.svg';

const newsData = [
  { id: 1, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в главном кабинете кафедры программирования и информационных систем. Собрание будет проведено Махортовым Сергеем Дмитриевичем. На собрании будут обсждаться следующие темы: разнообразие...', date: '02.04.2024' },
  { id: 2, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 3, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 4, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 5, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 6, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 7, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
];

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div>Новость не найдена</div>;
  }

  return (
    <div className="news-piit-container">
      <header className="news-piit-header">
        <h1>{newsItem.title}</h1>
      </header>

      <main className="news-piit-main">
        <article className="news-piit-article">
          <img src={newsImage} alt="News" className="news-piit-image" />
          <p>{newsItem.description}</p>
          <p>{newsItem.date}</p>
          <Link to="/news" className="news-piit-read-more">Назад к новостям</Link>
        </article>
      </main>
    </div>
  );
};

export default NewsDetail;
