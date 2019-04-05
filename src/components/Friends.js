import React from 'react';

import Friend from './Friend';
import FriendForm from './FriendForm';

const Friends = ({ friends, onSubmit, deleteFriend }) => {
    console.log(friends);
    return (
        <>
        <h2>These are my friends</h2>
            <FriendForm onSubmit={onSubmit}/>
        { getFriends(friends, deleteFriend)}
        </>
    );
}

const getFriends = (friends, deleteFriend) => {
    return friends.map(friend => <Friend key={ friend.id } friend={friend} deleteFriend={deleteFriend} />)
}

export default Friends;