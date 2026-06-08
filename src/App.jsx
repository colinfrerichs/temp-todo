import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import Button from "./components/Button/Button";
import TodoItem from "./components/TodoItem/TodoItem";

import { useTodos } from "./hooks/useTodos";

import "./App.css";

function App() {
  const [completedIsExpanded, setCompletedIsExpanded] = useState(false);
  const {
    activeTodos,
    completedTodos,
    addTodoItem,
    editTodoItem,
    toggleCompletedTodoItem,
  } = useTodos();

  const toggleCompletedIcon = () => {
    setCompletedIsExpanded((prev) => !prev);
  };

  return (
    <main className="container">
      <p className="task-header">My tasks</p>
      <section className="todos-active">
        <Button label="Add a task" addTodoItem={addTodoItem} />
        {activeTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleCompletedTodoItem={toggleCompletedTodoItem}
            editTodoItem={editTodoItem}
          />
        ))}
      </section>
      <section className="todos-complete">
        <div className="expand-completed">
          <p>Completed {`(${completedTodos.length})`}</p>
          <button onClick={toggleCompletedIcon}>
            {completedIsExpanded ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </button>
        </div>
        {completedIsExpanded &&
          completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleCompletedTodoItem={toggleCompletedTodoItem}
              editTodoItem={editTodoItem}
            />
          ))}
      </section>
    </main>
  );
}

export default App;
