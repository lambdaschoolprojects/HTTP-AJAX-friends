import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Friends from './components/Friends';



class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
        .get("http://localhost:5000/friends")
        .then(resp => {
          this.setState({ friends: resp.data })
        })
        .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
