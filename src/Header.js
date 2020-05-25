import React,{Component} from 'react';
import './component/styleWebpage.css';
import {
  Navbar,
  Button,
  DropdownButton,
  Dropdown,
  
} from "react-bootstrap";
import {Link} from 'react-router-dom';




class Header extends Component{
  render(){
      return(
        
          <div >
            
              <div className='row r2'>
                 <div className="col-md-6"><Link to='/' style={{ textDecoration: 'none' }} >
                 <div className="col">
          <div className="row size-font">
            ตลาดซื้อ ขายและประมูลโคออนไลน์
          </div>
          
        </div>
        
                </Link>
            </div> 
               <div className="col-5"></div> 
               
            
            <div className="col-md-1 r2-c2 "> <Link to="/login" className="r2-c2" style={{ textDecoration: 'none' }}><Button className=" floatleft" variant="success"  >เข้าสู่ระบบ</Button></Link></div>
        </div>
        </div>
      
      )
  }
}
export default Header;
