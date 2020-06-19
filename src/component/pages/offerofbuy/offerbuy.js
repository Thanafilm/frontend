import React from "react";
import {Button} from 'react-bootstrap';
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import './styleAbor.css';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";




class accessories extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                     <div className='row ' style={{backgroundColor:"#ffffff",marginTop:"20px", marginLeft:"10%",marginRight:"10%"}}><button type="button" class="btn btn-success"><h5>เสนอซื้อสินค้า</h5></button></div> 
                     <div className='row  'style={{backgroundColor:"#F0F8FF", marginLeft:"10%",marginRight:"9.5%"}}> 
                        <div className="col-6"> 
                        
                        <div className="row container-fluid r2-c4 "> ข้อมูลเสนอซื้อสินค้า</div>
                        <Grid container spacing={3} className="pad-10" >
                                             
                                              

                                           
                                     <div className="" ><Grid item xs={20} >
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="ชนิดสินค้าที่ต้องการซื้อ"
                                                    size="small" />
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="ชนิดสินค้าที่ต้องการซื้อ"
                                                    size="small" />
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="ชนิดสินค้าที่ต้องการซื้อ"
                                                    size="small" />
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="ชนิดสินค้าที่ต้องการซื้อ"
                                                    size="small" />
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="ชนิดสินค้าที่ต้องการซื้อ"
                                                    size="small" />
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="ชนิดสินค้าที่ต้องการซื้อ"
                                                    size="small" />
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="ชนิดสินค้าที่ต้องการซื้อ"
                                                    size="small" />
                                              </Grid></div>
                        </Grid></div>
                    
                        <div className="col-6  r2-c4"> รายการเสนอซื้อ 
                        <div> <table class="table table-White">
                                    <thead>
                                    <tr>
                                        <th>ลำดับ</th>
                                        <th>หัวเรื่อง</th>
                                        <th>ประเภทสินค้า</th>
                                        <th>จำนวนที่ต้องการ</th>
                                        <th>จัดการ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>อยากได้วัว</td>
                                        <td>ซื้อวัว</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                    <td>1</td>
                                        <td>อยากได้วัว</td>
                                        <td>ซื้อวัว</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                    <td>1</td>
                                        <td>อยากได้วัว</td>
                                        <td>ซื้อวัว</td>
                                        <td>1</td>
                                    </tr>
                                    </tbody>
                                </table>    </div></div></div>
                        
                
                 
                 
                <Footer/>
            </div>
        );
    }
}
export default accessories;