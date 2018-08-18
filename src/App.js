import React, { Component } from 'react';
import logo from './logo.svg';
import Container from "./components/container"
import './App.css';
import Header from "./components/header"
import Body from "./components/body"
import friends from "./friends.json"

const shuffleFriends = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

class App extends React.Component {

  state = {
    friends,
    currentScore: 0,
    highScore: 0,
    selected: []
  }

  handleClick = id => {
    if (this.state.selected.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ selected: this.state.selected.concat(id) });
      console.log("good")
    } else {
      console.log("reset")      
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore
    });
    if (newScore > this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      selected: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };
  logger = () => console.log("click")
  render() {
    return(
      <div>
        <Header 
        currentScore = {this.state.currentScore}
        highScore = {this.state.highScore} />
        <Container>
          {friends.map(friend =>(
          <Body
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            click={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
          />
        ))}
        </Container>
      </div>
    )
}}
export default App;
