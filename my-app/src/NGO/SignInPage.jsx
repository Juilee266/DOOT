import React from "react";
import { Form, Input, Button, Checkbox ,Spin} from 'antd';
import { UserOutlined, LockOutlined ,LoadingOutlined} from '@ant-design/icons';
import axios from "axios";
import ViewRequests from './ViewRequests';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class SignInPage extends React.Component
{
  constructor()
  {
   super();
   this.state = {NextPage:false,loadButton:false,data1:null,data2:null,ngoId:null};
  }

onFinish = values => {
    console.log('Received values of form: ', values);
    this.setState({loadButton:true}, ()=>{
     axios.get('/NGOHome/signIn', {
         params: {
           username: values.username,
           password:values.password
         }
       })
       .then(res=>{

            let dataState1 = [];
             let dataNew = res.data.list[0];
             for(let i =0;i<dataNew.length;i++)
             {
               let row = dataNew[i];
               let obj =
               {
                  key:row.requestId,
                  name:row.firstName + " " + row.lName,
                  state:row.state,
                  region:row.region,
                  city:row.city,
                  categoryRequested:row.category,
                  address:row.addressL1 +" , " +row.addressL2 + " , " + row.region + " , "+row.city + " , "+row.pinCode,
                  description:row.description,
                  contact: row.contactNumber,
                  createdOn : "13/04/2020",
                  urgency:row.typeOfRequest,
                  status:row.status,
                  ngoId : 150
               }
               dataState1.push(obj);
             }

                   let dataState2 = [];
                     dataNew = res.data.list[1];
                    for(let i =0;i<dataNew.length;i++)
                    {
                      let row = dataNew[i];
                      let obj =
                      {
                         key:row.requestId,
                         name:row.firstName + " " + row.lName,
                         state:row.state,
                         region:row.region,
                         city:row.city,
                         categoryRequested:row.category,
                         address:row.addressL1 +" , " +row.addressL2 + " , " + row.region + " , "+row.city + " , "+row.pinCode,
                         description:row.description,
                         contact: row.contactNumber,
                         createdOn : "13/04/2020",
                         urgency:row.typeOfRequest,
                         status:row.status,
                         ngoId : 150
                      }
                      dataState2.push(obj);
                    }
         this.setState({loadButton:false,NextPage:true,data1:dataState1,data2:dataState2,ngoId:res.data.ngoId});

       })


    })

  };

  render()
  {

      if(this.state.loadButton==true)
       return <Spin indicator={antIcon} />;

     if(this.state.NextPage==true)
     {
      console.log("Hello",this.state.data1,this.state.data2);
       return <ViewRequests  data1={this.state.data1} data2={this.state.data2} ngoId={this.state.ngoId}/>
       }


     return(
      <Form
           name="normal_login"
           className="login-form"
           initialValues={{ remember: true }}
           onFinish={this.onFinish}
         >
           <Form.Item
             name="username"
             rules={[{ required: true, message: 'Please input your Username!' }]}
           >
             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
           </Form.Item>
           <Form.Item
             name="password"
             rules={[{ required: true, message: 'Please input your Password!' }]}
           >
             <Input
               prefix={<LockOutlined className="site-form-item-icon" />}
               type="password"
               placeholder="Password"
             />
           </Form.Item>
           <Form.Item>
             <Form.Item name="remember" valuePropName="checked" noStyle>
               <Checkbox>Remember me</Checkbox>
             </Form.Item>

           </Form.Item>

           <Form.Item>
             <Button type="primary" htmlType="submit" className="login-form-button">
               Log in
             </Button>
             Or <a href="/NGORegister">register now!</a>
           </Form.Item>
         </Form>




     );


  }

}

export default SignInPage;