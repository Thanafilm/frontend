

////////////////////////////หน้า  Login/////////////////////////////


import React,{Component} from 'react';
import "../styleWebpage.css";
import {Form,Button} from 'react-bootstrap'; 
import HeaderLogin from '../../HeaderLogin';
import Home from "./../Home/homepage";
import Footer from '../../Footer';

//redux
import { connect} from 'react-redux';
import {loginUser} from '../../redux/action/UserAction';


class Login extends Component{
  constructor(){
    super();
    this.state ={
      email : '',
      password : '',
      errors : {}
    };
  }

  handleSubmit = (event)=>{
    event.preventDefault();
   
    const userData = {
      email : this.state.email,
      password : this.state.password
    };
    this.props.loginUser(userData,this.props.history);
  
  };
  handlechange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  };
    render(){
     
      const {errors} =this.state;
    
      return(

          <div className="container-fluid ">
               

               <HeaderLogin/>
                <div className="center k1">
              <div > 
                    <div className="bg-box-log-color">
                    <Form  className="form-padding " onSubmit={this.handleSubmit} >
                    <div className="title1">เข้าสู่ระบบ</div>
                    <Form.Group controlId="formBasicEmail" className="form-padding-top">
                      <Form.Label>ชื่อผู้ใช้</Form.Label>
                      <Form.Control 
                      required
                      name="email"
                      type="text" 
                      placeholder="Enter email"
                      value = {this.state.email}
                      onChange={this.handlechange}
                       /> 
                    </Form.Group>
                  
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>รหัสผ่าน</Form.Label>
                      <Form.Control 
                      required
                      name="password"
                      type="password" 
                      placeholder="Password" 
                      value = {this.state.password}
                      onChange={this.handlechange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="จำรหัสผ่าน" />
                    </Form.Group>
                
                <Button className="container-fluid bt " aria-disabled="true" type="submit"  >
                    เข้าสู่ระบบ
                    </Button> 
                  </Form>
                  </div>
                    
              </div>
                </div>
              
                
                <Footer/>   
                         
                     
              
            </div>
      
      )
  }
}

const mapStatetoProps = state =>({
  user : state.user,
  UI : state.UI
});
const mapActiontoprops = {
  loginUser
}
export default connect(mapStatetoProps,mapActiontoprops)(Login);

