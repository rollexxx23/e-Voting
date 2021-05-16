import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./VotingScreen.css" ;
import logo from "../images/e-voter.png" ;
import timer from "../images/timer.gif" ;
import { Divider } from '@material-ui/core';
import BJP from '../images/BJP.png' ;
import INC from "../images/INC.png" ;
import AAP from "../images/AAP.png" ;
import TMC from "../images/TMC.png" ;

const useStyles = makeStyles({
    root: {
      width: "500px" ,
      marginBottom: 30,
      height : 300
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
    },

    text: {
      fontSize: 15,
    }
  });

function VotingScreen() {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className="votingScreen">
            <img src={logo} alt="Logo" />
            <div className="cards">
            <Card className={classes.root} variant="outlined">
          <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
          BJP
        </Typography>
        <Divider variant="middle" />
        <div className="image">
        <img src={BJP} alt=""/>
        </div>
          </CardContent>
          
       
       <div className="button">
       <a href="/"> CHOOSE </a> 
       </div>
      
    </Card>
    <Card className={classes.root} variant="outlined">
          <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
          INC
        </Typography>
        <Divider variant="middle" />
        <div className="image">
        <img src={INC} alt=""/>
        </div>
          </CardContent>
          
       
       <div className="button">
       <a href="/"> CHOOSE </a> 
       </div>
      
    </Card>
    <Card className={classes.root} variant="outlined">
          <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
          AAP
        </Typography>
        <Divider variant="middle" />
        <div className="image">
        <img src={AAP} alt=""/>
        </div>
          </CardContent>
          
       
       <div className="button">
       <a href="/"> CHOOSE </a> 
       </div>
      
    </Card>
    <Card className={classes.root} variant="outlined">
          <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
          TMC
        </Typography>
        <Divider variant="middle" />
        <div className="image">
        <img src={TMC} alt=""/>
        </div>
          </CardContent>
          
       
       <div className="button">
       <a href="/"> CHOOSE </a> 
       </div>
      
    </Card>
            </div>
        </div>
    )
}

export default VotingScreen
