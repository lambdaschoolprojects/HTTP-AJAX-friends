import React, { Component } from 'react';
import axios from 'axios';

class FriendForm extends Component {
    state = {
        friend: {
            name: "",
            age: "",
            email: ""
        }
    }

    changeHandler = e => {
        let { name, value } = e.target;
        this.setState((prevState) => {
            prevState.friend[name] = value;

            return prevState;
        })
    }

    render() {
        let { name, age, email } = this.state.friend;
        return (
            <form onSubmit={e => this.props.onSubmit(e, this.state.friend)}>
                <input type="text" name="name" placeholder="Name" onChange={ this.changeHandler } value={name}/>
                <input type="text" name="age" placeholder="Age" onChange={ this.changeHandler } value={age}/>
                <input type="text" name="email" placeholder="Email" onChange={ this.changeHandler } value={email} />
                <button>Add friend</button>
            </form>
        );
    }
}

export default FriendForm;