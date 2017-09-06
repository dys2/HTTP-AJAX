import { combineReducers } from 'redux';
import { GET_FRIENDS, ADD_FRIEND, CHANGE_FRIEND, DELETE_FRIEND } from '../actions';

const friends = (state = [], action) => {
    switch(action.type) {
        case GET_FRIENDS:
            return action.payload.data;
        case ADD_FRIEND:
            return action.payload.data;
        case CHANGE_FRIEND:
            return action.payload.data;
        case DELETE_FRIEND:
            return action.payload.data;
        default:
            return state;
    }
}

export default combineReducers({friends});