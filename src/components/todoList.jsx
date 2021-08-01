import React from "react";

import { Component } from "react";

import TodoItems from "./todoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.AddSubmitHandler = this.AddSubmitHandler.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  AddSubmitHandler(e) {
    e.preventDefault();

    if (this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }
  }

  deleteItem(key) {
    console.log(key);
    const filteredItems = this.state.items.filter((item) => item.key !== key);

    this.setState((prevState) => {
      return {
        items: filteredItems,
      };
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.AddSubmitHandler}>
            <input
              type="text"
              placeholder="Enter Task"
              name="task"
              ref={(a) => (this._inputElement = a)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        {/* show list */}

        {this.state.items.length ? (
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
        ) : (
          <p className="noList-text">
            No Taks Created.<strong> Create New Task </strong>
          </p>
        )}
      </div>
    );
  }
}

export default TodoList;
