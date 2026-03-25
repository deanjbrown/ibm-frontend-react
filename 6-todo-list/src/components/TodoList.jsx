import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});

  // Add a todo
  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  };

  // Delete a todo
  const handleDeleteTodo = (index) => {
    // Create a copy of the current todo list
    const newTodos = [...todos];
    // Remove the todo at the specified index
    newTodos.splice(index, 1);
    // Update state with the new array
    setTodos(newTodos);
  };

  // Handle list input change
  const handleListInputsChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };

  // Add a list
  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== "") {
      // Create a copy of the current todo list
      const newTodos = [...todos];
      // Add the new list item to the corresponding heading's list
      newTodos[index].lists.push(listInputs[index]);
      // Update the todos state with the new list item
      setTodos(newTodos);
      // Clear the input field for that index
      setListInputs({ ...listInputs[index], [index]: "" });
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {
              setHeadingInput(e.target.value);
            }}
          />
          <button className="add-list-button" onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>

      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button
                className="delete-button-heading"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete Heading
              </button>
            </div>
            <div className="add_list">
              <input
                type="text"
                className="list-input"
                placeholder="Add List"
                value={listInputs[index] || ""}
                onChange={(e) => handleListInputsChange(index, e.target.value)}
              />
              <button
                className="add-list-button"
                onClick={() => handleAddList(index)}
              >
                Add List
              </button>
            </div>
            <ul>
              {todo.lists.map((list, listIndex) => (
                <li key={listIndex} className="todo_inside_list">
                  <p>{list}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
