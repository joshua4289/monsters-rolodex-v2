import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    // call super for proper initialization 
    super();

    this.state = {
    monsters : []
  };
}; // end of costructor

componentDidMount(){
    // Users from the API
  console.log('Componentdidmount');
  fetch("https://jsonplaceholder.typicode.com/users").
  then(response => response.json()).
  then(users => this.setState( () => {return {monsters: users}}));

       
}

  render(){
  return (
    <div className='App'>
      {this.state.monsters.map((monster) => { 
        
        return <h1 key={monster.id}>{monster.name}</h1>
        
        }
        )}

    </div>
  )
  }
}

export default App;
