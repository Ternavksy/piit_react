import React from 'react';
import profile_avatar from './assets/images/profile_avatar.svg';
import './Courses.css';

const staff = [
  {
    id: 1,
    name: 'Сычев Александр Васильевич',
    position: 'доцент',
    email: 'savasyev@vlsu.ru',
    courses: {
      'Первый курс': ['Теория компиляторов', 'Язык программирования', 'Язык программирования Java'],
      'Второй курс': ['Теория компиляторов', 'Язык программирования', 'Язык программирования Java'],
      'Третий курс': ['Теория компиляторов', 'Язык программирования', 'Язык программирования Java'],
      'Четвертый курс': ['Теория компиляторов', 'Язык программирования', 'Язык программирования Java']
    }
  },
  {
    id: 2,
    name: 'Иванов Иван Иванович',
    position: 'профессор',
    email: 'ivanov@vlsu.ru',
    courses: {
      'Первый курс': ['Основы программирования', 'Алгоритмы и структуры данных'],
      'Второй курс': ['Математический анализ', 'Алгоритмы и структуры данных'],
      'Третий курс': ['Дискретная математика', 'Компьютерные сети'],
      'Четвертый курс': ['Машинное обучение', 'Искусственный интеллект']
    }
  },
  {
    id: 3,
    name: 'Петров Семён Геннадьевич',
    position: 'профессор',
    email: 'ivanov@vlsu.ru',
    courses: {
      'Первый курс': ['Основы программирования', 'Алгоритмы и структуры данных'],
      'Второй курс': ['Математический анализ', 'Алгоритмы и структуры данных'],
      'Третий курс': ['Дискретная математика', 'Компьютерные сети'],
      'Четвертый курс': ['Машинное обучение', 'Искусственный интеллект']
    }
  },
];

const StaffCard = ({ person }) => {
  return (
    <div className="staff-card" key={person.id}>
      <img src={profile_avatar} alt="staff" className="profile-img" />
      <h3>{person.name}</h3>
      <p>{person.position}</p>
      <p>{person.email}</p>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="courses-container">
      <section className="staff">
        <h2>Магистратура</h2>
        {staff.map((person) => (
          <div key={person.id} className="staff-courses-container">
            <div className="staff-cards">
              <StaffCard person={person} />
            </div>
            <div className="course-details-container">
              {Object.keys(person.courses).map((year) => (
                <div className="year" key={year}>
                  <h4>{year}</h4>
                  <ul>
                    {person.courses[year].map((course, index) => (
                      <li key={index}>
                        <strong>• </strong>{course}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Courses;
