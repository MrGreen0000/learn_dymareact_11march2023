import { useLayoutEffect, useRef, useState } from "react";

function App() {
  const [width, setWidth] = useState(0);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const infos = buttonRef.current.getBoundingClientRect();
    setWidth(infos.width);
  }, []);

  return (
    <>
      <button ref={buttonRef}>Je suis un bouton</button>
      <p>{Math.floor(width)}</p>
    </>
  );
}

export default App;
