import React from 'react';
import './AddressAndContacts.css';

const AddressAndContacts = () => {
  return (
    <div className="address-and-contacts">
      <h2>Адреса и контакты</h2>
      <div className="contacts">
        <p><strong>Телефон кафедры:</strong> (473)-2-208-470</p>
        <p><strong>Заведующий:</strong> Махортов Сергей Дмитриевич (<a href="mailto:msd_exp@outlook.com">msd_exp@outlook.com</a>)</p>
        <p><strong>Секретарь:</strong> Щепкина Ольга Васильевна (<a href="mailto:sav@cs.vsu.ru">sav@cs.vsu.ru</a>)</p>
        <p><strong>Адрес:</strong> Россия, г. Воронеж, Университетская пл., д. 1, ауд. 381а</p>
      </div>
    </div>
  );
}

export default AddressAndContacts;
