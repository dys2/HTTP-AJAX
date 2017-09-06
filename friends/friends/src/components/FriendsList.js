import React from 'react';
import Friend from './Friend';

export default (props) => {
    return (
        <div className="friends-list-container">
            <h1>My Friends</h1>
            <ul className="list">
                {props.friends.map((friend, i) => {
                    return (
                        <Friend 
                            key={i} 
                            i={i}
                            name={friend.name}
                            age={friend.age}
                            email={friend.email}
                            display={friend.display}
                            handleChangeFriend={props.handleChangeFriend}
                            handleDeleteFriend={props.handleDeleteFriend}
                            handleClick={props.handleClick}
                            handleBlur={props.handleBlur}
                        />
                    )
                })}
            </ul>
        </div>
    )
}