import React from 'react';
import './main.css';
import Header from './components/Header';
import Objective from './components/Objective';
import TechnicalSkills from './components/TechnicalSkills';
import SoftSkills from './components/SoftSkills';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <div className="line">
        <Header />
        <Objective />
        <TechnicalSkills />
      </div>
      <div className="line">
        <SoftSkills />
        <Education />
        <Projects />
      </div>
    </div>
  );
}

export default App;