import React from "react";
import Button from '@material-ui/core/Button';
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';




class accesscow extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                     
                     <div className='row  'style={{backgroundColor:"#F2F2F2", marginLeft:"13%",marginRight:"13%" , height: "1030px",marginTop:"20px" }}> 
                        <div className="col-6"> 
                        
                        <div className="row " style={{ marginTop:"5px"}}>  
                                                <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"5px"}}>
                                                    <ShoppingCartIcon />
                                                   </IconButton> <h5 style={{ marginTop:"12px"}}>ลงทะเบียนขายผลิตภัณฑ์จากโค</h5>  </div>
                                        <Grid container spacing={3}  style={{backgroundColor:"#ffffff",height:"100px", marginTop:"18px",marginLeft:"2px",marginRight:"15"}} >
                                       อัพโหลดรูปภาพ <center><p  style={{color:"red",marginLeft:"5px" }}>อัพโหลดรูปภาพ 4 รูป ประกอบด้วย ด้านหน้า หลัง ซ้ายและขวา ขนาดรูปภาพไม่เกิน100MB</p></center>
                                        <div> <h8> <Button variant="contained" style={{marginLeft:"10px" }}
                                     color="primary"
                                     size="small"
                                     style={{outline:"none"}}
                                    startIcon={<AddPhotoAlternateIcon/>}
                                >
                                    เลือกรูปภาพ 0/4
                                     </Button></h8></div>    
                                        




                                        </Grid>
                                        <Grid container spacing={3}  style={{backgroundColor:"#ffffff",height:"800px", marginTop:"18px",marginLeft:"2px",marginRight:"15"}} >
                                        <div className = "Row f1">
                                                    <div className= "form-group">
                                                        <label for="CattleName">*ชื่อผลิตภัณฑ์</label><input type = "text" name ="CattleName"id ="ctn"className ="form-control is invalid"/>
                                                        
                                                    </div> 
                                                     <div className= "form-group">
                                                        <label for="Type">*ชนิดผลิตภัณฑ์</label>
                                                        <select className="form-control" id="type">
                                                        <option>ไม่มี</option>
                                                        
                                                        </select>
                                                    </div> 
                                                    <div className= "form-group">
                                                        <label for="IdCattle">*วัน/เดือน/ปี ที่ผลิต</label><input type = "text" name ="IdCattle"id ="idc"className ="form-control is invalid"/>
                                                    </div> 
                                                    <div className= "form-group">
                                                        <label for="IdCattle">*วัน/เดือน/ปี ที่หมดอายุ</label><input type = "text" name ="IdCattle"id ="idc"className ="form-control is invalid"/>
                                                    </div> 

                                                    <div className= "form-group">
                                                        <label for="IdCattle">*จำนวนชิ้น</label><input type = "text" name ="IdCattle"id ="idc"className ="form-control is invalid"/>
                                                    </div> 

                                                    <div className= "form-group">
                                                        <label for="IdCattle">*น้ำหนัก/หน่วย(กก)</label><input type = "text" name ="IdCattle"id ="idc"className ="form-control is invalid"/>
                                                    </div> 
                                                    <div className= "form-group">
                                                        <label for="IdCattle">*ราคา/หน่วย(บาท)</label><input type = "text" name ="IdCattle"id ="idc"className ="form-control is invalid"/>
                                                    </div> 
                                                    <div class="container">
                                                    <div class="post-comments">
                                                    <form>
                                                        <div class="form-group">
                                                            <label for="comment">รายละเอียดสินค้า</label>
                                                            <textarea name="comment" class="form-control" rows="3"></textarea>
                                                        </div>
                                                    </form>
                                                        
                                                        

                                            
                                            
                                        </div></div>
                                                                                            
                                                                                           
                                                   
                                                    
                                                   
                                                </div>

                                        </Grid>         
                                       </div>
                    
                        <div className="col-6  ">  
                        
                         <div className="col-12" style={{backgroundColor:"#E0E0E0", marginTop:"76.5px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> ข้อมูลพื้นฐานของผู้ผลิต
                            </div> </div>
                                <div className="col-6 text-right "></div></div>
                              <Grid>
                              <div style={{ marginLeft:"20px"}}><h6>ชื่อเกษตกร :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>นามสกุล :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>หมายเลขบัตรประชาชน :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>เบอร์โทรติดต่อ :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ที่อยู่ตามสำเนาทะเบียนบ้าน :</h6></div>
                              <div style={{ marginLeft:"20px"}}><h6> ตำบล :</h6></div>
                              <div style={{ marginLeft:"20px"}}><h6>อำเภอ :</h6></div>
                              <div style={{ marginLeft:"20px"}}><h6>จังหวัด  :</h6></div>
                              
                            
                            </Grid>  
                        </div>

                        <div className="col-12" style={{backgroundColor:"#E0E0E0", marginTop:"18px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> ข้อมูลฟาร์ม
                            </div> </div>
                                <div className="col-6 text-right "></div></div>
                              <Grid>
                              <div style={{ marginLeft:"20px"}}><h6>ชื่อฟาร์ม/ชื่อสถานที่ผลิต :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>วัตถุประสงค์ในการเลี้ยงโค :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ที่ตั้งฟาร์ม/สถานที่ผลิต :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ละติจุด :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ลองติจุด:</h6></div>
                              
                              
                            
                            </Grid>  
                        </div>  
                        <div className="col-12" style={{backgroundColor:"#FFFFFF", marginTop:"18px",height:"462px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> การรับรองมาตรฐาน
                            </div> </div>
                                <div className="col-6 text-right "></div></div>
                              <Grid>
                              <div className= "form-group">
                                                        <label for="Type">เนื้อสัตว์อนามัย(Q)</label>
                                                        <select className="form-control" id="type">
                                                        <option>ไม่มี</option>
                                                      
                                                        </select>
                                                    </div> 
                                                    <div className= "form-group">
                                                        <label for="Type">ปศุสัตว์ OK</label>
                                                        <select className="form-control" id="type">
                                                        <option>ไม่มี</option>
                                                       
                                                        </select>
                                                    </div> 
                                                    <div className= "form-group">
                                                        <label for="Type">อย.</label>
                                                        <select className="form-control" id="type">
                                                        <option>ไม่มี</option>
                                                      
                                                        </select>
                                                    </div> 
                                                    <div className= "form-group">
                                                        <label for="Type">ฮาลาน</label>
                                                        <select className="form-control" id="type">
                                                        <option>ไม่มี</option>
                                                        
                                                        </select>
                                                    </div> 
                              
                            
                            </Grid>  
                        </div>  

                        

                        
                    </div>
                                
                    <div style={{marginLeft:"46.5%" }}>           
                                                                                        <Button variant="contained" 
                                                                                        color="primary"
                                                                                            size="small"
                                                                                            style={{outline:"none"}}
                                                                                            
                                                                                        >
                                                                                            บันทึก
                                                                                            </Button>
                                                                                            <Button variant="contained" 
                                                                                            color="Secondary"
                                                                                            size="small"
                                                                                            style={{outline:"none"}}
                                                                                            
                                                                                        >
                                                                                            ยกเลิก
                                                                                            </Button>                                                                               
                        </div>       

                </div>
                     
                <Footer/>
            </div>
        );
    }
}
export default accesscow;


