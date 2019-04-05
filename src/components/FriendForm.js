import React, { Component } from 'react';

class FriendForm extends Component {
    state = {
        friend: {
            name: "",
            age: "",
            email: ""
        }
    }

    render() {
        return (
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="age" placeholder="Age" />
                <input type="text" name="email" placeholder="Email" />
                <button>Add friend</button>
            </form>
        );
    }
}

export default FriendForm;