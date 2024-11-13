import React, { useState, useEffect } from 'react';
import './stu.css';
import axios from 'axios';

function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      alert('Please fill out all fields');
      return;
    }

    const newStudent = {
      name,
      email,
      phone,
      address,
    };

    try {
      // Here, we're using the POST method to add a new student.
      const response = await axios.post('http://localhost:3000/users' ,newStudent);
      
      // The response.data will contain the newly created student object including the id
      setStudents([...students, response.data]);
    } catch (error) {
      console.error('Error adding student:', error);
    }

    // Clear the input fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className='student-management-container'>
      <h2 style={{ color: "white" }}>Student Management</h2>
      <form onSubmit={handleAddStudent}>
        <div>
          <label htmlFor="name" className="student-management-label">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="student-management-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="student-management-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="student-management-input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="student-management-label">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="student-management-input"
          />
        </div>
        <div>
          <label htmlFor="address" className="student-management-label">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="student-management-input"
          />
        </div>
        <button type="submit" className="student-management-add-button">Add Student</button>
      </form>

      <h3 className="student-management-list-header">Student List</h3>
      <ul className="student-management-list">
        {students.map((student) => (
          <li key={student.id} className="student-management-list-item">
            {student.name} - {student.email}
            <button
              onClick={() => handleDeleteStudent(student.id)}
              className="student-management-delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentManagement;
