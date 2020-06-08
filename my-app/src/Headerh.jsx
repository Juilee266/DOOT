import React from "react";
import {Row ,Col, Menu} from "antd";
import './Header.css';
import logo from './doot3.png';

class Headerh extends React.Component
{
 constructor()
 {
 super();
 }

render()
{
return(
  <div style={{color:"white",height:"30%",width:"100%",paddingTop:"0.125%",paddingLeft:"0.5%",paddingRight:"0.5%"}}>
            <Row>
             <Col><img src={logo} alt="Doot - You seek, We provide" class="center"/></Col>
             <Col style={{marginLeft:"20%",paddingTop:"2%"}}>
             <Menu  mode="horizontal">
               <Menu.Item key="1"><a href="/Home">Home</a></Menu.Item>
               <Menu.Item key="2"><a href ="/DonateVolunteer">Support Your Cause</a></Menu.Item>
             </Menu>
              </Col>
              </Row>

      </div>
//
);
}
}

export default Headerh;