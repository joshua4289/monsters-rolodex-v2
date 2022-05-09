import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    // call super for proper initialization 
    super();

    this.state = {
      monsters : [
        {name:'Linda',id:"1#$ca"},
        {name:'Jacky',id:"1#$cb"},
        {name:'Josh',id:"1#$ca"},
        {name:'Joshua',id:"1#$cc"},
        {name:'Joshua',id:"1#$cd"}

,
      ]
  };
}; // end of costructor

  render(){
  return (
    <div className='App'>
      {this.state.monsters.map((monster) => { 
        
        return <h1 key={monsters.id}>{monster.name}</h1>
        
        }
        )}

    </div>
  )
  }
}

export default App;
