import React from 'react';


import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
     
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Classroom-Scheduler</a>
          </div>
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/shubhmore96/CDAC-Project.git" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>This page is under Construction</h1>
            <p><h2>Please check back to know more. Shoot us an email if you're curious.</h2></p>
          </div>
          <a href="mailto:user@example.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        
      </div>
    );
  }
}

export default App;