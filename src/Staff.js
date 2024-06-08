import React from 'react';
import profile_avatar from './assets/images/profile_avatar.svg';
import './Staff.css'; // Import the new CSS file

const staff = [
  { id: 1, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 2, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 3, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 4, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 5, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 6, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 7, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
];

const Staff = () => {
  return (
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
  );
};

export default Staff;