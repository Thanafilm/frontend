import React from "react";
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
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import ContactsIcon from '@material-ui/icons/Contacts';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { green } from '@material-ui/core/colors';

class list extends React.Component{

    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                        <div className='row  'style={{backgroundColor:"#ffffff",marginTop:"20px", marginLeft:"15%",marginRight:"15%"}}>
                            
                        </div>
                        
                        <div className='row  'style={{backgroundColor:"#e6e6e6",marginTop:"30px", marginLeft:"15%",marginRight:"15%"}}> 
                                 <div className="col-12"> <div className="row container-fluid r2-c4 "><table class="table table-bordered"> 
                                 
                                 <Button
                                    variant="contained"
                                    color="primary"
                                    size="Large "
                                     style={{outline:"none"}}
                                    startIcon={<ContactsIcon  />}
                                >
                                  <h5>รายการรับเรื่อง</h5>   
                                </Button>  <TextField className="textField-width5  " style={{backgroundColor:"#e6e6e6",marginLeft:"70%"}}
                                                     id="outlined1"
                                                    label="ค้นหารายการรับเรื่อง"
                                                    size="small" /> 

                                                    <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"5px"}}>
                                                    <SearchIcon  />
                                                   </IconButton>
                                 <div> <TableContainer component={Paper} style={{marginTop:"20px"}}>
                                
                                <Table className aria-label="simple table">
                                
                                    <TableHead >
                                    
                                    <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">เลขบัตรประชาชน</TableCell>
                                        <TableCell align="center">ชื่อ</TableCell>
                                        <TableCell align="center">นามสกุล</TableCell>
                                        <TableCell align="center">เบอร์โทรใหม่</TableCell> 
                                        <TableCell align="center">ระหัสผ่านใหม่</TableCell> 
                                        <TableCell align="center">วันที่รับเเจ้งเรื่อง</TableCell> 
                                        <TableCell align="center">สถานะ</TableCell> 
                                        <TableCell align="center">จัดการ</TableCell> 
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                     
                                        <TableRow style={{backgroundColor:"#FFFFFF"}} >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">1360400238344</TableCell>
                                        <TableCell align="center">นันทวัฒน์</TableCell>
                                        <TableCell align="center">สายด้วง</TableCell>
                                        <TableCell align="center">0987797678</TableCell>
                                        <TableCell align="center">0960347380</TableCell>
                                        <TableCell align="center">10/10/2020</TableCell>
                                        <TableCell align="center"><Button  style={{color: green[500]}} >ดำเนินการแล้ว</Button></TableCell>
                                        <TableCell align="center"> 
                                                    <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"0px"}}>
                                                    <AssignmentIcon  />
                                                   </IconButton>

                                                   <IconButton color="secondary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White",  }}>
                                                    <DeleteForeverIcon />
                                                   </IconButton>
                                                   
                                                   
                                                   </TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    

                                
                                </Table>
                                </TableContainer></div>
                                
                                 </table>
                                 
                                 </div> </div>
                                 
                                 
                <Footer/>
            </div></div>
        );
    }
}
export default list;


