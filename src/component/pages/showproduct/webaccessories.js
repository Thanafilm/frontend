import React from "react";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import acc1 from "../../Img/acc1.jpg";
import acc2  from "../../Img/acc2.jpg";
import acc3 from "../../Img/acc3.jpg";
import acc4 from "../../Img/acc4.jpg";
import "./sale.css";
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


class accessories extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                
                     <div className='row  'style={{backgroundColor:"White",marginTop:"20px", marginLeft:"10%",marginRight:"10%"}}> 
                     <div className="col-6"> <div className="row container-fluid r2-c4 ">    รายการประมูลโคมีชีวิต
                    <div className="dropdown pad">
                     <div className="r2-c5">เลือกหมวดหมู่</div>
                         <div className="dropdown-content">
                             <a href="/listproduct/auction">รายการประมูลโคมีชีวิต</a>
                             <a href="/listproduct/salecattle">รายการขายโคมีชีวิต</a>
                             <a href="/listproduct/saleproduct">รายการขายผลิตภัณฑ์จากโค</a>
                             <a href="/listproduct/accessories">รายการขายสินค้าเบ็ดเตล็ด</a>
                         </div> </div></div> </div>
            <div className="col-6 text-right r2-c4"> รายการเสนอซื้อ</div></div>
                <div className='row ' style={{backgroundColor:"#ffffff", marginLeft:"10%",marginRight:"10%"}}>
                     <div className="col-md-3"><div className="col-md box-bg3"><img src={acc1} alt="acc1" className="img4-box" ></img><h6 class="card-title" >เครื่องช่วยคลอดลูกโค </h6><h6 class="card-title">ผู้ขาย: ***** </h6><p class="text-dark">฿20,500.00 บาท</p> <a href="/details/access"><Button variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<AddShoppingCartIcon/>}
                                >
                                    รายละเอียด
                                </Button></a></div></div>    
                     <div className="col-md-3"><div className="col-md box-bg3"><img src={acc2} alt="acc2" className="img5-box" ></img><h6 class="card-title">อุปกรณ์ช่วยหายใจลูกโคแรกเกิด</h6><h6 class="card-title">ผู้ขาย: ***** </h6><p class="text-dark">฿20,500.00 บาท</p><Button variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<AddShoppingCartIcon/>}
                                >
                                    รายละเอียด
                                </Button></div></div>
                     <div className="col-md-3"><div className="col-md box-bg3"><img src={acc3} alt="acc3" className="img6-box" ></img><h6 class="card-title">สายวัดน้ำหนักโค</h6> <h6 class="card-title">ผู้ขาย: ***** </h6><p class="text-dark">฿20,500.00 บาท</p><Button variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<AddShoppingCartIcon/>}
                                >
                                    รายละเอียด
                                </Button></div></div>    
                      <div className="col-md-3"><div className="col-md box-bg3"><img src={acc4} alt="acc4" className="img7-box" ></img><h6 class="card-title">อ่างให้น้ำสำหรับโค</h6><h6 class="card-title">ผู้ขาย: ***** </h6><p class="text-dark">฿20,500.00 บาท</p><Button variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<AddShoppingCartIcon/>}
                                >
                                    รายละเอียด
                                </Button></div></div>
                 </div> 
                 
                 <div className='row ' style={{backgroundColor:"#ffffff", marginLeft:"10%",marginRight:"10%"}}><ul class="col-12 pagination justify-content-end text-right">
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">หน้าแรก</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">ถัดไป</a></li>
                    </ul></div>
                <Footer/>
            </div>
        );
    }
}
export default accessories;