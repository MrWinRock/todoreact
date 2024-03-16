import React, { useState } from "react";
import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import Footer from "./components/Footer";

function App() {
  const [clicks, setClicks] = useState(null);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="App">
      <div className="bg-image">
      </div>
        <div className="popcat" onClick={handleClick}>Click Me!</div>
        <div className="clicked">{clicks}</div>
        <TodoWrapper />
        <Footer />
    </div>
  );
}

export default App;
