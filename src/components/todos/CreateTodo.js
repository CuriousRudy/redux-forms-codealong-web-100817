import React, { Component } from 'react';

class CreateTodo extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({ type: 'ADD_TODO', todo: this.state });
  };

  render() {
    const todos = this.props.store.getState().todos.map(todo => {
      return <li>{todo.text}</li>;
    });
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>add todo</label>
          <input onChange={e => this.handleChange(e)} type="text" name="text" />
          <input type="submit" />
          <p>{this.state.text}</p>
        </form>
        <div>{todos}</div>
      </div>
    );
  }
}

export default CreateTodo;
