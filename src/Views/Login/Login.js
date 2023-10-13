import React from "react";
import "./Login.css";

import user_icon from './../../Components/Image/person.png';
import email_icom from './../../Components/Image/email.png';
import pass_icon from './../../Components/Image/password.png';


function Login(){

    const [action,setAction] = useState("Login");

    return(
        
        <div className="container">
        <div className="header">
         <div className="text">{action}</div>  
         <div className="underline"></div> 
        </div>
        <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt=""/>
            <input type="text" placeholder="Name"/>
        </div> }
         
        <div className="input">
            <img src={email_icon} alt=""/>
            <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
            <img src={pass_icon} alt=""/>
            <input type="password" placeholder="Password"/>
        </div>  
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        
    
        </div>

  
        

    )
}

export default Login