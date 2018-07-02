import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons : [
      {id:"sdfsdf2", name:"Max", age:"28"},
      {id:"ssdf978ig", name:"Manu", age:"29"},
      {id:"2345ghj", name:"Steph", age:"26"},
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
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIdx = persons.findIndex(v => v.id === id);
    const person = {...persons[personIdx]};
    person.name = event.target.value;
    persons[personIdx] = person;
    this.setState({persons: persons});
  }

  render() {
    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
      <div>
      {this.state.persons.map((person, index) => {
          return (
            <Person 
            name={person.name} 
            age={person.age} 
            click={ () => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          )
        }
      )}
    </div>
    )
    btnStyle.backgroundColor = 'red';
  }
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