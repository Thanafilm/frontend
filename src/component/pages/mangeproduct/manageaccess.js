import React from "react";
import "../../../component/styleWebpage.css"
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";

class manageaccs extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                <h1>จัดการสินค้าเบ็ดเตล็ด</h1>
            </div>
        );
    }
}
export default manageaccs;