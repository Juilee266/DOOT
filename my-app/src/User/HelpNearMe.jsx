import { Table,Form,Button,Input, Select,Spin } from 'antd';
import React from "react";
import {LoadingOutlined} from '@ant-design/icons'
import axios from "axios";

const { Option } = Select;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const columns = [
  { title: 'NGO Name', dataIndex: 'name', key: 'name' },
   {
         title: 'Timings',
         dataIndex: '',
         key: 'timings',
         render: (record) => <div><b>Start Time: </b>{record.startTime}<br/><b>End Time :</b>{record.endTime}</div>,
    },
   { title: 'Description', dataIndex: 'description', key: 'description' } ,
   { title: 'Contact Number', dataIndex: 'contact', key: 'contact' },
   { title: 'Address', dataIndex: 'address', key: 'address' }
];

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

class HelpNearMe extends React.Component{

 constructor()
 {
   super();
   this.state = {showFlag:false,loadButton:false,data:null};
 }

 showEvents = (values) => {
     // this.setState({showFlag:true});
         this.setState({loadButton:true}, ()=>{
          axios.get('/Events/getEventsForCity', {
                  params: {
                     city: values.city
                  }
                })
                .then(res=>{

                  console.log("Data : ",res.data);
                  let arr = res.data;
                  let list_ = [];
                  for(let i=0;i<arr.length;i++)
                  {
                    let obj = arr[i];
                    let obj2 =
                    {
                       name: obj.name,
                       startTime : obj.startTime,
                       endTime : obj.endTime,
                       description : obj.description,
                       address : obj.addressL1 + " ," + obj.addressL2 + " ," + obj.city + " ," + obj.state + " ," + obj.pinCode,
                       contact: obj.contactNumber
                    };
                    console.log("Object:",obj2);
                    list_.push(obj2);
                  }
                  console.log(list_);
                  this.setState({loadButton:false,showFlag:true,data:list_});

                })


             })
    };

    render(){

    if(this.state.loadButton==true)
                 return <Spin indicator={antIcon} />;
 if(this.state.showFlag === true){
    return(
     <Table columns={columns} dataSource={this.state.data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
       );
     }
 return(
 <Form name="normal_login" className="login-form"
      onFinish={this.showEvents}
              >
​
      <Form.Item
             name="city"
             rules={[
               {
                 required: true,
                 message: 'Please enter city!',
               },
             ]} >

           <Select
               showSearch
               placeholder="Select a city"
               optionFilterProp="children"
               onChange={onChange}
               onFocus={onFocus}
               onBlur={onBlur}
               onSearch={onSearch}
               filterOption={(input, option) =>
                 option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
               }
             >
               <Option value="mumbai">Mumbai</Option>
               <Option value="nashik">Nashik</Option>
               <Option value="pune">Pune</Option>
             </Select>
           </Form.Item>
​
      <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Enter
              </Button>
            </Form.Item>
​
    </Form>)

}}

export default HelpNearMe;