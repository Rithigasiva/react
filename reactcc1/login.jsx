import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

function Loginwork() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handlesign = () => {
        navigate('/student'); 
    };
    const handleClick = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3000/students');
            const students = await response.json();
            
            const validUser = students.find(student => 
                student.student.email.trim() === username.trim() && 
                student.student.password.trim() === password.trim()
            );
            
    
            if (validUser) {
                navigate('/home1', { state: { email: validUser.student.email } }); 
            } else {
                setErrorMessage("Incorrect Username or Password."); 
            }
        } catch (error) {
            console.error('Error fetching students:', error);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };
    

    return (
        <div className="container">
        <div className="login-container">
            <center>
                <h1 className="login-header">Login</h1>
                <form onSubmit={handleClick} className="login-form">
                    <div className="login-fields">
                        <label className="login-label" htmlFor="username">Email:</label><br />
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login-input"
                            placeholder="Enter your name"
                            required
                        /><br />

                        <label className="login-label" htmlFor="password">Password:</label><br />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                            placeholder="Enter your password"
                            required
                        /><br />

                        {errorMessage && <p className="login-error">{errorMessage}</p>}<br />

                        <button type="submit" className="login-button">Login</button>
                    </div>
                </form>
                <p className="signup-text">Don't have an account?</p>
                <button className="signup-button" onClick={handlesign}>Register here!</button>
            </center>
        </div>
        </div>
    );
}

export default Loginwork;