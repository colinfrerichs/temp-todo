import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Button.css";

const Button = ({ label, addTodoItem }) => {
  return (
    <div
      className="btn-container"
      onClick={() => addTodoItem("New item", "Note...")}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon icon={faPlus} />
      <span>{label}</span>
    </div>
  );
};

export default Button;
