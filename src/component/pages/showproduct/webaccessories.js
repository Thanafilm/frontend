import React from "react";

import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";


class accessories extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                <h1>หน้ารายการขายสินค้าเบ็ดเตล็ด</h1>
            </div>
        );
    }
}
export default accessories;