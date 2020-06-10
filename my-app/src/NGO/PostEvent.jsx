import React from "react";
import { Form, Input, Button, Checkbox ,Select , Row ,Col,Spin , Alert, DatePicker} from 'antd';
import { LoadingOutlined} from '@ant-design/icons';
import moment from 'moment';
import axios from "axios";
import 'antd/dist/antd.css';
import './RegisterNGOUser.css'

const { RangePicker } = DatePicker;
const {Option} = Select;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class PostEventNGO extends React.Component
{
 constructor()
 {
   super();
   this.state = {nextFlag:false,loadButton:false};
 }

 onFinish = values => {
     console.log(values);
     let obj = {
       ngoId : this.props.id ,
       city: values.city,
       location : values.location,
       startTime : values.date[0]._d ,
       endTime : values.date[1]._d ,
       description :values.description,
       addressL1 : values.addressL1,
       addressL2: values.addressL2,
       state:values.state ,
       pinCode: values.pinCode,
       contactNumber: values.contactNumber
     };
     console.log("Obj:" ,obj);
         this.setState({loadButton:true},()=>{
            axios.post("/NGOHome/createEvent",obj)
            .then(res=>{
              console.log(res.data);
              this.setState({loadButton:false,nextFlag:true});
            })

         })
     //this.setState({nextFlag:true});
   };

   render()
 {

   if(this.state.loadButton==true)
            return <Spin indicator={antIcon} />

   if(this.state.nextFlag==true)
     return (<div>
        <Alert type = "success" message = "Your Event Was Submitted"
        description = "Thank You For The Good Work!" />
​
     </div>);
   return(
        <Form name="normal_login" className="login-form"
                 initialValues={{
                   remember: true,
                 }}
             onFinish={this.onFinish}
                >

                        <Form.Item label="Address">
                             <Input.Group compact>
                              <Form.Item name= 'state'  noStyle rules={[{ required: true, message: 'State is required' }]} >
                                    <Select placeholder="Select State">
                                      <Option value="Maharashtra">Maharashtra</Option>                                                               <Option value="Karnataka">Karnataka</Option>
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
​
                         <Form.Item
                                                 name="date"
                                                 label="Timings"
                                                 rules={[{ required: true, message: 'Time is required' }]}>
                                                 <RangePicker
                                                       showTime={{ format: 'HH:mm' }}
                                                       format="YYYY-MM-DD HH:mm"
                                                     />
                          </Form.Item>
​
                         <Form.Item
                                                 name="description"
                                                 label="Description"
                                                 rules={[{ required: true, message: 'Location is required' }]}>
                                                     <Input.TextArea placeholder="Enter Description Of Event"/>
                         </Form.Item>
​
                       <Form.Item name='contactNumber' label="Mobile Number">
                                                            <Input />
                                                          </Form.Item>

                      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
         </Form>
);
}}

export default PostEventNGO;