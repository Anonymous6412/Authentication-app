import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirection
import './Register.css'; // Import the CSS file


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Redirect after successful registration

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://authentication-app-backend-fo05.onrender.com/api/auth/register", { username, password });
            setMessage(response.data.message);  // Success message

            // Save token to localStorage or use it immediately
            localStorage.setItem('token', response.data.token);

            // Redirect to login page after successful registration
            navigate('/login');
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage('An unexpected error occurred');
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
