import { useState, memo, useCallback } from "react";
import PropTypes from "prop-types";

const AddTodo = memo(({ addTodo }) => {
  console.log("render addTodo");
  const [value, setValue] = useState("");

  AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => addTodo(value)}>add</button>
    </>
  );
});

function App() {
  console.log("render App");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(
    (value) => {
      setTodos([...todos, value]);
    },
    [todos]
  );

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
