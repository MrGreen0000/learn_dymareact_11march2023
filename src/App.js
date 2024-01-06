import { useMemo, useState } from "react";

function App() {
  console.log("render App");
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);

  function complexeCalculayion(list) {
    console.log("complexe function invocation");
    return list.map((l) => {
      for (let i = 0; i < 100000; i++) {
        l = i;
      }
      return l;
    });
  }

  const complexeList = useMemo(() => {
    console.time("computation");
    const res = complexeCalculayion(list);
    console.timeEnd("computation");
    return res;
  }, [list]);

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={() => {
          setList([...list, value]);
          setValue(0);
        }}
      >
        Add to list
      </button>
      <ul>
        {complexeList.map((cl, i) => (
          <li key={i}>{cl}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
