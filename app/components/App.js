import React from 'react';
import Login from './Login';
import Signup from './Signup';
import IdeaTimeline from './IdeaTimeline';
import MiniProfile from './MiniProfile';

class App extends React.Component {
  render() {
    return (
      <div className="container">
          <Login/>
          <Signup/>
          <IdeaTimeline/>
          <MiniProfile/>
      </div>
    );
  }
};

export default App;
