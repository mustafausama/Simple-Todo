import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean the room',
        completed: false
      },
      {
        id: 2,
        title: 'Eat launch',
        completed: false
      },
      {
        id: 3,
        title: 'Do the laundry',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
	this.setState({ todos: this.state.todos.map(todo => {
		if(todo.id === id) {
			todo.completed = !todo.completed;
		}
		return todo;
	})});
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
