import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const apiUrl = 'http://localhost:3000/courseNames';

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(apiUrl);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    if (!courseName) {
      alert('Please enter a course name');
      return;
    }

    const newCourse = { name: courseName };

    try {
      const response = await axios.post(apiUrl, newCourse);
      setCourses([...courses, response.data]);
      setCourseName(''); 
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setCourses(courses.filter((course) => course.id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="course-management-container">
      <h2 style={{ color: "white" }}>Course Management</h2>

      <form onSubmit={handleAddCourse}>
        <div>
          <label htmlFor="courseName" className="course-management-label" style={{color:"white"}}>Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            className="course-management-input"
          />
        </div>
        <button type="submit" className="course-management-add-button">Add Course</button>
      </form>

      <h3 className="course-management-list-header" style={{color:"white"}}>Course List</h3>
      <ul className="course-management-list">
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.id} className="course-management-list-item">
              {course.name}
              <button
                onClick={() => handleDeleteCourse(course.id)}
                className="course-management-delete-button"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </ul>
    </div>
  );
}

export default CourseManagement;
