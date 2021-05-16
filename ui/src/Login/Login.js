import React from 'react' ;
import { Link } from 'react-router-dom';
import logo from "../images/e-voter.png" ;
import "./Login.css" ;


function Login() {
    return (
        <div className="Login">
            <img src={logo} alt="Logo" />
            <div>
            <div className="Login__container">
                <h1>Sign In</h1>
                <form>
                <h5>AADHAR Number</h5>
                    <input  type='text'   />

                    <h5>Registered Mobile Number</h5>
                    <input type='tel'  />

                    <Link to="/otp">  <button type='submit' className='Login__signInButton'>Get OTP</button> </Link>
                </form>

                <p>
                    By signing-in you agree to the E-VOTER Conditions of Use. Please
                    see our Privacy Notice and our Cookies Notice.
                </p>

               
            </div>
            </div>
        </div>
    )
}

export default Login
