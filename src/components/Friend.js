import React from "react";

const Friend = ({ friend, deleteFriend, selectFriend }) => {
  return (
    <div className="friend">
      <div
        className="friendData"
        onClick={_ => selectFriend(friend)}
        style={{ display: "inline-block" }}
      >
        <span className="friendName">{friend.name}, </span>
        <span className="friendAge">age {friend.age}: </span>
        <span className="friendEmail">{friend.email}</span>
      </div>
      <span
        className="deleteFriend"
        onClick={_ => deleteFriend(friend)}
        friend={friend}
      >
        [x]
      </span>
    </div>
  );
};

export default Friend;
