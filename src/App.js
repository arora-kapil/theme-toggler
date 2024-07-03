import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>Theme Toggler</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
    </div>
  );
}

export default App;
