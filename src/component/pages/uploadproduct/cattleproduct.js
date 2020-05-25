import React, { Component } from "react";
import {form,Button} from "react-bootstrap";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";

class cattleproduct extends Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                <div className = "container " >
                    <div className = "card">
                       <div className = "card-header">
                           <h4 className = "card-text">ลงทะเบียนผลิตภัณฑ์จากโค</h4>
                       </div>
                       <div className = "row">
                           <div className = "col-md-6">
                               <div className = "card-header">
                                   <div className = "card-text">อัพโหลดรูปภาพ</div>
                               </div>
                               <div className = "card-body">
                                   <h4>อัพโหลดรูปภาพ</h4>
                               </div>
                               <div className = "card">
                                   <div className ="card-header">
                                       <h3 className ="cardtext" >ข้อมูลผลิตภัณฑ์</h3>
                                       <div className="card-body">
                                           <form className="form-horizontal">
                                       

                                           </form>
                                           
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>

        );
    }
};
export default cattleproduct;