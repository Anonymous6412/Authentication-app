import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';  // Import Login component
import Register from './components/Register';  // Import Register component
import Home from './components/Home';  // Import Home component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/register" element={<Register />} /> {/* Register page route */}
      </Routes>
    </Router>
  );
};

export default App;
