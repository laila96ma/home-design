import React from "react";
import  "./styles/login.css";
import PersonIcon from '@mui/icons-material/Person';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
const LoginSignUp=()=>{

    const [action,setAction]=useState("Sign Up");
    return (
        <div className="Container">
             <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                    <div className="icon"><PersonIcon/></div>
                    <input type="text" placeholder="Name"/>
                </div>}
               
                <div className="input">
                <div className="icon"><EmailIcon/></div>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                <div className="icon"><EnhancedEncryptionIcon/></div>
                    <input type="password"  placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
           
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
       

    )
}
export default LoginSignUp;