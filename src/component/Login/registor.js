




import React,{Component} from 'react';
import "../styleWebpage.css";
import {Button} from 'react-bootstrap'; 
import HeaderLogin from '../../HeaderLogin';

import Axios from 'axios';

class signup extends Component{
  constructor(){
    super();
    this.state ={
      email : '',
      password : '',
      confirmpassword : '',
      handle : '',
   
    };
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    this.setState({
      loading :true
    });
    const newUser = {
      email : this.state.email,
      password : this.state.password,
      confirmpassword : this.state.confirmpassword,
      handle : this.state.handle,

 
    };
    Axios.post('/signup',newUser)
    .then(res=>{
      console.log(res.data);
      localStorage.setItem('FBidToken',`Bearer ${res.data.token}`);
      this.setState({
        loading : false
      });
      this.props.history.push('/home');
    })
    .catch(err=>{
      this.setState({
        errors : err.response.data,
        loading :false
      })
    })
  };
  handlechange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  };
    render(){
     
      const {errors, loading} =this.state;
    
      return(

          <div className="container-fluid ">
               

               <HeaderLogin/>
               <form onSubmit={this.handleSubmit}>
         
             
            <div className = "Row f1">
                
                <div className= "form-group">
                    <label for="Email">Email</label>
                    <input 
                        type = "text" 
                        name ="email"
                        id ="email"
                        placeholder="Enter Email"
                        value = {this.state.email}
                        onChange={this.handlechange}
                        />
                </div> 
                <div className= "form-group">
                    <label for="Password">password</label>
                    <input 
                        type = "password" 
                        name ="password"
                        id ="password"
                        placeholder="Enter Password"
                        value = {this.state.password}
                        onChange={this.handlechange}
                        />
                </div> 
                <div className= "form-group">
                    <label for="Password">confirmpassword</label>
                    <input 
                        type = "password" 
                        name ="confirmpassword"
                        id ="confirmpassword"
                        placeholder="Confirmpassword"
                        value = {this.state.confirmpassword}
                        onChange={this.handlechange}
                        />
                </div> 
                <div className= "form-group">
                    <label for="handle">handle</label>
                    <input 
                        type = "text" 
                        name ="handle"
                        id ="handle"
                        placeholder="handle"
                        value = {this.state.handle}
                        onChange={this.handlechange}
                        />
                </div> 
                
                
                <Button type="submit" className="btn btn-primary" column sm ={2}>บันทึก</Button>
                         <Button type="reset" className="btn btn-danger">ยกเลิก</Button>
                     
                
               
                 
            </div>
            
        </form>

                  </div>
                
            
                
                
                         
                     
              
            
      
      )};
  
};

export default signup;

