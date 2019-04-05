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
            .then(resp => this.setState({friends: resp.data }))
            .catch(console.log)

        e.preventDefault();
    }

    deleteFriend = (friend) => {
      console.log(friend);
      axios
          .delete(`http://localhost:5000/friends/${friend.id}`)
          .then(resp => this.setState({friends: resp.data}))
          .catch(console.log)
    }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} onSubmit={this.onSubmit} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}

export default App;
