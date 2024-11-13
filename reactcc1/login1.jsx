import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login1.css";

function Loginwork1()
{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[errorMessage,setErrorMessage]=useState('');
    const navigate=useNavigate();

    const handleClick=(event)=>
    {
        event.preventDefault();
    if(username==="Admin" && password==="2005")
    {
        navigate('/home');
        
    }
    else
    {
        setErrorMessage("Incorrect Username/Password");
    }
    }
    return(
        <div className="container1">
            <center>
             <form onSubmit={handleClick}>
            <div className="c1"> 
            <h1 id="lo">Login</h1>
            <label id="name">Name :</label><br></br>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} style={{color:"black"}}></input><br></br>
            <label id="name">Password :</label><br></br>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}<br></br>

            <button type="submit" onClick={handleClick}>Login</button>
          
            </div>
            </form>
            </center>
        </div>
    )
}
export default Loginwork1;
