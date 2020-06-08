import { Table,Form,Button,Input, Select } from 'antd';
import React from "react";
const { Option } = Select;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Timing',
    dataIndex: 'timing',
    width: 150,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];

const data = [];
    data.push({
        key: 0,
        name: `Goonj Foundation`,
        timing: `2018-05-07 16:00`,
        description: `Food Distribution Outside Vihir Ground, MG Road`,
      });
      data.push({
          key: 1,
          name: `We Care`,
          timing: `2018-05-07 18:00`,
          description: `Online Webinar about Mental Health on www.wecare.com`,
        });
        data.push({
            key: 2,
            name: `Teach For India`,
            timing: `2018-05-08 1:00`,
            description: `Introduction to TFI's plan for under-privileged student's education at FC College, Deccan Road `,
          });
          data.push({
              key: 3,
              name: `Sonu Sood`,
              timing: `2018-05-10 16:00`,
              description: `Registration for travel of Migrant workers at Wageshwar Temple, Wagholi`,
            });
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    timing: `2018-02-28 16:00`,
    description: `London, Park Lane no. ${i}`,
  });
}

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
   this.state = {showFlag:false};
 }

 showEvents = () => {
      this.setState({showFlag:true});
    };

    render(){
 if(this.state.showFlag === true){
    return(
     <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
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
               <Option value="jack">mumbai</Option>
               <Option value="lucy">nashik</Option>
               <Option value="tom">pune</Option>
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