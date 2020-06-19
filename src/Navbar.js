import React,{Component} from "react";
import Signout from "./Signout";
import "./styleNavbar.css";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import firebase from "./backEnd/firebase"
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';


//import axios from "axios";
//react------ HOOK



class NavbarLogin extends Component {

 constructor(props){
   super(props);
   this.state={
     currentUser:""
   }
 }
   async componentDidMount() {
    
    await firebase.auth().onAuthStateChanged(user => {
   
      if (user) {
        this.setState({
          currentUser: user.email
        });
       
      }
    });


  }
  

render(){
 

  return (
    <div className="container-fluid">
      <nav className="row">
        <div className="dropdown">
          <Link to="/login">
            {" "}
            <div className="dropbtn">หน้าหลัก</div>
          </Link>
        </div>

        

        <div className="dropdown">
          <div className="dropbtn">ลงทะเบียนสินค้า</div>
          <div className="dropdown-content">
            <Link to="/fatten">
              <div>ลงทะเบียนขายโคมีชีวิต</div>
            </Link>
            <Link to="/induction">
              <div>ลงทะเบียนโคประมูลมีชีวิต</div>
            </Link>
            <Link to="/breed">
              <div>ลงทะเบียนขายผลิตภัณฑ์จากโค</div>
            </Link>
            <Link to="/checkup">
              <div>ลงทะเบียนสินค้าเบ็ดเตล็ด</div>
            </Link>
            
          </div>
        </div>

        <div className="dropdown">
                  <div className="dropbtn">จัดการสินค้า</div>
                  <div className="dropdown-content">
                    <Link to="/manage/salecattle">
                      <div>จัดการซื้อขายโคมีชีวิต</div>
                    </Link>
                    <Link to="/manage/auction">
                      <div>จัดการประมูลโคมีชีวิต</div>
                    </Link>
                    <Link to="/manage/product">
                      <div>จัดการผลิตภัณฑ์จากโค</div>
                    </Link>
                    <Link to="/mange/accessories">
                      <div>จัดการสินค้าเบ็ดเตล็ด</div>
                    </Link>
                  </div>
                </div>

        <div className="dropdown">
          <Link to="/offer/offerbuy">
            <div className="dropbtn">เสนอซื้อสินค้า</div>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/calfmanage">
            <div className="dropbtn">รายงาน</div>
            <div className="dropdown-content">
                    <Link to="/brandsetting">
                      <div>สถิติขายโคมีชีวิต</div>
                    </Link>
                    <Link to="/usersetting">
                      <div>สถิติการประมูลโคมีชีวิต</div>
                    </Link>
                    <Link to="/farmsetting">
                      <div>สถิติการขายผลิตภัณฑ์จากโค</div>
                    </Link>
                    <Link to="/drugsetting">
                      <div>สถิติการขายสินค้าเบ็ดเตล็ด</div>
                    </Link>
                  </div>
          </Link>
        </div>

     

        

        <div className="dropdown">
          <Link to="/instructionmanualn">
            <div className="dropbtn">คู่มือการใช้งาน</div>
          </Link>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md">
          <div className="row" style={{ float: "right", marginTop: "8px" ,marginRight:"5%"}}>
            

          
        
  
  
  
          </div>
          
        </div>

        <div className="col-md-1 floatRight sigout-div ">
          <Signout />
        </div>
      </nav>
    </div>
  );
}
 
}

export default NavbarLogin;