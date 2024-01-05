import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" className="mr-15" />
      <button onClick={handleClick} className="btn btn-primary">
        focus input !
      </button>
    </>
  );
}
