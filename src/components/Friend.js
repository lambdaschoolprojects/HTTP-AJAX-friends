import React from 'react';

const Friend = ({ friend }) => {
    console.log(friend)
    return (
        <div className="friend">
            <span className="friendName">{friend.name}, </span>
            <span className="friendAge">age {friend.age}: </span>
            <span className="friendEmail">{friend.email}</span>
        </div>
    );
}

export default Friend;