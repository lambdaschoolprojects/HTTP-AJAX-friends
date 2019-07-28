import React, { Component } from "react";

class FriendForm extends Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidUpdate() {
    if (
      this.props.selectedFriend &&
      this.props.selectedFriend.id != this.state.friend.id
    ) {
      this.setState({ friend: this.props.selectedFriend });
    }
  }

  changeHandler = e => {
    let { name, value } = e.target;
    this.setState(prevState => {
      prevState.friend[name] = value;

      return prevState;
    });
  };

  onHandleSubmit = e => {
    this.props.onSubmit(e, this.state.friend);
    this.setState({ friend: { name: "", age: "", email: "" } });
  };

  render() {
    let { name, age, email } = this.state.friend;
    return (
      <form onSubmit={e => this.onHandleSubmit(e)}>
        <input
          type="text"
          name="id"
          disabled
          value={this.state.friend.id ? this.state.friend.id : "auto"}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.changeHandler}
          value={name}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={this.changeHandler}
          value={age}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.changeHandler}
          value={email}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default FriendForm;
