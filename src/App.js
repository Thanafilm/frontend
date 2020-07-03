import React, { Component } from 'react';
import Monitor from './Monitor';
import {BrowserRouter,Route,Switch} from "react-router-dom";
//import Loginpage from './component/Login/Loginpage';
// component
import login from "./component/Login/login";
import sigup from "./component/Login/registor"
import auctioncow from "./component/pages/uploadproduct/auctioncow";
import accesscow from "./component/pages/uploadproduct/accesscow";
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
import offerbuytable from "./component/pages/offerofbuy/offerbuytable";
import offerbuyDetails from "./component/pages/offerofbuy/offerbuyDetails";
import detailsaccess from "./component/pages/Details/detailsaccess";
import detailssellcow from "./component/pages/Details/detailssellcow";
import detailsproduct from "./component/pages/Details/detailsproduct";
import detailsauction from "./component/pages/Details/detailsauction";
import statisticsaccess from "./component/pages/statistics/statisticsaccess";
import statisticssell from "./component/pages/statistics/statisticssell";
import statisticsproduct from "./component/pages/statistics/statisticsproduct";
import statisticsauction from "./component/pages/statistics/statisticsauction";
import list from "./component/pages/list/list";

import home from "./component/Home/homepage"


//redux

import signup from './component/Login/registor';


// Router to path componente
class App extends Component{
  
  renderRouter(){
    return(
   
       
         <Switch>
        <Route path ="/home" component ={home}/>
        <Route exact path="/" component={Monitor}/>
        <Route path="/login" component={login}/>
        <Route path="/signup" component={signup}/>
        <Route path="/upload/auctioncow" component= {auctioncow}/>
        <Route path = "/upload/salecattle" component= {upsalecattle}/>
        <Route path = "/upload/accesscow" component= {accesscow}/>
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
        <Route path = "/offertable/offerbuy" component = {offerbuytable}/>
        <Route path = "/details/sell" component = {detailssellcow}/>
        <Route path = "/details/product" component = {detailsproduct}/>
        <Route path = "/details/access" component = {detailsaccess}/>
        <Route path = "/details/auction" component = {detailsauction}/>
        <Route path = "/stat/sell" component = {statisticssell}/>
        <Route path = "/stat/auction" component = {statisticsauction}/>
        <Route path = "/stat/product" component = {statisticsproduct}/>
        <Route path = "/stat/access" component = {statisticsaccess}/>
        <Route path = "/offer/Details" component = {offerbuyDetails}/>
        <Route path = "/li/list" component = {list}/>
        
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