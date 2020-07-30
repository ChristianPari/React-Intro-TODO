import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        // using the map method to serve as a for loop to then access and display the desired data from the TodoItem component which gets it's info from the Todos property which gathered it's info from the state object todos property of the main App component

        return this.props.todos.map((todo) => ( <
            TodoItem key = { todo.id }
            todo = { todo }
            markComplete = { this.props.markComplete }
            delTodo = { this.props.delTodo }
            />
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;