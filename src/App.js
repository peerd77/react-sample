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
  
  deletePersonHandler = index => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
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
      {this.state.persons.map((person, index) => {
          return (
            <Person 
            name={person.name} 
            age={person.age} 
            click={ () => this.deletePersonHandler(index)}/>
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