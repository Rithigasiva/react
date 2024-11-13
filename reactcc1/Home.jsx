import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
    const handle=()=>{
        navigate('/sl');
    }
    const handle1=()=>{
        navigate('/al');
    }
  return (
    <div className="bg">
      <header className="header">
        <h1>Welcome to EDUMATRIX</h1><br></br>
        <p style={{color:"black", textDecoration:"underline", fontFamily:"serif"}}>Your Gateway to Streamlined Academic Management</p>
      </header>


      <section>
        <div className="info">
          <h2 style={{color:"black", textDecoration:"underline"}}>About EDUMATRIX</h2><br></br>
          <p className="p1"> 
            EDUMATRIX is a comprehensive academic management system designed to
            simplify and enhance the way institutions handle student profiles, administrative tasks,
            and academic records.<br></br> Whether you're a student or an admin, EDUMATRIX provides you with the tools
            you need to succeed.<br></br>It offers user-friendly tools for managing student profiles, academic records, and administrative tasks.
          </p>
        </div>

      <nav className="nav-menu">
        <button onClick={handle}>Student Login</button>
        <button onClick={handle1}>Admin Login</button>
      </nav>
       
      </section>

   
    </div>
  );
}

export default Home;
