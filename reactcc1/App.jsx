
import React from 'react';
import Navbar from './sims/Navbar';
import Sidebar from './sims/Sidebar';
import Dashboard from './sims/Dashboard';
import './App.css'; 
import EventList from './sims/EventList';
import App1 from './sims/Dashboard1';
import Loginwork from './sims/login';
import Home from './sims/Home';


const App=()=> {
  return (
    <div>
      
      <div className="app">
        
      
      <Navbar />
      <div className="content">
        <Sidebar />
        <Dashboard />
        <EventList/>
       
      </div>
     
     
    </div>  
    </div>
  );
}

export default App;
//import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import StudentLogin from './StudentLogin';
// import StudentDashboard from './StudentDashboard';

// const App = () => {
//   const [student, setStudent] = useState(null); // Manage logged-in student state here

//   return (
//     <Router>
//       <Switch>
//         <Route path="/login">
//           {student ? <Redirect to="/dashboard" /> : <StudentLogin setStudent={setStudent} />} 
//         </Route>
//         <Route path="/dashboard">
//           {student ? <StudentDashboard student={student} /> : <Redirect to="/login" />}
//         </Route>
//         <Route path="/">
//           <Redirect to="/login" />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;;
// 


