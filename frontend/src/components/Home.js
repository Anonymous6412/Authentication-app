// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Homepage!</h1>
//       <nav>
//         <Link to="/login">Go to Login</Link> <br />
//         <Link to="/register">Go to Register</Link>
//       </nav>
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import { Link } from "react-router-dom";
// import { FaUser, FaSignInAlt } from "react-icons/fa"; // FontAwesome icons

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Welcome to Our Authentication App</h1>
//         <p>Your secure portal for login and registration</p>
//         <div className="buttons">
//           <Link to="/login" className="btn login-btn">
//             <FaSignInAlt /> Login
//           </Link>
//           <Link to="/register" className="btn register-btn">
//             <FaUser /> Register
//           </Link>
//         </div>
//       </section>

//       {/* Feature Section */}
//       <section className="features">
//         <div className="feature-box">
//           <h3>Secure Login</h3>
//           <p>Fast and secure authentication with JWT tokens.</p>
//         </div>
//         <div className="feature-box">
//           <h3>Easy Registration</h3>
//           <p>Sign up in just a few seconds and get started!</p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer>
//         <p>&copy; 2025 Authentication App. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt } from "react-icons/fa"; // FontAwesome icons
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Authentication App</h1>
        <p>Your secure portal for login and registration</p>
        <div className="buttons">
          <Link to="/login" className="btn login-btn">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/register" className="btn register-btn">
            <FaUser /> Register
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="features">
        <div className="feature-box">
          <h3>Secure Login</h3>
          <p>Fast and secure authentication with JWT tokens.</p>
        </div>
        <div className="feature-box">
          <h3>Easy Registration</h3>
          <p>Sign up in just a few seconds and get started!</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Authentication App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

