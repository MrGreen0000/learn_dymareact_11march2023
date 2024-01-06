import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Dyma");
  console.log("render App");

  useEffect(() => {
    console.log("effectApp");
    document.title = title;
  }, [title]);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <>
      <h1>Hello world !</h1>
      <input
        type="text"
        onChange={handleChange}
        value={title}
        className="mr-15"
      />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </>
  );
}

export default App;
