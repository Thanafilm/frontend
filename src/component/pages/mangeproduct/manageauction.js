import React from "react";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";

class manageauction extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                <h1>จัดการประมูลโค</h1>
            </div>
        );
    }
}
export default manageauction;