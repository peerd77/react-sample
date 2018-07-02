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
    showPersons: false
  }
  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
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

    let persons = null;
    if (this.state.showPersons)
      persons = (
      <div>
      {this.state.persons.map(person => {
          return (
            <Person name={person.name} age = {person.age}/>
          )
        }
      )}
    </div>
    )
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;