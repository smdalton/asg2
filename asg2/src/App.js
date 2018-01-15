import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import Char from './Char/Char'

class App extends Component {
  
  state= {
    userInput: ''
  }

  inputChangedHandler= (event)=>{
    this.setState({userInput:event.target.value})
  }

  deleteCharHandler = (charIndex)=>{
    const text = this.state.userInput.split('')
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})

  }
  
  
  render() {
    // Make the variable up here for ease of access and to reduce clutter later
    const chars = this.state.userInput.split('').map((char, index) => {
      return <Char 
      character={char}
      key={index}
      clicked={() => this.deleteCharHandler(index)} />;
    });
    
    return (
     
      <div className="App">
      <p>Input field below here</p>
      <hr/>
       <input type="text" onChange={(event)=> this.inputChangedHandler(event)} value={this.state.userInput} />
       <hr />
       <p>Your Typed text: {this.state.userInput}</p>
       <ValidationComponent len={this.state.userInput.length}/>
        <div>
          {chars};
        </div>
      </div>
    );
  }
}

export default App;
