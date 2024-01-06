import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  const realRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realRef.current.focus();
    },
  }));

  return <input ref={realRef} type="text" className="mr-15" />;
});

function App() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.borderColor = "red";
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick} className="btn btn-primary">
        focus me !
      </button>
    </>
  );
}

export default App;
