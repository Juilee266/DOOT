import React from "react";
import { Form, Input, Button, Checkbox ,Select , Row ,Col  ,Spin, Alert,Upload,Radio} from 'antd';
import { UploadOutlined, InboxOutlined,LoadingOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './RegisterNGOUser.css'
import axios from "axios";

const {Option} = Select
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class RegisterNGOUser extends React.Component
{
 constructor()
 {
   super();
   this.state = {nextFlag:false,loadButton:false};
 }

 normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

onFinish = values => {
     console.log(values);
     //this.setState({nextFlag:true});
     this.setState({loadButton:true},()=>{
            axios.post("/RegisterNGO/insertNGO",values)
            .then(res=>{
              console.log(res.data);
              this.setState({loadButton:false,nextFlag:true});
            })

         })
   };

 render()
 {

    if(this.state.loadButton==true)
              return <Spin indicator={antIcon} />;

   if(this.state.nextFlag==true)
     return (<div>
        <Alert type = "success" message = "Your Entry is noted"
        description = "Our team will contact you upon your successful registration!" />

     </div>);
   return(
        <Form name="normal_login" className="login-form"
                 initialValues={{
                   remember: true,
                 }}
             onFinish={this.onFinish}
                >
              <Form.Item name='type' label="Registering As:">
                                <Radio.Group>
                                                       <Radio value="NGO">NGO</Radio>
                                                       <Radio value="Individual Donor">Individual Donor</Radio>

                                                     </Radio.Group>
                              </Form.Item>

                <Form.Item
                       name= 'username'
                       label="Enter Username"
                    >
                       <Input />
                     </Form.Item>

               <Form.Item
                       name='password'
                       label="Password"
                       rules={[
                         {
                           required: true,
                           message: 'Please input your password!',
                         },
                       ]}
                       hasFeedback
                     >
                       <Input.Password />
                     </Form.Item>


                 <Form.Item name='name' label="Name of Organization/Donor" rules={[{ required: true , message:"Name required" }]}>
                                   <Input />
                                 </Form.Item>
                   <Form.Item
                           name= 'emailId'
                           label="E-mail"
                           rules={[
                             {
                               type: 'email',
                               message: 'The input is not valid E-mail!',
                             },
                             {
                               required: true,
                               message: 'Please input your E-mail!',
                             },
                           ]}
                         >
                           <Input />
                         </Form.Item>


                       <Form.Item
                                              name= 'contactNumber'
                                              label="Contact Number"
                                             
                                            >
                                              <Input />
                                            </Form.Item>
                   <Form.Item name= 'categories' label="Select types of services you  will provide:">
                           <Checkbox.Group>
                             <Row>
                                <Col>
                                  <Checkbox value="Ration" style={{ lineHeight: '32px' }}>
                                      Ration
                                   </Checkbox>
                                </Col>
                                 <Col>
                                   <Checkbox value="Meals" style={{ lineHeight: '32px' }}>
                                      Meals
                                   </Checkbox>
                                  </Col>
                                 <Col>
                                     <Checkbox value="Hygiene Kit" style={{ lineHeight: '32px' }}>
                                       Hygiene Kit
                                      </Checkbox>
                                 </Col>

                                 <Col>
                                   <Checkbox value="Help with Abuse" style={{ lineHeight: '32px' }}>
                                       Help With Abuse
                                    </Checkbox>
                                 </Col>
                              </Row>
                            </Checkbox.Group>
                    </Form.Item>

                    <Form.Item label="Select cities in which you operate" name='cities_in_range'>
                             <Select mode="multiple">
                               <Select.Option value="nashik">Nashik</Select.Option>
                               <Select.Option value="pune">Pune</Select.Option>
                               <Select.Option value="mumbai">Mumbai</Select.Option>
                             </Select>
                           </Form.Item>

             <Form.Item label="Address">
                              <Input.Group compact>

                                 <Form.Item  name='state'  noStyle rules={[{ required: true, message: 'State is required' }]}
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

                        <Form.Item name='addressL1' label="Address Line 1">
                            <Input.TextArea placeholder="Enter Address Line 1"/>
                         </Form.Item>

                          <Form.Item name='addressL2' label="Address Line 2">
                              <Input.TextArea placeholder="Enter Address Line 2"/>
                           </Form.Item>

                          <Form.Item name= 'pincode' label="Pincode">
                                      <Input />
                                    </Form.Item>



                <Form.Item label="Enter certificates( for NGO)">
                        <Form.Item name= 'certificate' valuePropName="fileList" getValueFromEvent={this.normFile} noStyle>
                          <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                          </Upload.Dragger>
                        </Form.Item>
                      </Form.Item>

                      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
         </Form>


   );

 }

}

export default RegisterNGOUser;