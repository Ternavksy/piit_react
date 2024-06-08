import React from 'react';
import { useParams } from 'react-router-dom';
import profile_avatar from './assets/images/profile_avatar.svg';
import './StaffDetail.css';

const staff = [
  { id: 1, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 2, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 3, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 4, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 5, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 6, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
  { id: 7, name: 'Сычев Александр Васильевич', position: 'доцент', email: 'savasyev@vlsu.ru' },
];

const StaffDetail = () => {
  const { id } = useParams();
  const person = staff.find(p => p.id === parseInt(id));

  if (!person) {
    return <p>Staff member not found.</p>;
  }

  return (
    <div className="staff-detail">
      <img src={profile_avatar} alt={person.name} />
      <h2>{person.name}</h2>
      <p>Position: {person.position}</p>
      <p>Email: {person.email}</p>
      {/* Add any additional details here */}
    </div>
  );
};

export default StaffDetail;
