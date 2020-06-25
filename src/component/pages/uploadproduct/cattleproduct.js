import React, { Component, useState } from "react";
import {form,Button} from "react-bootstrap";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class cattleproduct extends Component{
    constructor (props) {
        super(props)
            this.state = {
            startDate: new Date()
        };
            this.handleChange = this.handleChange.bind(this);
            this.onFormSubmit = this.onFormSubmit.bind(this);
    }
       
    handleChange(date) {
        this.setState({
             startDate: date
        })
    }
        
        onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
        }

    render(){    
        return(
            
            <div>
                <HeaderLogin/>
                <Navbar/>
                <div className = "container-fluid  " >
                    <div className = "card sd3">
                       <div className = "card-header">
                           <h4 className = "card-text">ลงทะเบียนผลิตภัณฑ์จากโค</h4>
                       </div>
                       <div className = "row">
                           <div className = "col-md-6">
                               <div className = "card-header">
                                  <h4 className = "card-text" >อัพโหลดรูปภาพ</h4>
                               </div>
                               <div className = "card-body">
                                   <h6>อัพโหลดรูปภาพ</h6>
                               </div>
                           
                               <div className = "card sd3">
                                   <div className ="card-header">
                                       <h4 className ="cardtext" >ข้อมูลผลิตภัณฑ์</h4>
                                       <div className="card-body">
                                           <form className="form">
                                                <div className = "Row f1">
                                                    <div className form-group>
                                                        <label for="productname">ชื่อผลิตภัณฑ์</label> 
                                                        <input type = "text" name = "productname" id ="prdname" className = "form-control is invalid"/>
                                                    </div>
                                                    <div className= "form-group">
                                                         <label for="gender">ชนิดของผลิตภัณฑ์</label><select className="form-control" id="prdtyoe">
                                                            <option>1.เนื้อสด</option>
                                                            <option>2.เนือสุก</option>
                                                        </select>
                                                    </div> 
                                                    <div className = "form-group">
                                                        <label for = "date">วันที่ผลิต</label>
                                                        <DatePicker selected={ this.state.startDate } onChange={ this.handleChange } dateFormat="MMMM d, yyyy" className="form-control"
/>
                                                      
                                                    </div>
                                                    <div className = "form-action">
                                                        <label for = "datex">วันที่หมดอายุ</label>
                                                        <input type = "text"/>
                                                    </div>
                                                    <div className = "form-group">
                                                        <label for = "amount">จำนวน(ชิ้น)</label>
                                                        <input for = "number" name = "amount" id= "amnt" className ="form-control is invalid"/>
                                                    </div>
                                                    <div className = "form-group">
                                                        <label for = "weight">น้ำหนัก/หน่วย(กิโลกรัม)</label>
                                                        <input for = "number" name = "weigt" id ="wa" className="form-control is invalid"/>
                                                    </div>
                                                    <div className = "form-group">
                                                        <label for = "detail">รายละเอียดสินค้า</label>
                                                        <input for =  "text" name= "detail" id= "detail" className = "form-control is invalid"/>
                                                    </div>
                                                    <form action = "/action_page.php">
                                                        <label for= "prdate">วันที่ผลิต</label>
                                                       
                                                    </form>
                                                </div>

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