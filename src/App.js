import { useRef } from "react";

export default function App() {
  console.log("render");
  const count = useRef(0);

  function handleClick() {
    count.current++;
    console.log(count.current);
  }
  return <button onClick={handleClick}>clic</button>;
}
