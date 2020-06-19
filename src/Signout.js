import React,{Component} from "react";
import { Button } from "react-bootstrap";
import firebase from "./backEnd/firebase/index";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


class Signout extends Component {
 

   logout = e => {
    //console.log("Logout");
    firebase.auth().signOut();
  };


  render() {
    return (

      

      <div style ={{float:"right"}} >
        <Badge badgeContent={4} color="secondary" size="Large "style={{ marginTop:"10px",marginleft:"50%"}}>
        <MailIcon />
      </Badge>

      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
         
        }}
        variant="dot"
      >
        <Avatar  alt="Remy Sharp" src=""/>
      </StyledBadge>
                 <Link to ="/"><Button  variant='danger' onClick={(e)=>this.logout(e)} >ออก</Button></Link>

            
         
          </div>

          

    );
  }
}
export default Signout;
/* */