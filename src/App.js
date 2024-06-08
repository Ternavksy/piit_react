import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import logo from './assets/icons/piit_logo.svg';
import piit_logo_white from './assets/icons/piit_logo_white.svg';
import background_image from './assets/images/background_piit.svg';
import card_image from './assets/images/card.svg';
import date_image from './assets/images/date_mark.svg';
import profile_avatar from './assets/images/profile_avatar.svg';
import PrivacyPolicy from './PrivacyPolicy';
import AddressAndContacts from './AddressAndContacts';
import NewsPiit from './NewsPiit.js';
import AboutDepartment from './AboutDepartment';
import NewsDetail from './NewsDetail';
import Courses from './Courses';
import MasterCourses from './MasterCourses';
import Staff from './Staff';
import Events from './Events';
import EventDetail from './EventDetail';
import AddNews from './AddNews';
import AddEvent from './AddEvent'; // Importing the new AddEvent component
import './App.css';

const news = [
  { id: 1, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 2, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 3, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 4, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 5, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 6, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
  { id: 7, title: 'Защита 2023', date: '02.04.2024', description: 'Сбор состоится в 9 утра в ...' },
];

const events = [
  { id: 1, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 2, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 3, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 4, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 5, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 6, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
  { id: 7, title: 'Собрание студентов', description: 'Сбор состоится в 9 утра в ...', author: 'Махортов С.А.' },
];

const staff = [
  { id: 1, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 2, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 3, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 4, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 5, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 6, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 7, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError('');
  };

  const handleLoginSuccess = () => {
    if (/^[a-zA-Z]+$/.test(username)) {
      setIsAuthenticated(true);
      setIsModalOpen(false);
      setError('');
    } else {
      setError('Login failed error. Please try again');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className={`App ${isModalOpen ? 'blurred' : ''}`}>
        <header className="header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav>
            <ul className="nav-list">
              <li><NavLink to="/news" className={({ isActive }) => isActive ? 'active-link' : ''}>Новости</NavLink></li>
              <li><NavLink to="/events" className={({ isActive }) => isActive ? 'active-link' : ''}>Мероприятия</NavLink></li>
              <li><NavLink to="/staff" className={({ isActive }) => isActive ? 'active-link' : ''}>Сотрудники</NavLink></li>
              <li className="dropdown">
                <NavLink to="/courses" className={({ isActive }) => isActive ? 'active-link' : ''}>Курсы</NavLink>
                <ul className="dropdown-content">
                  <li><Link to="/courses/bachelor">Бакалавриат</Link></li>
                  <li><Link to="/courses/master">Магистратура</Link></li>
                </ul>
              </li>
              <li><NavLink to="/about-department" className={({ isActive }) => isActive ? 'active-link' : ''}>О кафедре</NavLink></li>
            </ul>
          </nav>
          {isAuthenticated ? (
            <button className="login-button" onClick={handleLogout}>Выйти</button>
          ) : (
            <button className="login-button" onClick={handleLoginClick}>Вход</button>
          )}
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/address-contact" element={<AddressAndContacts />} />
            <Route path="/news" element={<NewsPiit isAuthenticated={isAuthenticated} />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/about-department" element={<AboutDepartment />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/bachelor" element={<Courses />} />
            <Route path="/courses/master" element={<MasterCourses />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/events" element={<Events isAuthenticated={isAuthenticated} />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/add-event" element={<AddEvent />} /> {/* Adding the new route for AddEvent */}
            <Route path="/add-news" element={<AddNews />} />
          </Routes>
        </main>

        <footer>
          <div className="footer-content">
            <img src={piit_logo_white} alt="PIIT Logo White" className="footer-logo" />
            <div className="footer-text">
              <p>© 2024 Факультет компьютерных наук. Воронежский государственный университет.</p>
              <p><Link to="/address-contact">Адрес и контакты</Link> | <Link to="/privacy-policy">Политика конфиденциальности</Link></p>
              <p>При копировании материалов ссылка на источник обязательна.</p>
            </div>
          </div>
        </footer>

        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>Авторизация</h2>
              <input
                type="text"
                placeholder="Логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLoginSuccess}>Вход</button>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <h2>Кафедра программирования и информационных технологий</h2>
        <p>Формируем будущее через технологии - присоединяйся и ты!</p>
      </section>

      <section className="news">
        <h2>Новости</h2>
        <div className="news-cards">
          {news.map((item) => (
            <div className="news-card" key={item.id}>
              <img src={card_image} alt="News" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="card-footer">
                <p>{item.date}</p>
                <Link to={`/news/${item.id}`} className="details-link">Подробнее...</Link>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more" onClick={() => navigate('/news')}>Ещё →</button>
      </section>

      <section className="events">
        <h2>Мероприятия</h2>
        <div className="event-cards">
          {events.map((item) => (
            <div className="event-card" key={item.id}>
              <img src={date_image} alt="Events" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="author" onClick={() => navigate(`/events/${item.id}`)}>{item.author}</p>
              <span className="details-link" onClick={() => navigate(`/events/${item.id}`)}>ЧИТАТЬ ДАЛЕЕ...</span>
            </div>
          ))}
        </div>
        <button className="load-more" onClick={() => navigate('/events')}>Ещё →</button>
      </section>

      <section className="staff">
        <h2>Сотрудники</h2>
        <div className="staff-cards">
          {staff.map((person) => (
            <div className="staff-card" key={person.id}>
              <img src={profile_avatar} alt="staff" />
              <h3>{person.name}</h3>
              <p>{person.position}</p>
              <p>{person.email}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
