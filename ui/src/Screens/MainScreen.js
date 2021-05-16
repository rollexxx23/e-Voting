import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./MainScreen.css" ;
import logo from "../images/e-voter.png" ;
import timer from "../images/timer.gif" ;
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      width: "75%"
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

 function MainScreen() {
  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (

    <div className="mainScreen">
        <img src={logo} alt="Logo" />
        <Card className={classes.root} variant="outlined">
          <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
          CURRENT ELECTION IN YOUR LOCATION 
        </Typography>
        <Divider variant="middle" />
          </CardContent>
          <div className="image">
       <img src={timer} alt="TIMER"/>
       </div>
       <div className="timer">
       <Typography className={classes.text} color="textSecondary" gutterBottom>
          6 hrs : 15 mins
        </Typography>
       </div>
       <div className="button">
       <a href="/vote">Join Election</a> 
       </div>
      <CardActions>
        <Link to = "/about">
        <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  );
}

export default MainScreen 
