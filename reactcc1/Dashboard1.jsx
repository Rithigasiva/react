import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App1.css';

const App1 = () => {
  const location = useLocation();
  const { email } = location.state || {}; 
  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  const [marks, setMarks] = useState([]);
  const [additionalEvents, setAdditionalEvents] = useState([]);
  const [examSchedule, setExamSchedule] = useState([]);
  const [progress, setProgress] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/students');
        const students = await response.json();

        const user = students.find(student => student.student.email === email);

        if (user) {
          setStudent(user.student);
          setCourses(user.courses || []);
          setMarks(user.marks || []);
          setAdditionalEvents(user.additionalEvents || []); 
          setExamSchedule(user.examSchedule || []);
          setProgress(user.progress || []);
          setEditableStudent(user.student);
        } else {
          console.error('User not found');
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [email]); 
  const handleEditClick = () => {
    setEditMode(!editMode);
    setEditableStudent({ ...student });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSaveClick = () => {
  //   setStudent({ ...editableStudent });
  //   setEditMode(false);
  // };
  const handleSaveClick = async () => {
    try {
      // First, fetch all students to find the one with the correct studentId
      const response = await fetch('http://localhost:3000/students');
      const students = await response.json();
  
      // Find the student with the matching studentId
      const studentToUpdate = students.find(student => student.student.studentId === editableStudent.studentId);
  
      if (!studentToUpdate) {
        console.error('Student not found!');
        return;
      }
  
      // Make a PUT request to update this student
      const updateResponse = await fetch(`http://localhost:3000/students/${studentToUpdate.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...studentToUpdate, student: editableStudent }),  // Update the nested student object
      });
  
      if (updateResponse.ok) {
        const updatedStudent = await updateResponse.json();
        setStudent(updatedStudent.student);  // Update the state with the latest student data
        setEditMode(false);  // Exit edit mode
      } else {
        console.error('Failed to update student data. Status:', updateResponse.status);
      }
    } catch (error) {
      console.error('Error while saving student data:', error);
    }
  };
  
  
  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {student.name}</h1>
        <p>ID: {student.studentId} | {student.program}, {student.year}</p>
      </header>

      <main className="dashboard-content">
        <section className="student-details">
          <h2>Your Details</h2>
          {editMode ? (
            <div className='an'>
              <label>
                <strong>Name:</strong>
                <input
                  type="text"
                  name="name"
                  value={editableStudent.name}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                <strong>Email:</strong>
                <input
                  type="email"
                  name="email"
                  value={editableStudent.email}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                <strong>Program:</strong>
                <input
                  type="text"
                  name="program"
                  value={editableStudent.program}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                <strong>Year:</strong>
                <input
                  type="text"
                  name="year"
                  value={editableStudent.year}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          ) : (
            <ul>
              <li><strong>Name:</strong> {student.name}</li>
              <li><strong>Student ID:</strong> {student.studentId}</li>
              <li><strong>Email:</strong> {student.email}</li>
              <li><strong>Program:</strong> {student.program}</li>
              <li><strong>Year:</strong> {student.year}</li>
              <button onClick={handleEditClick}>Edit Details</button>
            </ul>
          )}
        </section>

        <section className="progress-section">
          <h2>Your Progress</h2>
          {progress.map((prog, index) => (
            <div key={index}>
              <strong>{prog.course}:</strong> {prog.completion}% completed
              <progress value={prog.completion} max="100" />
            </div>
          ))}
        </section>

        <section className="up">
          <h2>Upcoming Events</h2>
          <ul>
            {additionalEvents.length > 0 ? (
              additionalEvents.map((event, index) => (
                <li key={index}>
                  <strong>{event.title}</strong> - {event.date}
                </li>
              ))
            ) : (
              <li>No events available</li>
            )}
          </ul>
        </section>

        <section className="exam-schedule">
          <h2>Exam Schedule</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {examSchedule.map((exam, index) => (
                <tr key={index} >
                  <td>{exam.course}</td>
                  <td>{exam.date}</td>
                  <td>{exam.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="enrolled-courses">
          <h2>Your Courses</h2>
          <ul>
            {courses.map((course, index) => (
              <li key={index} style={{color:'black'}}>
                <strong>{course.code}:</strong> {course.name} ({course.credits} credits)
              </li>
            ))}
          </ul>
        </section>

        <section className="marks">
          <h2>Your Marks</h2>
          <ul>
            {marks.map((mark, index) => (
              <li key={index} style={{color:'black'}}>
                <strong>{mark.course}:</strong> {mark.score}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App1;
