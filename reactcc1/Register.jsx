import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './register.css';

function Register() {
    const [name, setName] = useState('');          
    const [studentId, setStudentId] = useState(''); 
    const [email, setEmail] = useState('');         
    const [program, setProgram] = useState('');     
       const [year, setYear] = useState('');           
    const [password, setPassword] = useState('');       
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();

        const newStudent = {
            student: {
                name: name,
                studentId: studentId,
                email: email,
                program: program,
                year: year,
                password: password
            },
            courses: [],      
            marks: [],
            events: [],
            examSchedule: [],
            progress: []
        };

        axios.post('http://localhost:3000/students', newStudent)
            .then((response) => {
                navigate('/'); 
            })
            .catch((error) => {
                console.error('Error registering student:', error);
                alert('Error during registration.');
            });
    };

    return (
        <div className='reg'>
            <form onSubmit={handleClick} className="register-form">
                <h2 className="register-title">Register</h2>
                
                <center><label>Name:</label></center>
                <br />
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="register-input"
                    required
                />
                
                <center><label id="studentId">Student ID:</label></center>
                <br />
                <input
                    type="text"
                    placeholder="Enter Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="register-input"
                    required
                />
                
                <center><label id="email">Email:</label></center>
                <br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="register-input"
                    required
                />
                
                <center><label id="program">Program:</label></center>
                <br />
                <input
                    type="text"
                    placeholder="Enter Program (e.g., B.Sc. IT)"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="register-input"
                    required
                />
                
                <center><label id="year">Year:</label></center>
                <br />
                <input
                    type="text"
                    placeholder="Enter Year (e.g., 1st Year)"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="register-input"
                    required
                />
                
                <center><label id="password">Password:</label></center>
                <br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="register-input"
                    required
                />
                
                <button type="submit" className="register-button">Sign Up</button>
            </form>
        </div>
    );
}

export default Register;
