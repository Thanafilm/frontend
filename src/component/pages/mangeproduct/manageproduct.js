import React from "react";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";

class manageproduct extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                <h1>จัดการผลิตภัณฑ์</h1>
            </div>
        );
    }
}
export default manageproduct;