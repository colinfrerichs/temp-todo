import "./TodoItem.css";

const TodoItem = ({
  id,
  title,
  note,
  completed,
  editTodoItem,
  toggleCompletedTodoItem,
}) => {
  return (
    <div className="item-container">
      <div className="item-checkbox">
        <label className="sr-only" htmlFor={`complete-${id}`}>
          Complete
        </label>
        <input
          name="complete"
          id={`complete-${id}`}
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompletedTodoItem(id)}
        />
      </div>
      <div className="item-inputs">
        <label className="sr-only" htmlFor={`title-${id}`}>
          Title
        </label>
        <input
          name="title"
          id={`title-${id}`}
          type="text"
          value={title}
          onChange={(e) => editTodoItem(id, { title: e.target.value })}
        />
        <label className="sr-only" htmlFor={`note-${id}`}>
          Note
        </label>
        <textarea
          name="note"
          id={`note-${id}`}
          value={note}
          onChange={(e) => editTodoItem(id, { note: e.target.value })}
        />
      </div>
    </div>
  );
};

export default TodoItem;
