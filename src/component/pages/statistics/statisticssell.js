import React from "react";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import './statistics.css';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Doughnut, Bar } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


class detailssellcow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          chartData: {
            labels: [
              "",
              "",
              "",
              "",
             
            ],
            datasets: [
              {
                label: "test01",
                data: [12, 19, 5, 7],
                backgroundColor: [
                  "rgba(255, 85, 85)",
                  "rgba(54, 162, 235)",
                  "rgba(255, 255, 85)",
                  "rgba(0, 255, 128)",
              
                ],
              },
            ],
          },
          chartData2: {
            labels: [
                "",
                "",
                "",
                "",
           
            ],
            datasets: [
              {
                data: [12, 19, 5, 7],
                backgroundColor: [
                  "rgba(255, 85, 85)",
                  "rgba(54, 162, 235)",
                  "rgba(255, 255, 85)",
                  "rgba(0, 255, 128)",
                 
                ],
              },
            ],
          },
        };
      }


    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                     <div className='row ' style={{backgroundColor:"#ffffff",marginTop:"20px", marginLeft:"10%",marginRight:"10%"}}></div> 
                     <div className='row  'style={{backgroundColor:"#F2F2F2", marginLeft:"10%",marginRight:"9.5%" , height: "900px"}}> 
                        <div className="col-12"> 
                        
                        <div className="row " style={{ marginTop:"5px"}}>  
                                                <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"5px"}}>
                                                    <ShoppingCartIcon />
                                                   </IconButton> <h5 style={{ marginTop:"12px"}}>สถิติการขายโคมีชีวิต</h5>  </div>
                                        <div container spacing={3}  style={{backgroundColor:"#ffffff",height:"100px", marginTop:"18px",marginLeft:"15px",marginRight:"15"}} >
                                        <Button variant="contained" color="primary">ค้นหา</Button>
                                        <FormControl style={{ marginTop:"20px",width:"300px",marginLeft:"20px"}}>
                                            <InputLabel id="demo-controlled-open-select-label">เลือกจังหวัด</InputLabel>
                                            <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                        
                                            >
                                            <MenuItem value="">
                                                <em>ไม่มี</em>
                                            </MenuItem>
                                            <MenuItem value={10}>พะเยา</MenuItem>
                                            <MenuItem value={20}>เชียงราย</MenuItem>
                                            <MenuItem value={30}>น่าน</MenuItem>
                                            <MenuItem value={30}>ลำปาง</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl style={{ marginTop:"20px",width:"300px",marginLeft:"20px"}}>
                                            <InputLabel id="demo-controlled-open-select-label">เลือกอำเภอ</InputLabel>
                                            <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                        
                                            >
                                            <MenuItem value="">
                                            <em>ไม่มี</em>
                                            </MenuItem>
                                            <MenuItem value={10}>พะเยา</MenuItem>
                                            <MenuItem value={20}>เชียงราย</MenuItem>
                                            <MenuItem value={30}>น่าน</MenuItem>
                                            <MenuItem value={30}>ลำปาง</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl style={{ marginTop:"20px",width:"300px",marginLeft:"20px"}}>
                                            <InputLabel id="demo-controlled-open-select-label">เลือกช่วงเวลา</InputLabel>
                                            <Select
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                        
                                            >
                                            <MenuItem value="">
                                            <em>ไม่มี</em>
                                            </MenuItem>
                                            <MenuItem value={10}>แสดงรายปี</MenuItem>
                                            <MenuItem value={20}>แสดงรายเดือน</MenuItem>
                                            <MenuItem value={30}>แสดงรายวัน</MenuItem>
                                            </Select>
                                        </FormControl>

                                        </div>

                                        <div container spacing={3}  style={{backgroundColor:"#ffffff",height:"450px", marginTop:"18px",marginLeft:"15px",marginRight:"15"}} >
                                        <Button variant="contained" color="primary">ข้อมูลกราฟสถิติ</Button>
                                        <div className="center3 container-fluid">
                                                <Grid container spacing={1}>
                                                
                                                <Grid container item xs={6} spacing={3} style={{marginTop:"20px"}}>
                                                    <Grid item xs={12}>
                                                    <Paper elevation={1}>
                                                        <Doughnut
                                                        data={this.state.chartData}
                                                        options={{
                                                            responsive: true,
                                                            title: {
                                                            display: true,
                                                            text: "รายการทั้งหมด",
                                                            fontSize: 25,
                                                            },
                                                            legend: {
                                                            display: true,
                                                            position: "bottom",
                                                            },
                                                            layout: {
                                                            padding: {
                                                                left: 0,
                                                                right: 0,
                                                                top: 0,
                                                                bottom: 0,
                                                            },
                                                            },
                                                        }}
                                                        />
                                                    </Paper>
                                                    </Grid>
                                                </Grid>
                                                
                                                <Grid container item xs={6} spacing={3} style={{marginTop:"20px"}}>
                                                
                                                    <Grid item xs={12}>
                                                    <Paper elevation={1}>
                                                        <Bar
                                                        data={this.state.chartData2}
                                                        options={{
                                                            responsive: true,
                                                            title: {
                                                            display: true,
                                                            text: "รายการทั้งหมด",
                                                            fontSize: 25,
                                                            },
                                                            legend: {
                                                            display: false,
                                                            },
                                                            layout: {
                                                            padding: {
                                                                left: 0,
                                                                right: 0,
                                                                top: 0,
                                                                bottom: 0,
                                                            },
                                                            },
                                                        }}
                                                        />
                                                    </Paper>
                                                    </Grid>
                                                </Grid>
                                                </Grid> 
                                                
                                            </div>
                                        
                                        </div>


                                        
                         <div className='row  ' container spacing={3}  style={{backgroundColor:"#ffffff",height:"30px", marginTop:"18px",marginLeft:"15px",marginRight:"0px"}}> 
                                    <div className="col-6"> <div className="row container-fluid r2-c4 "><Button variant="contained" color="primary" style={{marginRight:"0px"}}>ข้อมูลทั้งหมด</Button>
                                        </div> </div>
                                                <div className="col-6 text-right "style={{ marginTop:"8px"}}> <Button variant="contained" color="primary">EXPORT EXCEL</Button><Button variant="contained" color="secondary">EXPORT PDF</Button> </div>
                                        </div>

                                <div className='row  ' container spacing={3}  style={{backgroundColor:"#ffffff",height:"450px", marginTop:"",marginLeft:"15px",marginRight:"0px"}}>   
                                    <TableContainer style={{marginTop:"20px"}}>
                                
                                        <Table className aria-label="simple table">
                                
                                             <TableHead >

                                    <TableRow style={{backgroundColor:"#e6e6e6"}}>
                                        <TableCell align="center">ลำดับ</TableCell>
                                        <TableCell align="center">รายการ</TableCell>
                                        <TableCell align="center">จำนวน</TableCell>
                                        <TableCell align="center">น้ำหนัก</TableCell>
                                        <TableCell align="center">มูลค่ารวม</TableCell> 
                                        <TableCell align="center">ค่าเฉลี่ยมูลค่ารวม</TableCell> 
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                     
                                        <TableRow  >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">ชาโรเรล์</TableCell>
                                        <TableCell align="center">33</TableCell>
                                        <TableCell align="center">10255</TableCell>
                                        <TableCell align="center">3,000,000</TableCell>
                                        <TableCell align="center">68.85%</TableCell>
                                        
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">ชาโรเรล์</TableCell>
                                        <TableCell align="center">33</TableCell>
                                        <TableCell align="center">10255</TableCell>
                                        <TableCell align="center">3,000,000</TableCell>
                                        <TableCell align="center">68.85%</TableCell>
                                        
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">ชาโรเรล์</TableCell>
                                        <TableCell align="center">33</TableCell>
                                        <TableCell align="center">10255</TableCell>
                                        <TableCell align="center">3,000,000</TableCell>
                                        <TableCell align="center">68.85%</TableCell>
                                        
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    
                                
                                </Table>
                                </TableContainer>
                                </div>            

                                        
                                        
                        </div>
                    
                        
                </div>
                     
                <Footer/>
            </div>
        );
    }
}
export default detailssellcow;