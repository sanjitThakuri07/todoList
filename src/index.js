import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import TodoList from "./components/todoList";

const destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  destination
);
