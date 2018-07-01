import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons : [
      {name:"Max", age:"28"},
      {name:"Manu", age:"29"},
      {name:"Steph", age:"26"},
    ],
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name:newName, age:"29"},
        {name:"Manu", age:"30"},
        {name:"Steph", age:"27"},
      ],
    });
  }
  changedHandler = (event) => {
    this.setState({
      persons: [
        {name:"newName", age:"29"},
        {name:event.target.value, age:"30"},
        {name:"Steph", age:"27"}
      ]
    })
  }
  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer'
    };
    return (
      <div className="App">
      <h1>Hi, I'm a react App</h1>
      <button style={btnStyle} onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      changed={this.changedHandler}>
      <span>My Hobbies: Racing</span>
      </Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;