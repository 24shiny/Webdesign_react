import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //without style command
import App from './App'; //.js omitted
// import MyClock from './MyClock';
// import reportWebVitals from './reportWebVitals';
// import Morning from './03/Morning';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
