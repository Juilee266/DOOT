import React from "react";
import { Form, Input, Button, Checkbox ,Spin } from 'antd';
import axios from "axios";
import {LoadingOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import './TokenEnterPage.css';
import RequestViewPage from './RequestViewPage';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class TokenEnterPage extends React.Component
{
 constructor()
 {
 super();
 this.state = {NextPage:false,loadButton:false,color1:"red",color2:"red",color3:"red",color4:"red",ngo:null,description:null,address:null,tokenCode:null};
 }

 onFinish = values => {
    console.log('Received values of form: ', values);
      this.setState({loadButton:true}, ()=>{
        axios.get('/UserHome/getRequest', {
                params: {
                   tokenId:values.tokencode,
                }
              })
              .then(res=>{

                console.log("Result : ",res.data);
                  let address_ = res.data.addressL1 + " , " + res.data.addressL2 + " ," + res.data.region + " ," +
                                res.data.city + " , "+res.data.state + " ," + res.data.pinCode;
               if(res.data.status=="PENDING")
                 this.setState({color1:"green",color2:"red",color3:"red",color4:"red",loadButton:false,NextPage:true,description:res.data.description,address:address_,tokenCode:values.tokenCode});
                else if(res.data.status=="IN PROGRESS")
                 this.setState({color1:"green",color2:"green",color3:"red",color4:"red",loadButton:false,NextPage:true,description:res.data.description,address:address_,tokenCode:values.tokenCode});
                else if(res.data.status=="OUT FOR DELIVERY")

                 this.setState({color1:"green",color2:"green",color3:"green",color4:"red",loadButton:false,NextPage:true,description:res.data.description,address:address_,tokenCode:values.tokenCode});

                else if(res.data.status=="COMPLETED")
                  this.setState({color1:"green",color2:"green",color3:"green",color4:"green",loadButton:false,NextPage:true,description:res.data.description,address:address_,tokenCode:values.tokenCode});
              })


           })
 //this.setState({loadButton:false,NextPage:true});
  };

 render()
 {

      if(this.state.loadButton==true)
       return <Spin indicator={antIcon} />;

   if(this.state.NextPage==true)
     return <RequestViewPage color1={this.state.color1} color2={this.state.color2} color3={this.state.color3}
             color4={this.state.color4} ngo={this.state.ngo} description={this.state.description}
             address={this.state.address} tokenCode={this.state.tokenCode}/>;

  return(
    <Form name="normal_login" className="login-form"
         initialValues={{
           remember: true,
         }}
     onFinish={this.onFinish}
        style={{marginLeft:"38%",width:"300px",marginTop:"6%"}}  >

     <Form.Item
            name="tokencode"
            rules={[
              {
                required: true,
                message: 'Please enter token code!',
              },
            ]}

          >
            <Input  placeholder="Enter Token Code" />
          </Form.Item>

     <Form.Item>
             <Button type="primary" htmlType="submit" className="login-form-button">
               Enter
             </Button>
             Or <a href="/Create">No token code? Create a request.</a>
           </Form.Item>

   </Form>

  );
 }

}

export default TokenEnterPage;