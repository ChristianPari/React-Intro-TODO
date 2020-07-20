// import React from 'react';
import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

// class setup
class App extends Component {
  
  // preset data being used within the app in place of data gathered from an API Database
    state = { 
      todos: [
      {
        id: 1,
        title: "Take trash out",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with Boss",
        completed: false
      }
    ]
  }

  // toggles the completed property from the state todos property either complete to true or false
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo =>
      todo.id !== id)] })
  }

  // render is needed to generate the App
  render() {
      return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={ this.markComplete }delTodo={ this.delTodo } />
      </div>
    );
  }
}
export default App;
