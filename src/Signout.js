import React,{Component} from "react";
import { Button } from "react-bootstrap";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import { lightBlue } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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
 
  render() {
    return (

      

      <div style ={{float:"right"}} >
        <Badge badgeContent={4} color="secondary" size="Large "style={{ marginTop:"10px",marginRight:"20px"}}>
        <MailIcon style={{ color: lightBlue[50] }} />
      </Badge>

      <StyledBadge style={{ marginRight:"0px"}}
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
         
        }}
        variant="dot"
      >
        <Avatar   alt="Remy Sharp" src=""/>
      </StyledBadge>

      

                 

            
         
          </div>

          

    );
  }
}
export default Signout;
/* */