import React from 'react';
function Sidebar() {
  return (
    <div>
      <aside className="sidebar">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/students">Students</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/events">Schedule</a></li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
