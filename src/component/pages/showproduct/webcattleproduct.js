import React from "react";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";


class products extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                <h1>หน้ารายการผลิตภัฑณ์</h1>
            </div>
        );
    }
}
export default products ;