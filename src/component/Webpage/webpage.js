import React, { Component } from 'react';
import "../styleWebpage.css";
//ยังไม่ได้ชื่อมภาพกับserver

import Capture from "../Img/Capture.png";
import Image62 from "../Img/Image62.png";

import Image61 from "../Img/Image61.png";
import Image63 from "../Img/Image63.png";

import Header from '../../Header';
import Footer from '../../Footer';
import {
  Navbar,
  Button,
  DropdownButton,
  Dropdown,
  
} from "react-bootstrap";





class Webpage extends Component{

  render(){
    return(
      <div className="container-fluid">
        
        <div className="row r1-style">
            <div className="col-md r1-c1">.</div> 
        </div>

        <Header/>
            
        
        <div className="row container-fluid r2-c4 ">    รายการประมูลโคมีชีวิต
        <div className="dropdown pad">
          <div className=""><Button variant="success">เลือกหมวดหมู่</Button></div>
          <div className="dropdown-content">
            <a href="/listproduct/auction">รายการประมูลโคมีชีวิต</a>
            <a href="/listproduct/salecattle">รายการขายโคมีชีวิต</a>
            <a href="/listproduct/saleproduct">รายการขายผลิตภัณฑ์จากโค</a>
            <a href="/listproduct/accessories">รายการขายสินค้าเบ็ดเตล็ด</a>
          </div>
        </div></div> 
        <div className="r4-pad container-fluid" >
            <div className="row">
            <div className="col-md box-bg"><img src={Capture} alt="Capture" className="img1-box box" ></img> </div>
            <div className="col-md box-bg3"> <h2 class="card-title">ตลาดซื้อ ขายและประมูลโคออนไลน์ </h2><h4 class="card-title">Cattle Market and Auction Online</h4><p class="card-text">เจ้าแดงชาโรดลส์</p><p class="card-text">ราคา: 30000</p><ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">ดูการประมูล</a>
    </li></ul></div>
                 
            </div>
            
            <div className="row container-fluid r2-c4 ">รายการประมูลโคอื่นๆ</div> 
            <div className="row">
                <div className="col-md box-bg2"><img src={Image61} alt="Image61" className="img4-box" ></img><h4 class="card-title">ชาโรเล่ส์ </h4><p class="card-text">ราคา: 30000</p><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p> <Button variant="success">ประมูล</Button></div>
                <div className="col-md box-bg2"><img src={Image62} alt="Image62" className="img5-box" ></img><h4 class="card-title">ชาโรเล่ส์ </h4><p class="card-text">ราคา: 30000</p><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p> <Button variant="success">ประมูล</Button></div>
                <div className="col-md box-bg2"><img src={Image63} alt="Image63" className="img6-box" ></img><h4 class="card-title">ชาโรเล่ส์ </h4><p class="card-text">ราคา: 30000</p> <p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p><Button variant="success">ประมูล</Button></div>
                <div className="col-md box-bg2"><img src={Image62} alt="Image62" className="img7-box" ></img><h4 class="card-title">ชาโรเล่ส์ </h4><p class="card-text">ราคา: 30000</p><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p><Button variant="success">ประมูล</Button> </div>
            </div>
        </div>

        <Footer/>
        
        
      </div>
    )
  }
}

export default Webpage;