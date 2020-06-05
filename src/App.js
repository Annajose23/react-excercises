import React, { Component } from 'react';
import "./App.css";
import UserOutput from "./components/userOutput";
import UserInput from "./components/userInput";

class App extends Component {
  state = {
    username:"Anna"
    };

    handleChange = (e) => {
       this.setState({username:e.target.value});
    }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserInput change = {this.handleChange}/>
      </div>
    );
  }
}

export default App;
