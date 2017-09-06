import axios from 'axios';

export const GET_FRIENDS = "GET_FRIENDS";
export const ADD_FRIEND = "ADD_FRIEND";
export const CHANGE_FRIEND = "CHANGE_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";


export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/friends');
    return {
        type: GET_FRIENDS,
        payload: promise
    }
}

export const addFriend = (name, age, email) => {
    const promise = axios.post('http://localhost:5000/new-friend/', {name, age, email} );
    return {
        type: ADD_FRIEND,
        payload: promise
    }
}

export const changeFriend = (i, name, age, email) => {
    const promise = axios.put('http://localhost:5000/update-friend', {
            index: i,
            update: {name, age, email}
    });
    return {
        type: CHANGE_FRIEND,
        payload: promise
    }
}

export const deleteFriend = (i) => {
    const promise = axios.delete('http://localhost:5000/delete-friend', {
        data: {
            index: i,
        }
    });
    return {
        type: DELETE_FRIEND,
        payload: promise
    }
}
