import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ onLogout, onSelectSection }) => {
  return (
    <div className={styles.sidebar}>
      <h2>Admin Panel</h2>
      <nav>
          <ul>
              <li onClick={() => onSelectSection('dashboard')}>Dashboard</li>
              <li onClick={() => onSelectSection('attractions')}>Attractions</li>
              <li onClick={() => onSelectSection('moderation')}>Moderation</li>
              <li onClick={() => onSelectSection('users')}>Users</li>
              <li onClick={() => onSelectSection('map')}>Map Management</li>
              <li onClick={onLogout} className={styles.logout}>Logout</li>
          </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
