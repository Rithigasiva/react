// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';

//  import Loginwork from './sims/login';
// // import Toggle from './day3/cw';
// // import App1 from './day1/cw1';
// // import Dis from './day1/cw3';
// // import Dis1 from './day1/pah2';
// // import Team from './day1/pah1';
// // import Dis3 from './day1/cy';
// //import Dis5 from './day2/cw1';
// // import Dis4 from './day2/cw2';
// // import Dis6 from './day2/pah1';
// // import Nothing from './general/Call';
//  //import Intro from './general/props'; 
// // import Me from './general/props';
// // import ClickButton from './general/event';
// // import Message from './day3/cw';
// //import ThoseDays,{Header,Footer} from './general/export';
// // import Call from './day1/cw2';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import AuthPage from './sims/Register';
// //import Counter from './general/mounting';
// // import Sidebar from './studentproject.jsx/sidebar';
// // import Information from './day3/pah';
// // import Weather from './day3/cy';
// // import Count from './general/Counter';
// // import Changestate from './general/OnOff';
// // import Bind from './general/Binding';
// // import Listt from './general/ḷist';
// // import Loginwork from './general/login';
// // import Mui from './general/Buttonmui';
// // import Division from './general/trycatch';
// // import App from './day2/cy';
// // import Day1ch2 from './day1/cy2';
// // import Statecc from './general/state';
// //import Intro from './general/props';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
    
//     <Router>
//     <Routes>
//         <Route path="/" element={<Loginwork />} />
//         <Route path="/signup" element={<AuthPage/>} />
//       </Routes>
//       </Router> 
    
//   {/* <App1 />
//   <Dis />
//   <Dis1 />
//   <Team />
//   <Dis3 />*/}
//   {/* <Dis4 />  */}
//   {/* <Dis5 /> */}
//   {/* <Header />
//   <Footer />
//   <ThoseDays /> */}
// {/* /*<Nothing /> */}
// {/* <Intro/>  */}
// {/* <ClickButton /> */}
// {/* <Me name="RITHIII" age="18"/> */}
// {/* <Message /> */}
// {/* <Statecc color="Blue"/> */}
// {/* <Statecc /> */}
// {/* <Call /> */}
// {/* <Day1ch2 />
// <App /> */}
// {/* <Toggle />
// <Information /> */}
// {/* <Weather/> */}
// {/* <Count/> */}
// {/* <Changestate/> */}
// {/* <Bind /> */}
// {/* <Listt /> */}
// {/* <Mui/>  */}
// {/* <Division/> */}
// {/* <Sidebar /> */}
// {/* <Counter/> */}
// {/* <Loginwork/> */}
//   </React.StrictMode>
//   //document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

 import Loginwork from './sims/login';
 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Register from './sims/Register';
import App1 from './sims/Dashboard1';
import Loginwork1 from './sims/login1';
import Home from './sims/Home';
import StudentManagement from './sims/student';
import CourseManagement from './sims/course';
import UpcomingEvents from './sims/Event';
import UpcomingEvents1 from './sims/Event';
import Reg1 from './sims/Register1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sl" element={<Loginwork />} />
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/courses" element={<CourseManagement/>} />
          <Route path="/events" element={<UpcomingEvents1 />} />
          <Route path="/al" element={<Loginwork1 />} />
         <Route path="/student" element={<Register/>}/>
         <Route path="/admin" element={<Reg1/>}/>
         <Route path="/home" element={<App/>} /> 
        <Route path="/home1" element={<App1/>} />
      </Routes>
      </Router>
 
  
  </React.StrictMode>

);
