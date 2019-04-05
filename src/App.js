import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Friends from './components/Friends';



class App extends Component {
  state = {
    friends: [],
      response: ""
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = _ => {
      axios
          .get("http://localhost:5000/friends")
          .then(resp => {
              this.setState({ friends: resp.data })
          })
          .catch(console.log)
  }

    onSubmit = (e, friend) => {
        axios
            .post("http://localhost:5000/friends", friend)
            .then(_ => this.getFriends())
            .catch(console.log)

        e.preventDefault();
    }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
