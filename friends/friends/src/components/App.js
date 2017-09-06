import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import FriendsList from './FriendsList';
import Input from './Input';
import { bindActionCreators } from 'redux';
import { getFriends, addFriend, changeFriend, deleteFriend } from '../actions';

class App extends Component {
componentWillMount() {
  this.props.getFriends();
}

handleAddFriend(e) {
  e.preventDefault();
  this.props.addFriend(e.target.name.value, e.target.age.value, e.target.email.value);
  e.target.name.value = '';
  e.target.age.value = '';
  e.target.email.value = '';
}
handleClick(e) {
  e.target.type = "text";
}
handleBlur(e) {
  e.target.type = "reset";
}
handleChangeFriend(e, ind) {
  e.preventDefault();
  e.target.name.blur();
  e.target.age.blur();
  e.target.email.blur();
  this.props.changeFriend(ind, e.target.name.value, e.target.age.value, e.target.email.value)
} 
handleDeleteFriend(e, index) {
  this.props.deleteFriend(index);   
}
  render() {
    return (
      <div className="App">
        <Input 
          handleAddFriend={this.handleAddFriend.bind(this)}  
        />
        <FriendsList 
          friends={this.props.friends}
          handleChangeFriend={this.handleChangeFriend.bind(this)}
          handleDeleteFriend={this.handleDeleteFriend.bind(this)}
          handleClick={this.handleClick.bind(this)}
          handleBlur={this.handleBlur.bind(this)}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFriends,
    addFriend,
    changeFriend,
    deleteFriend,
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);


