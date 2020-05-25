

////////////////////////////หน้า  Login/////////////////////////////


import React,{Component} from 'react';
import "../styleWebpage.css";
import {Form,Button} from 'react-bootstrap'; 
import HeaderLogin from '../../HeaderLogin';
import firebase from './../../backEnd/firebase/index';
import Home from "./../Home/homepage";
import Footer from '../../Footer';
//import { BrowserRouter, Route, Switch, Router,Redirect,Link } from "react-router-dom";
class Login extends Component{


  constructor(props) {
    super(props)

            this.state = {
              email: '',
              password: '',
              message: '',
              currentUser: null,
            }
          }
              // setState ตาม name ที่ได้รับมาจากForm
          onChange = e => {
            const { name, value } = e.target
            console.log(name+":"+value);
            this.setState({
              [name]: value
            })

         
          }

          handleSignup=(e)=>{
            //console.log(this.state.email);
            //console.log(this.state.password);
        
            e.preventDefault();
            const { email, password } = this.state
         
            //firebase.auth().xxxMethod()
            //firebase.auth().xxxMethod().then(function() || ()=>{}  )
        
            firebase.auth().signInWithEmailAndPassword(email, password)
              .then(response => {
                //console.log(response.user);
                
              })
              .catch(error => {
                this.setState({
                  message: error.message
                })
                alert('ไอดี หรือ  รหัสผ่าน ของท่านไม่ถูกต้อง');
              })
          }
     //หลังจาก renderแล้วจะทำการเชคว่ามีการล็อคอินอยู่ไหม ถ้ามี ไป setState currentUser: user
        


     componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({
            currentUser: user
          });
          //console.log("Logined already");
        }
      });
    
    }
   



  render(){

       if(this.state.currentUser){
            return (<Home/>)
       }
    //if user haven't id and password  return -->
      return(
          <div className="container-fluid ">
               

               <HeaderLogin/>
                <div className="center k1">
              <div > 
                    <div className="bg-box-log-color">
                    <Form  className="form-padding " onSubmit={this.handleSignup} >
                    <div className="title1">เข้าสู่ระบบ</div>
                    <Form.Group controlId="formBasicEmail" className="form-padding-top">
                      <Form.Label>ชื่อผู้ใช้</Form.Label>
                      <Form.Control 
                      required
                      name="email"
                      type="text" 
                      placeholder="Enter email"
                      onChange={this.onChange}
                       /> 
                    </Form.Group>
                  
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>รหัสผ่าน</Form.Label>
                      <Form.Control 
                      required
                      name="password"
                      type="password" 
                      placeholder="Password" 
                      onChange={this.onChange}
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
export default Login;

//กดปุ่ม ---->link to component (ส่งprop ไปตาม link) อีกทีหนึ่ง น่าจะแก้ได้