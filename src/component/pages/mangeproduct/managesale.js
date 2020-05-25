import React from "react";
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";

class managesale extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                <h1>จัดการขายโคมีชีวิต</h1>
            </div>
        );
    }
}
export default managesale;