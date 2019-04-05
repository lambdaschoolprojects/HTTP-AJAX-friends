import React from 'react';

import Friend from './Friend';
import FriendForm from './FriendForm';

const Friends = ({ friends }) => {
    console.log(friends);
    return (
        <>
        <h2>These are my friends</h2>
            <FriendForm/>
        { getFriends(friends)}
        </>
    );
}

const getFriends = friends => {
    return friends.map(friend => <Friend key={ friend.id } friend={friend} />)
}

export default Friends;