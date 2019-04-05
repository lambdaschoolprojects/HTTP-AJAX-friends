import React from 'react';

const Friend = ({ friend, deleteFriend }) => {
    console.log(friend)
    return (
        <div className="friend">
            <span className="friendName">{friend.name}, </span>
            <span className="friendAge">age {friend.age}: </span>
            <span className="friendEmail">{friend.email}</span>
            <span className="deleteFriend" onClick={_ => deleteFriend(friend)} friend={friend}>[x]</span>
        </div>
    );
}

export default Friend;