import React, { Component } from 'react';
import Monitor from './Monitor';
import {BrowserRouter,Route,Switch} from "react-router-dom";
//import Loginpage from './component/Login/Loginpage';
import Registor from './component/Login/registor';
import login from "./component/Login/login";
import auctioncow from "./component/pages/uploadproduct/auctioncow";
import upsalecattle from "./component/pages/uploadproduct/salecattle";
import accessories from './component/pages/showproduct/webaccessories';
import cattleproduct from "./component/pages/uploadproduct/cattleproduct";
import auction from "./component/pages/showproduct/Webauctioncow";
import salecattle from "./component/pages/showproduct/Websalecow";
import product from "./component/pages/showproduct/webcattleproduct";
import managesale from "./component/pages/mangeproduct/managesale";
import mangeauction from "./component/pages/mangeproduct/manageauction";
import mangeproduct from "./component/pages/mangeproduct/manageproduct";
import manageaccs from "./component/pages/mangeproduct/manageaccess";
import offerbuy from "./component/pages/offerofbuy/offerbuy";

// Router to path componente
class App extends Component{
  
  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Monitor}/>
        <Route path="/login" component={login}/>
        <Route path="/registor" component={Registor}/>
        <Route path="/upload/auctioncow" component= {auctioncow}/>
        <Route path = "/upload/salecattle" component= {upsalecattle}/>
        <Route path = "/upload/cattleproduct" component = {cattleproduct}/>
        <Route path = "/listproduct/accessories" component ={accessories}/>
        <Route path = "/listproduct/auction" component = {auction}/>
        <Route path = "/listproduct/salecattle" component ={salecattle}/>
        <Route path = "/listproduct/saleproduct" component ={product}/>
        <Route path = "/manage/salecattle" component = {managesale}/>
        <Route path = "/manage/auction" component = {mangeauction}/>
        <Route path = "/manage/product" component = {mangeproduct}/>
        <Route path = "/mange/accessories" component = {manageaccs}/>
        <Route path = "/offer/offerbuy" component = {offerbuy}/>


      </Switch>
    )
  }
  render(){
    
    return(
      <div>
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    )
  }
}

export default App;