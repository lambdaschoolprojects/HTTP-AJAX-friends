import React from 'react';

const Friend = ({ friend, deleteFriend, selectFriend }) => {
    console.log(friend)
    return (
        <div className="friend">
            <div className="friendData" onClick={_ => selectFriend(friend)} style={{display: "inline-block"}}>
            <span className="friendId">{ friend.id } </span>
            <span className="friendName">{friend.name}, </span>
            <span className="friendAge">age {friend.age}: </span>
            <span className="friendEmail">{friend.email}</span>
            </div>
            <span className="deleteFriend" onClick={_ => deleteFriend(friend)} friend={friend}>[x]</span>
        </div>
    );
}

export default Friend;