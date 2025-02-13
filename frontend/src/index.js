import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const port = process.env.PORT || 3000;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';  // Your global CSS (if any)
// import App from './App';  // Import App.js

// ReactDOM.render(
//   <React.StrictMode>
//     <App /> {/* Renders the App component */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
