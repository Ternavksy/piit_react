import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import LoginForm from './components/Auth/LoginForm';
import DashboardPage from './components/Dashboard/DashboardPage';
import AttractionsPage from './components/Attractions/AttractionsPage';
import UsersPage from './components/Users/UsersPage';
import ModerationPage from './components/Moderation/ModerationPage';
import Main from './components/Main/Main'; // Заглушка
import './App.css'; // Импортируем стили

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null); // Храним текущий раздел

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedSection(null); // Сбрасываем текущий раздел при выходе
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'dashboard':
        return <DashboardPage />;
      case 'attractions':
        return <AttractionsPage />;
      case 'moderation':
        return <ModerationPage />;
      case 'users':
        return <UsersPage />;
      case 'map':
        return <MapPage />;
      default:
        return (
            <div className="placeholder">
              <h2>Please select a section from the menu</h2>
            </div>
        );
    }
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
      <div className="appContainer">
        {/* Sidebar */}
        <Sidebar onLogout={handleLogout} onSelectSection={setSelectedSection} />

        {/* Main content */}
        <div className="contentArea">
          {renderSection()}
        </div>
      </div>
  );
};

export default App;
