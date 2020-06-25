import React from "react";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import {Button} from 'react-bootstrap';
import product1 from "../../Img/product1.jpg";
import product2 from "../../Img/product2.jpg";
import product3 from "../../Img/product3.jpg";
import product4 from "../../Img/product4.jpg";
import "./sale.css";


class products extends React.Component{
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
                     <div className="col-md-3"><div className="col-md box-bg3"><img src={product1} alt="product1" className="img4-box" ></img><h6 class="card-title">ฟาร์ม: โคขุนฟาร์ม </h6><h6 class="card-title">ผู้ขาย: ***** </h6><p class="text-dark">฿20,500.00 บาท</p> <a href="/details/product"><Button variant="success">รายละเอียด</Button></a></div></div>    
                     <div className="col-md-3"><div className="col-md box-bg3"><img src={product2} alt="product2" className="img5-box" ></img><h6 class="card-title">ฟาร์ม: โคขุนฟาร์ม</h6><h6 class="card-title">ผู้ขาย: ***** </h6><p class="text-dark">฿20,500.00 บาท</p><Button variant="success">รายละเอียด</Button></div></div>
                     <div className="col-md-3"><div className="col-md box-bg3"><img src={product3} alt="product3" className="img6-box" ></img><h6 class="card-title">ฟาร์ม: โคขุนฟาร์ม</h6> <h6 class="card-title">ผู้ขาย: ***** </h6><p class="text-dark">฿20,500.00 บาท</p><Button variant="success">รายละเอียด</Button></div></div>    
                      <div className="col-md-3"><div className="col-md box-bg3"><img src={product4} alt="product4" className="img7-box" ></img><h6 class="card-title">ฟาร์ม: โคขุนฟาร์ม</h6><h6 class="card-title">ผู้ขาย: ***** </h6><p class="text-dark">฿20,500.00 บาท</p><Button variant="success">รายละเอียด</Button> </div></div>
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
export default products ;