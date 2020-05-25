import React from "react";
import  Signout from "./Signout";
import "./styleNavbar.css";
//react------ HOOK
export default function NavbarLogin() {
 

  return (
    <div className="container-fluid  ">
      <nav className="row o2">
        <uli className="nav-item">
          <a class="nav-link" href="/login">หน้าแรก</a>
        </uli>

        <div className="dropdown">
          <div className="dropbtn">ลงทะเบียนสินค้า</div>
          <div className="dropdown-content">
            <a href="/upload/salecattle">ลงทะเบียนขายโคมีชีวิต</a>
            <a href="/upload/auctioncow">ลงทะเบียนประมูลโคมีชีวิต</a>
            <a href="/upload/cattleproduct">ลงทะเบียนขายผลิตภัณฑ์จากโค</a>
            <a href="/login">ลงทะเบียนขายสินค้าเบ็ดเตล็ด</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">จัดการสินค้า</div>
          <div className="dropdown-content">
            <a href="/manage/salecattle"> จัดการซื้อขายโคมีชีวิต</a>
            <a href="/manage/auction">จัดการประมูลโคมีชีวิต</a>
            <a href="/manage/product">จัดการผลิตภัณฑ์จากโค</a>
            <a href="/mange/accessories">จัดการสินค้าเบ็ดเตล็ด</a>
           
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">เสนอซื้อสินค้า</div>
          
        </div>

        <div className="dropdown">
          <div className="dropbtn">รายงาน</div>
          <div className="dropdown-content">
            <a href="/manange/salecattle">สถิติขายโคมีชีวิต</a>
            <a href="/manange/auction">สถิติการประมูลโคมีชีวิต</a>
            <a href="/manange/product">สถิติการขายผลิตภัณฑ์จากโค</a>
            <a href="/mange/accessories">สถิติการขายสินค้าเบ็ดเตล็ด</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">คู่มือการใช้งาน</div>
          
        </div>

                

        
        <div className="Right">
           <Signout/>
           </div>
       
      </nav>
    </div>
  );
}