import React from 'react';
function Dashboard() {
  return (
    <div>
    
    <main className="dashboard">
      <div className="stats-cards">
        <div className="card">
          <h3>Total Students</h3>
          <p>5200</p>
        </div>
        <div className="card">
          <h3>New Admissions</h3>
          <p>250</p>
        </div>
        <div className="card">
          <h3>Courses Offered</h3>
          <p>27</p>
          </div>
        <div className="card">
          <h3>Attendance Report</h3>
           <p>94%</p>
        </div>
        <div className="card">
          <h3>Average working hours</h3>
          <p>170hrs/month</p>
        </div>
        <div className="card">
          <h3>Pending Reports</h3>
          <p>51</p>
        </div>
      </div>
    </main>
    </div>
  );
}

export default Dashboard;
