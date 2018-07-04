import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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
    
    
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <Persons
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler} /> 
      )
    }
    
    return (
      <div className={classes.App}>
      <Cockpit 
      showPersons={this.state.showPersons}
      persons = {this.state.persons}
      clicked={this.togglePersonsHandler} />
      {persons}
      </div>
    );
  }
}

export default App;