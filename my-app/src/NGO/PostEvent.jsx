import React from "react";
import { Form, Input, Button, Checkbox ,Select , Row ,Col  , Alert, DatePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import './RegisterNGOUser.css'

const { RangePicker } = DatePicker;
class PostEventNGO extends React.Component
{
 constructor()
 {
   super();
   this.state = {nextFlag:false};
 }

 onFinish = values => {
     console.log(values);
     this.setState({nextFlag:true});
   };

   render()
 {
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
                 <Form.Item name='name' label="Name of Organization/Donor" rules={[{ required: true , message:"Name required" }]}>
                                   <Input />
                                 </Form.Item>
​

                        <Form.Item label="Select city:" name='city'>
                                                     <Select>
                                                       <Select.Option value="nashik">Nashik</Select.Option>
                                                       <Select.Option value="pune">Pune</Select.Option>
                                                       <Select.Option value="mumbai">Mumbai</Select.Option>
                                                     </Select>
                                                   </Form.Item>

                        <Form.Item
                        name="location"
                        label="Location"
                        rules={[{ required: true, message: 'Location is required' }]}>
                            <Input placeholder="Enter Location"/>
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
                      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
         </Form>
);
}}

export default PostEventNGO;