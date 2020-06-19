import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Grid from "@material-ui/core/Grid";
import './manage.css';
import SearchIcon from '@material-ui/icons/Search';



class manageaccess extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                        <div className='row  'style={{backgroundColor:"#ffffff",marginTop:"20px", marginLeft:"15%",marginRight:"15%"}}>
                            
                        </div>
                        
                        <div className='row  'style={{backgroundColor:"White",marginTop:"20px", marginLeft:"15%",marginRight:"15%"}}> 
                                 <div className="col-12"> <div className="row container-fluid r2-c4 "><table class="table table-bordered"> 
                                 
                                 <Button
                                    variant="contained"
                                    color="primary"
                                    size="Large "
                                     style={{outline:"none"}}
                                    startIcon={<ShoppingBasketIcon  />}
                                >
                                  <h5>จัดการสินค้าเบ็ดเตล็ด</h5>   
                                </Button>  <TextField className="textField-width1  " style={{backgroundColor:"White",marginLeft:"68%", marginTop:"2px"}}
                                                     id="outlined1"
                                                    label="ค้นหาชื่อสินค้า"
                                                    size="small" /> 

                                                    <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"5px"}}>
                                                    <SearchIcon  />
                                                   </IconButton>
                                 <div> <TableContainer component={Paper} style={{marginTop:"20px"}}>
                                 <div className="text-header-checkup"><a href="/listproduct/auction"style={{ marginLeft:"0%"}}>รายการสินค้าที่กำลังวางขาย</a>  <a href="/listproduct/auction" style={{ marginLeft:"2%"}}>รายการสินค้าที่หมดเวลาขาย</a> <a href="/listproduct/auction" style={{ marginLeft:"2%"}}>ประวัติการขายที่เสร็จสิ้น</a> 
                                 
                                                 
                                              </div>
                                <Table className aria-label="simple table">
                                
                                    <TableHead >
                                    
                                    <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">ประเภทสินค้า</TableCell>
                                        <TableCell align="center">ชื่อสินค้า</TableCell>
                                        <TableCell align="center">ราคา(บาท)</TableCell>
                                        <TableCell align="center">จำนวน</TableCell>
                                        <TableCell align="center">วันที่ลงขาย</TableCell>
                                        <TableCell align="center">เวลาที่เหลือ</TableCell>
                                        <TableCell align="center">ดูรายละเอียด</TableCell>
                                        <TableCell align="center">ตัวเลือก</TableCell> 
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">11/11/2019</TableCell>
                                        <TableCell align="center">15/11/2019</TableCell>
                                        <TableCell align="center"> -</TableCell>
                                        
                                        <TableCell align="center"> <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<SaveIcon />}
                                >
                                    จัดการสินค้า
                                </Button></TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>

                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">11/11/2019</TableCell>
                                        <TableCell align="center">15/11/2019</TableCell>
                                        <TableCell align="center"> -</TableCell>
                                        
                                        <TableCell align="center"> <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<SaveIcon />}
                                >
                                    จัดการสินค้า
                                </Button></TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">11/11/2019</TableCell>
                                        <TableCell align="center">15/11/2019</TableCell>
                                        <TableCell align="center"> -</TableCell>
                                        
                                        <TableCell align="center"> <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<SaveIcon />}
                                >
                                    จัดการสินค้า
                                </Button></TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">11/11/2019</TableCell>
                                        <TableCell align="center">15/11/2019</TableCell>
                                        <TableCell align="center"> -</TableCell>
                                        
                                        <TableCell align="center"> <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<SaveIcon />}
                                >
                                    จัดการสินค้า
                                </Button></TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">11/11/2019</TableCell>
                                        <TableCell align="center">15/11/2019</TableCell>
                                        <TableCell align="center"> -</TableCell>
                                        
                                        <TableCell align="center"> <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<SaveIcon />}
                                >
                                    จัดการสินค้า
                                </Button></TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">11/11/2019</TableCell>
                                        <TableCell align="center">15/11/2019</TableCell>
                                        <TableCell align="center"> -</TableCell>
                                        
                                        <TableCell align="center"> <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<SaveIcon />}
                                >
                                    จัดการสินค้า
                                </Button></TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>

                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">11/11/2019</TableCell>
                                        <TableCell align="center">15/11/2019</TableCell>
                                        <TableCell align="center"> -</TableCell>
                                        
                                        <TableCell align="center"> <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<SaveIcon />}
                                >
                                    จัดการสินค้า
                                </Button></TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">11/11/2019</TableCell>
                                        <TableCell align="center">15/11/2019</TableCell>
                                        <TableCell align="center"> -</TableCell>
                                        
                                        <TableCell align="center"> <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<SaveIcon />}
                                >
                                    จัดการสินค้า
                                </Button></TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                </Table>
                                </TableContainer></div>
                                 </table></div> </div>
                <Footer/>
            </div></div>
        );
    }
}
export default manageaccess;


//<IconButton color="primary" aria-label="upload picture" component="span">
                                         //<ShoppingBasketIcon  />
                                       // </IconButton>