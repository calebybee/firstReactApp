import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'reader'
    }
  }
  handleNameChange = (event) => {
    const value = event.target.value;
    this.setState({
      name: value
    });
  };
  render() {
    return (
      <div className="App">
        <input type={'test'} 
          placeholder={'Your name here'} 
          value={this.state.name} 
          onChange={this.handleNameChange}
        />
        <h1>Hello, {this.state.name}!</h1>
      </div>
    );
  }
}

export default App;
