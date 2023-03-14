import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Hello from "./Hello";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Hello name="Jean" age={18} />

  </>
);

reportWebVitals();
