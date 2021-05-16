import React from 'react'
import logo from "../images/e-voter.png" ;
import tick from "../images/tick.png" ;
import Typography from '@material-ui/core/Typography';
import "./ThankYou.css" 
import { Link } from 'react-router-dom';
function ThankYou() {
    return (
        <div className="thankYou">
            <img src={logo} alt="Logo" />
            <div className="image">
                <img src={tick} alt="tick"/>
                
                
            </div>
            <div className="text1">
                Thank You for VOTING!
            </div>
<Link to="/">
            <div className="text2">
                Return to login page.
            </div>
            </Link>
        </div>
    )
}

export default ThankYou
