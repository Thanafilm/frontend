import React from "react";
import {Button} from 'react-bootstrap';
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




class salecattle extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                     
                     <div className='row  'style={{backgroundColor:"#F2F2F2", marginLeft:"10%",marginRight:"10%" , height: "1520px",marginTop:"20px" }}> 
                        <div className="col-6"> 
                        
                        <div className="row " style={{ marginTop:"5px"}}>  
                                                <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"5px"}}>
                                                    <ShoppingCartIcon />
                                                   </IconButton> <h5 style={{ marginTop:"12px"}}>ลงทะเบียนขายโคมีชีวิต</h5>  </div>
                                        <Grid container spacing={3}  style={{backgroundColor:"#ffffff",height:"160px", marginTop:"18px",marginLeft:"2px",marginRight:"15"}} >
                                       อัพโหลดรูปภาพ <center><p  style={{color:"red",marginLeft:"5px" }}>อัพโหลดรูปภาพ 4 รูป ประกอบด้วย ด้านหน้า หลัง ซ้ายและขวา ขนาดรูปภาพไม่เกิน100MB</p></center>
                                        <div> <h8> <Button type="submit" className="btn btn-success"  style={{marginLeft:"10px"}}>เลือกรูปภาพ 0/4</Button></h8></div>    
                                        <hr width="100%"></hr>
                                        <div> <h8> <Button type="submit" className="btn btn-success"  style={{marginLeft:"10px"}}>เลือกวีดีโอ</Button></h8></div>




                                        </Grid>
                                        <Grid container spacing={3}  style={{backgroundColor:"#ffffff",height:"1210px", marginTop:"18px",marginLeft:"2px",marginRight:"15"}} >
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
                                                    <div style={{ marginLeft:"0px"}}>ข้อมูลใบพันธุ์ประวัติ
                                                    <Button type="submit" className="btn btn-success"style={{ marginLeft:"10px"}} ><h6>กรอกข้อมูลใบพันธุ์ประวัติ</h6>  </Button>
                                                                                            
                                                                                           
                                                   </div> 
                                                    
                                                   
                                                </div>

                                        </Grid>         
                                       </div>
                    
                        <div className="col-6  ">  
                        
                         <div className="col-12" style={{backgroundColor:"#ffffff", marginTop:"76.5px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการผสมพันธุ์
                            </div> </div>
                                <div className="col-6 text-right "><Fab color="primary" aria-label="add" size="small " style={{ }}>
                                                                     <AddIcon />
                                                                 </Fab></div></div>
                              <Grid>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่ทำการผสมพันธุ์</TableCell>
                                        <TableCell align="center">ชื่อพ่อพันธุ์/น้ำเชื้อที่ใช้</TableCell>
                                        <TableCell align="center">ประเภทการผสมพันธุ์</TableCell>
                                        <TableCell align="center">ท้องที่(ครั้งที่ตั้งท้อง)</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                    <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            
                            </Grid>  
                        </div>

                        <div className="col-12" style={{backgroundColor:"#ffffff", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการทำวัคซีน
                            </div> </div>
                                <div className="col-6 text-right "><Fab color="primary" aria-label="add" size="small " style={{ }}>
                                                                     <AddIcon />
                                                                 </Fab></div></div>
                              <Grid>
                                  <Table>
                              <TableRow className="col-12">
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่ทำวัคซีน</TableCell>
                                        <TableCell align="center">ชุดการผลิต</TableCell>
                                        <TableCell align="center">ชนิดวัคซีน</TableCell>
                                        <TableCell align="center">ผู้ดำเนินการทำวัคซีน</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                    <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            </Table>
                            </Grid>  
                        </div>

                        <div className="col-12" style={{backgroundColor:"#ffffff", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการรักษา
                            </div> </div>
                                <div className="col-6 text-right "><Fab color="primary" aria-label="add" size="small " style={{ }}>
                                                                     <AddIcon />
                                                                 </Fab></div></div>
                              <Grid>
                              <Table>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่รักษา</TableCell>
                                        <TableCell align="center">วิธีการรักษา</TableCell>
                                        <TableCell align="center">ยาที่ใช้รักษา</TableCell>
                                        <TableCell align="center">ผู้รักษา</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                    <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            </Table>
                            </Grid>  
                        </div>
                        <div className="col-12" style={{backgroundColor:"#ffffff", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการทดสอบโรค
                            </div> </div>
                                <div className="col-6 text-right "><Fab color="primary" aria-label="add" size="small " style={{ }}>
                                                                     <AddIcon />
                                                                 </Fab></div></div>
                              <Grid>
                              <Table>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่ทำการทดสอบ</TableCell>
                                        <TableCell align="center">ชื่อโรค</TableCell>
                                        <TableCell align="center">ผลการทดสอบ</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                    <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            </Table>
                            </Grid>  
                        </div>
                        <div className="col-12" style={{backgroundColor:"#ffffff", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการถ่ายพยาธิ
                            </div> </div>
                                <div className="col-6 text-right "><Fab color="primary" aria-label="add" size="small " style={{ }}>
                                                                     <AddIcon />
                                                                 </Fab></div></div>
                              <Grid>
                              <Table>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่ทำถ่ายพยาธิ</TableCell>
                                        <TableCell align="center">ชื่อยาถ่ายพยาธิ</TableCell>
                                        <TableCell align="center">ผู้ดำเนินการ</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                    <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            </Table>
                            </Grid>  
                        </div>
                        <div className="col-12" style={{backgroundColor:"#ffffff", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการได้รับรางวัล
                            </div> </div>
                                <div className="col-6 text-right "><Fab color="primary" aria-label="add" size="small " style={{ }}>
                                                                     <AddIcon />
                                                                 </Fab></div></div>
                              <Grid>
                              <Table>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">ประเภทการจัดกิจกรรม</TableCell>
                                        <TableCell align="center">ผู้จัดกิจกรรม</TableCell>
                                        <TableCell align="center">รางวัลที่ได้</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                    <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                                </Table>
                            </Grid>  
                        </div>
                                        
    

                        

                        
                    </div>
                                
                         <Button type="submit" className="btn btn-primary" style={{marginLeft:"45%"}}>บันทึก</Button>
                         <Button type="reset" className="btn btn-danger">ยกเลิก</Button>        

                </div>
                     
                <Footer/>
            </div>
        );
    }
}
export default salecattle;


