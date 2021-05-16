import React from 'react' ;
import logo from "../images/e-voter.png" ;
import "./EnterOTP.css"

function EnterOTP() {
    return (
        <div>
            <div className="Login">
            <img src={logo} alt="Logo" />
            <div>
            <div className="Login__container">
                <h1>OTP</h1>
                <form>
                <h5>Enter OTP</h5>
                    <input  type='password'   />

                    

                    <button type='submit' className='Login__signInButton'>Log In</button>
                </form>

              

               
            </div>
            </div>
        </div> 
        </div>
    )
}

export default EnterOTP
