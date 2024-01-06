import { useState } from "react";
import Calendar from "./Calendar";

function App() {
  console.log("render App");
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <Calendar count={count} />
    </>
  );
}

export default App;
