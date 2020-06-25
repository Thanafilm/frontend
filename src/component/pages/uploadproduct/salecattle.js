import React, { Component } from "react";
import {form,Button} from "react-bootstrap";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Axios from "axios";
class upsalecattle extends Component{
   /* constructor(){
        super();
        this.state = {
            name : '',
            detail : '',
            cattleid : '',
            type : '',
            weight : '',
            gender : '',
            spicies : '',
            birthdate : '',
            price : '',
            dadname : '',
            momname : ''
        }
    }
    handlesubmit = (event) =>{
        event.preventDefault();
        this.setState({
            loading : true
        });
        const newCattle = {
            name : this.state.name,
            detail : this.state.detail,
            cattleid : this.state.cattleid,
            type : this.state.type,
            weight : this.state.weight,
            gender : this.state.gender,
            spicies : this.state.spicies,
            birthdate : this.state.birthdate,
            price : this.state.price,
            dadname : this.state.dadname,
            momname : this.state.momname
        }
        Axios.post('/cattle',newCattle)
        .then(res=>{
            console.log(res.data);
            localStorage.setItem(FBidToken,`Bearer ${res.data.token}`);
            this.setState({
                loading:false
            });
            this.props.history.push('/home');
        })
        .cath
    }*/
    render(){
        return(
            <div>
            <HeaderLogin/>
            <Navbar/>
           <form>
             
             
               <div className = "Row f1">
                   <div className= "form-group">
                       <label for="CattleName">ชื่อโค</label><input type = "text" name ="CattleName"id ="ctn"className ="form-control is invalid"/>
                       
                   </div> 
                   <div className= "form-group">
                       <label for="IdCattle">หมายเลขประจำตัวสัตว์</label><input type = "text" name ="IdCattle"id ="idc"className ="form-control is invalid"/>
                   </div> 
                  
                   <div className= "form-group">
                       <label for="Type">ประเภทโค</label>
                       <select className="form-control" id="type">
                       <option>1.โคหย่านม</option>
                       <option>2.โคแม่ลูกอ่อน</option>
                       </select>
                   </div> 
                   <div className= "form-group">
                       <label for="strain">สายพันธุ์โค</label><select className="form-control" id="stain">
                       <option>1.ชาลา เฮดชาลา</option>
                       <option>2.โนบรา</option>
                       </select>
                   </div> 
                   <div className= "form-group">
                       <label for="Bdate">วัน/เดือน/ปีเกิด</label><input type = "text" name ="birthdate"id ="bd"className ="form-control is invalid"/>
                   </div> 
                   <div className= "form-group">
                       <label for="gender">เพศ</label><select className="form-control" id="gender">
                       <option>1.เพศผู้</option>
                       <option>2.เพศเมีย</option>
                       </select>
                   </div> 
                   <div className= "form-group">
                       <label for="weight">น้ำหนัก</label><input type = "number" name ="weight"id ="weight"className ="form-control is invalid"/>
                   </div> 
                   <div className= "form-group">
                       <label for="Dadame">ชื่อพ่อพันธ์ุ</label><input type = "text" name ="Dadname"id ="Dn"className ="form-control is invalid"/>
                   </div> 
                   <div className= "form-group">
                       <label for="MomName">ชื่อแม่พันธ์ุ</label><input type = "text" name ="Momname"id ="Mn"className ="form-control is invalid"/>
                   </div> 
                   <div className= "form-group">
                       <label for="chest">ความยาวรอบอก</label><input type = "number" name ="chest"id ="chest"className ="form-control is invalid"/>
                   </div> 
                   <div className= "form-group">
                       <label for="height">ความสูง</label><input type = "number" name ="chest"id ="chest"className ="form-control is invalid"/>
                   </div>
                   <div className= "form-group">
                       <label for="bodylength">ความยาวลำตัว</label><input type = "number" name ="bdlength"id ="bdlength"className ="form-control is invalid"/>
                   </div>            
                
                   <div className= "form-group">
                       <label for="Priceperbid">ราคา</label><input type = "number" name ="Price"id ="Price"className ="form-control is invalid"/>
                   </div>
                   <Button type="submit" className="btn btn-primary" column sm ={2}>บันทึก</Button>
                            <Button type="reset" className="btn btn-danger">ยกเลิก</Button>
                        
                   
                  
                    
               </div>
               
           </form>
          
         </div>
        );
    }
}
export default upsalecattle;
