import React, { Component } from 'react';

import TitleAndIcons from './Sections/TitlesAndIcons';
import AboutSection from './Sections/AboutSection';
import SkillSection from './Sections/SkillSection';


import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <TitleAndIcons  />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
