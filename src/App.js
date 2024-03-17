import React, { useState } from "react";
import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <TodoWrapper />
        <Footer />
    </div>
  );
}

export default App;
