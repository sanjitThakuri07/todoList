import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li key={item.key}>
        {item.text}
        <span className="delete" onClick={() => this.delete(item.key)}>
          <i className="fas fa-trash"></i>
        </span>
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    console.log(this.props);
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
