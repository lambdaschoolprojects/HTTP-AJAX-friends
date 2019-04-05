import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Friends from './components/Friends';



class App extends Component {
  state = {
    friends: [],
      response: "",
      selectedFriend: null
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
      let existingFiend = this.state.friends.find(myFriend => myFriend.id === friend.id)
        if (existingFiend) this.updateFriend(existingFiend)
        else
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

    updateFriend = friend => {
      console.log("updating");
      axios
          .put(`http://localhost:5000/friends/${friend.id}`, friend)
          .then(resp => this.setState({ friends: resp.data}))
          .catch(console.log)
    }

    selectFriend = friend => {
      this.setState({ selectedFriend: friend });
    }

  render() {
    return (
      <div className="App">
        <Friends selectedFriend={this.state.selectedFriend} friends={this.state.friends} onSubmit={this.onSubmit} deleteFriend={this.deleteFriend} selectFriend={this.selectFriend}/>
      </div>
    );
  }
}

export default App;
