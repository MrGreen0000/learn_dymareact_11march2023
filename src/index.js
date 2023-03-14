import ReactDOM from "react-dom/client";
import "./index.css";

import Hello from "./Hello";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Hello>
      <button>Submit</button>
    </Hello>

  </>
);

