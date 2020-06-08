import React from "react";
import { Form, Input, Button, Checkbox ,Select , Row ,Col ,Spin, Alert , Radio} from 'antd';
import axios from "axios";
import 'antd/dist/antd.css';
import './RequestCreatePage.css';
import TokenEnterPage from './TokenEnterPage';
import {LoadingOutlined} from '@ant-design/icons'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {

    number: '${label} is not a validate number!',
  },

};



class RequestCreatePage extends React.Component
{
 constructor()
 {
  super();
  this.state = {token:null,nextPage:false,loadButton:false};

 }

   onFinish = values => {
     console.log(values , this.state.token);
    //this.setState({token:"#2134wer"});
    this.setState({loadButton:true},()=>{
       axios.post("/RegisterRequest/insertRequest",values)
       .then(res=>{
         console.log(res.data);
         this.setState({loadButton:false,token:res.data});
       })

    })

   };

   gotoHomePage =()=>
   {
      this.setState({nextPage:true});
   }
 render()
 {
    if(this.state.loadButton==true)
         return <Spin indicator={antIcon} />

  if(this.state.nextPage==true)
  {
   return <TokenEnterPage/>;
  }

  if(this.state.token!=null)
  {
   return(<div>
          <Alert type = "success" message = "Token Code Assigned" description = { this.state.token + "is your token, Note it down for future use."} />
           <br/> <br/> <Button type="primary" onClick={()=>this.gotoHomePage()}>Go To Home Page</Button>
          </div>
         );
  }
  else
  {
  return(
    <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages} className="register-form">
          <Input.Group>
          <Form.Item name='firstName' label="First name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

           <Form.Item name='lName' label="Last name" rules={[{ required: true }]}>
                       <Input />
                     </Form.Item>

            </Input.Group>

          <Form.Item label="Category">

                           <Form.Item
                             name='category'
                             noStyle
                             rules={[{ required: true, message: 'Category is required' }]}
                            >
                            <Select placeholder="Select Category">
                               <Option value="Ration">Ration</Option>
                               <Option value="Meals">Meals</Option>
                               <Option value="Hygiene Kit">Hygiene Kit</Option>
                               <Option value="Help with Abuse">Help with Abuse</Option>
                             </Select>
                    </Form.Item>
          </Form.Item>

          <Form.Item name= 'description' label="Description">
            <Input.TextArea placeholder="Enter Description(Quantity needed,etc) For eg:4 kgs of rice,2 soaps"/>
          </Form.Item>

          <Form.Item label="Address">
                  <Input.Group compact>

                     <Form.Item
                                          name= 'state'
                                          noStyle
                                          rules={[{ required: true, message: 'State is required' }]}
                                        >
                                          <Select placeholder="Select State">
                                            <Option value="Maharashtra">Maharashtra</Option>
                                            <Option value="Karnataka">Karnataka</Option>
                                            <Option value="Gujarat">Gujarat</Option>
                                          </Select>
                                        </Form.Item>
                    <Form.Item
                      name='city'
                      noStyle
                      rules={[{ required: true, message: 'City is required' }]}
                    >
                      <Select placeholder="Select City">
                        <Option value="pune">Pune</Option>
                        <Option value="nashik">Nashik</Option>
                        <Option value="mumbai">Mumbai</Option>

                      </Select>
                    </Form.Item>
                    <Form.Item
                      name= 'region'
                      noStyle
                      rules={[{ required: true, message: 'Region is required' }]}
                    >
                      <Input style={{ width: '50%' }} placeholder="Region eg: Laxmibaug , Katraj ,etc" />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>

            <Form.Item name= 'addressL1'label="Address Line 1">
                <Input.TextArea placeholder="Enter Address Line 1"/>
             </Form.Item>

              <Form.Item name='addressL2' label="Address Line 2">
                  <Input.TextArea placeholder="Enter Address Line 2"/>
               </Form.Item>

              <Form.Item name='pinCode' label="Pincode">
                          <Input />
                        </Form.Item>

                 <Form.Item name= 'typeOfRequest' label="Urgency">
                     <Radio.Group>
                       <Radio value="High">High</Radio>
                       <Radio value="Medium">Medium</Radio>
                       <Radio value="Low">Low</Radio>
                     </Radio.Group>
                   </Form.Item>

             <Form.Item name='contactNumber' label="Mobile Number">
                                     <Input />
                                   </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>



  );
  }
}
}
export default RequestCreatePage;