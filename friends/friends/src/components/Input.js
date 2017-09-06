import React from 'react';

export default (props) => {
    return (
        <form className="add-form" onSubmit={props.handleAddFriend}>
            <div className="add-labels">
                <h2 className="add-lab">Add A Friend</h2>
            </div>
            <div className="add-input">
            <input placeholder="NAME" className="add-in" type="text" name="name"/>
            <input placeholder="AGE" className="add-in-age" type="number" name="age"/>
            <input placeholder="EMAIL" className="add-in" type="email" name="email"/>
            </div>
            <br/>
            <input className="submit" type="submit" value="SUBMIT"/>
        </form>
    )
} 