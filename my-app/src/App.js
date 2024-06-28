import React from 'react';
import './App.css';
import PortPic from './PortPic.png';

function About() {
    return (
        <div>
            <div id="about_me">
                <h1>About Me</h1>
                <p>
                    Hi, my name is Alex Sanchez and I am a Computer Science and Engineering Undergraduate at UC Merced. I am a dedicated and hardworking individual who is passionate about software development and technology. I am a quick learner and I am always looking for new opportunities to learn and grow. I am currently looking for an internship in software development to further my skills and knowledge in the field.
                </p>
            </div>

            <div id="skills">
                <h1>Skills</h1>
                <div className="skill-container"><p className="skill">SQL</p></div>
                <div className="skill-container"><p className="skill">Python</p></div>
                <div className="skill-container"><p className="skill">C++/C</p></div>
                <div className="skill-container"><p className="skill">HTML/CSS</p></div>
                <div className="skill-container"><p className="skill">JavaScript</p></div>
            </div>

            <div id="projects">
                <h1>Projects</h1>
                <div className="project">
                    <h2>Project 1</h2>
                    <p>
                        Description of Project 1
                    </p>
                </div>
        </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <div className="wave-container">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className="context">
                <header>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                    <div id="nav">
                        <a href="https://www.linkedin.com/in/alex-sanchez-8251ab239/" className="button">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/SuperBons" className="button">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                    <h3 id="hello">Hello, I'm</h3>
                    <h2 id="Main_name">Alex Sanchez</h2>
                    <h2 id="major">Computer Science and Engineering Undergraduate @ UC Merced</h2>
                    <img src={PortPic} alt="Alex Sanchez" id="profile_pic"/>
                </header>
                <About />
            </div>
        </div>
    );
}

export default App;