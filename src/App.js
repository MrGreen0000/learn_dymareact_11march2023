import { useRef, useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  let timeoutId = useRef(null);

  function handleChange(e) {
    setValue(e.target.value);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      console.log(value);
    }, 3000);
  }

  return <input type="text" value={value} onChange={handleChange} />;
}
