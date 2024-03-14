import React from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TodoWrapper  />
      <Footer />
    </div>
  );
}

export default App;