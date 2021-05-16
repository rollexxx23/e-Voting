import React from 'react' ;
import "./FirstPage.css" ;
import logo from "../images/e-voter.png"

function Login() {
    return (
       
        <div className="FirstPage">
            <img src={logo} alt="logo" />
            
             <a href="/">Login with your AADHAR</a> 

             <div className="landingPage">
                 <a href="/">KNOW MORE ABOUT US</a>
             </div>

         </div>
         
    )
}

export default Login