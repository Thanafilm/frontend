import React from "react";
import {Button} from 'react-bootstrap';
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import Grid from "@material-ui/core/Grid";
import './details.css';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import photo2 from "../../Img/photo2.jpg";
import RoomIcon from '@material-ui/icons/Room';
import AssignmentIcon from '@material-ui/icons/Assignment';




class detailssellcow extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                     <div className='row ' style={{backgroundColor:"#ffffff",marginTop:"20px", marginLeft:"10%",marginRight:"10%"}}></div> 
                     <div className='row  'style={{backgroundColor:"#F2F2F2", marginLeft:"10%",marginRight:"9.5%" , height: "900px"}}> 
                        <div className="col-7"> 
                        
                        <div className="row " style={{ marginTop:"5px"}}>  
                                                <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"5px"}}>
                                                    <ShoppingCartIcon />
                                                   </IconButton> <h5 style={{ marginTop:"12px"}}>รายละเอียดสินค้า</h5>  </div>
                                        <Grid container spacing={3}  style={{backgroundColor:"#ffffff",height:"600px", marginTop:"18px",marginLeft:"2px",marginRight:"15"}} >
                                        <div class="container"style={{ marginLeft:"15px",marginTop:"20px"}}>
                                         <img src={photo2} alt="photo2"  style={{ height:"400px",width:"500",marginLeft:"100px"}}></img>
                                        </div>

                                        <div className='row ' >
                                        <div className="col-md-3"><img src={photo2} alt="photo2" className="img4-box" style={{ height:"140px",width:"185px",marginLeft:"130px"}}></img></div>  
                                        <div className="col-md-3"><img src={photo2} alt="photo6" className="img5-box" style={{ height:"140px",width:"185px",marginLeft:"107px"}}></img></div>
                                        <div className="col-md-3"><img src={photo2} alt="photo4" className="img6-box" style={{ height:"140px",width:"185px",marginLeft:"86px"}}></img></div>   
                                    
                                        </div> 

                                        </Grid>
                                        <Grid container spacing={3}  style={{backgroundColor:"#ffffff",height:"200px", marginTop:"18px",marginLeft:"2px",marginRight:"15"}} >
                                        <div class="container">
                                        <div class="post-comments">

                                            <form>
                                            <div class="form-group">
                                                <label for="comment">เเสดงความคิดเห็น</label>
                                                <textarea name="comment" class="form-control" rows="3"></textarea>
                                            </div>
                                            <Button variant="success">ส่ง</Button>
                                            </form>

                                            
                                            
                                        </div></div>

                                        </Grid>
                                        
                                        
                                        </div>
                    
                        <div className="col-5  ">  
                        
                        <div className="col-12" style={{backgroundColor:"#ffffff", marginTop:"76.5px"}}> 
                              <div style={{ marginLeft:"20px"}}><h5>ชื่อโค :</h5></div>
                              <div style={{ marginLeft:"20px"}}><h6>หมายเลขประจำตัวสัตว์ :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>สายพันธุ์ :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>เพศ : :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ผู้ลงขาย :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>เบอร์โทร :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ช่องการติดต่อ :</h6></div> 
                              <div style={{ marginLeft:"5px"}}><IconButton color="secondary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White",}}>
                                                    <RoomIcon /><h6>ที่อยู่ฟาร์ม</h6>  <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White",}}>
                                                                                            <AssignmentIcon /><h6>ข้อมูลสายเลือด</h6>  
                                                                                             </IconButton>
                                                   </IconButton></div> 
                        </div>

                        <div className="col-12" style={{backgroundColor:"#ffffff", marginTop:"14px"}}> 
                              <div style={{ marginLeft:"20px"}}><h5>วันเกิด :</h5></div>
                              <div style={{ marginLeft:"20px"}}><h6>อายุ :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>น้ำหนักปัจจุบัน :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ขนาดรอบอก(ซม.) :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ส่วนสูง :</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ความยาวลำตัว(ซม) :</h6></div>
                              <div style={{ marginLeft:"5px"}}><IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White",}}>
                                                    <AssignmentIcon /><h6>ใบพันธุ์ประวัติ</h6>  <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White",}}>
                                                                                            <AssignmentIcon /><h6>ข้อมูลสายเลือด</h6>  
                                                                                             </IconButton>
                                                   </IconButton></div> 
                        </div>

                        <div className="col-12" style={{backgroundColor:"#ffffff", marginTop:"13px"}}> 
                              <div style={{ marginLeft:"20px"}}><h5>ข้อมูลการผสมพันธุ์</h5></div>
                              <div style={{ marginLeft:"20px"}}><h6>- ไม่มีข้อมูล</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ข้อมูลการทำวัคซีน</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>- ไม่มีข้อมูล</h6></div> 
                              <div style={{ marginLeft:"20px"}}><h6>ข้อมูลการรักษา</h6></div>
                              <div style={{ marginLeft:"20px"}}><h6>- ไม่มีข้อมูล</h6></div>  
                              <div style={{ marginLeft:"20px"}}><h6>ข้อมูลการทดสอบโรค</h6></div>
                              <div style={{ marginLeft:"20px"}}><h6>- ไม่มีข้อมูล</h6></div>  
                              <div style={{ marginLeft:"20px"}}><h6>ข้อมูลการถ่ายพยาธิ</h6></div>
                              <div style={{ marginLeft:"20px"}}><h6>- ไม่มีข้อมูล</h6></div> 
                              
                        </div>
                    </div>
                </div>
                     
                <Footer/>
            </div>
        );
    }
}
export default detailssellcow;