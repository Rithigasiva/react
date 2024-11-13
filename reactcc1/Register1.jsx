
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './register1.css';
// function Reg1() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate=useNavigate();
//         const handleClick=(event)=>
//             {
//             //     event.preventDefault();
//             // if(username==="Admin" &&email==="Admin123@gmail.com" &&password==="2005")
//             // {
//             //     alert("Already Registered");
//             // }
//             // else
//             // {
//                 navigate('/home');
//             // }
//     };

//     return (
//         <div className='reg1'>
//         <form onSubmit={handleClick} className="register1-form">
//             <h2 className="register1-title">Register</h2>
//             <center><label id="name1">Name :</label></center><br></br>
//             <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="register1-input"
//                 required
//             />
//            <center><label id="name1">Email :</label></center><br></br>
            
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="register1-input"
//                 required
//             />
//             <center><label id="name1">Password :</label></center><br></br>
            
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="register1-input"
//                 required
//             />
//             <button type="submit" className="register1-button">Sign Up</button>
//         </form>
//         </div>
//     );
// }

// export default Reg1;
