import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <p>{count}</p>;
}

function App() {
  return <Timer />;
}

export default App;
