import React from 'react';

import Friend from './Friend';
import FriendForm from './FriendForm';

const Friends = ({ friends, onSubmit, deleteFriend, selectFriend, selectedFriend }) => {
    console.log(friends);
    return (
        <>
        <h2>These are my friends</h2>
            <FriendForm onSubmit={onSubmit} numFriends={friends.length} selectedFriend={selectedFriend}/>
        { getFriends(friends, deleteFriend, selectFriend)}
        </>
    );
}

const getFriends = (friends, deleteFriend, selectFriend) => {
    return friends.map(friend => <Friend key={ friend.id } friend={friend} deleteFriend={deleteFriend} selectFriend={selectFriend} />)
}

export default Friends;