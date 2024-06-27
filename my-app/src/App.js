import React from 'react';
import './App.css';
import PortPic from './PortPic.png';

function App() {
  return (
    <div>
      <header>
        <h3 id="hello">Hello, i'm</h3>
        <h2 id="Main_name">Alex Sanchez</h2>
        <h2 id = "major"> Computer Science and Engineering Undergraduate</h2>
        <img src={PortPic} alt="Alex Sanchez" id="profile_pic"/>
        <div id="links">
          <a href="https://www.linkedin.com/in/alexsanchez/" className="button">LinkedIn</a>
          <a href="https://github.com/alexsanchez" className="button">GitHub</a>
        </div>
      </header>
      <title>Resume Portfolio</title>
    </div>
  );
}

export default App;