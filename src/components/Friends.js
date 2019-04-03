import React from 'react';

import Friend from './Friend';

const Friends = ({ friends }) => {
    console.log(friends);
    return (
        <>
        <h2>These are my friends</h2>
        { getFriends(friends)}
        </>
    );
}

const getFriends = friends => {
    return friends.map(friend => <Friend key={ friend.id } friend={friend} />)
}

export default Friends;