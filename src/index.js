// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = (
  <div>
    <h1>Bonjour de Dyma</h1>
    <h2>
      Il est exactement {new Date().toLocaleTimeString()} lors de l'exécution.
    </h2>
  </div>
);

setInterval(() => root.render(element





  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
), 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
