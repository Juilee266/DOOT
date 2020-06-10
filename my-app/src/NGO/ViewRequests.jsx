import React from "react";
import { Table ,Button , Row ,Col,Space,message,Spin} from 'antd';
import { LoadingOutlined} from '@ant-design/icons';
import axios from "axios";

import PostEvent from './PostEvent';
//2pfEMy_1TaZnSTacRpUC
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
class ViewRequests extends React.Component
{

 constructor(props)
 {
   super(props);


   this.columns = [

     { title: 'Region', dataIndex: 'region', key: 'region',
        filters :
         [

         ],

       onFilter: (value, record) =>  record.region.indexOf(value) === 0
      },
     { title: 'City', dataIndex: 'city', key: 'city' ,
       filters :
                [

                ],

              onFilter: (value, record) =>  record.city.indexOf(value) === 0
     },
     { title: 'State', dataIndex: 'state', key: 'state' },
     { title: 'Category Requested', dataIndex: 'categoryRequested', key: 'categoryRequested' },
     { title: 'Urgency', dataIndex: 'urgency', key: 'urgency' },
     { title: 'Created On', dataIndex: 'createdOn', key: 'createdOn' },
     {
       title: 'Action',
       dataIndex: '',
       key: 'x',
       render: (record) => <div><Space><Button type="primary" style={{background:"#48b814",borderColor:"#48b814"}} onClick={(e)=>{this.PopMessage(record.key,record,e)}}>Accept</Button></Space>&nbsp;&nbsp;
                     <Button type="primary" style={{background:"#fc3503",borderColor:"#fc3503"}} onClick={(e)=>{this.onDeleteRow(record.key,e);}}>Decline</Button></div>,
     },
   ];

   this.columnsAccept = [
        {title:'Name' , dataIndex:'name',key:'name'},
        { title: 'State', dataIndex: 'state', key: 'state' },
        { title: 'Region', dataIndex: 'region', key: 'region' },
        { title: 'City', dataIndex: 'city', key: 'city' },
        { title: 'Category Requested', dataIndex: 'categoryRequested', key: 'categoryRequested' },
        { title: 'Created On', dataIndex: 'createdOn', key: 'createdOn' },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (record) => <div><Space><Button type="primary" onClick={(e)=>{this.PopMessage2(record.key,e)}}>Send Out for Delivery</Button></Space>&nbsp;&nbsp;
                              </div>,
        },
      ];

   this.data_ = [
     {
       key: 1,
       name: 'Juilee Joshi',
       region : 'Hadapsar',
       city : 'Pune',
       categoryRequested : 'Ration',
       address: 'Satyam Shivam Sundara , Behind showroom , Pune 411014',
       description: '5 kgs of rice , 2 bags sugar , 2 liters milk',
       contact : '9087856478',
       createdOn : "13/04/2020",
       urgency : "High"
     },
     {
            key: 2,
            name: 'Amulya Chetlapalli',
            region : 'Bibwewadi',
            city : 'Pune',
            categoryRequested : 'Meals',
            address: 'Satyam Shivam Sundara , Behind showroom , Pune 411014',
            description: '3 meals',
            contact : '9087856478',
            createdOn : "13/05/2020",
            urgency : "Low"
          }
   ];

     this.dataAccepted = [
        {
          key: 4,
          name: 'Madhura Pawar',
          region : 'Hadapsar',
          city : 'Pune',
          categoryRequested : 'Ration',
          address: 'Satyam Shivam Sundara , Behind showroom , Pune 411014',
          description: '5 kgs of rice , 2 bags sugar , 2 liters milk',
          contact : '9087856478',
          createdOn : "13/04/2020",
          urgency : "High"
        },
        {
               key: 5,
               name: 'Nehaa Jeevan',
               region : 'Bibwewadi',
               city : 'Pune',
               categoryRequested : 'Meals',
               address: 'Satyam Shivam Sundara , Behind showroom , Pune 411014',
               description: '3 meals',
               contact : '9087856478',
               createdOn : "13/05/2020",
               urgency : "Low"
             }
      ];

// this.state = {data:this.data_,dataA:this.dataAccepted}
this.state = {data:props.data1,dataA:props.data2,ngoId:props.ngoId,loadButton:false,postButton:false}
 }

 onDeleteAddRow = (key,record,e) =>
 {
   e.preventDefault();
   let data_ =  this.state.data.filter(item => item.key !== key);
   let addRow =     {key: record.key,
             name: record.name,
             region : record.region,
             city : record.city,
             categoryRequested : record.categoryRequested,
             address: record.address,
             description: record.description,
             contact : record.contact,
             createdOn : record.createdOn,
             urgency :record.urgency,
             state:record.state}
   console.log("Added Row", addRow);
   let data__ = this.state.dataA.concat(addRow);
   console.log(data__);
   this.setState({data:data_,dataA:data__});
 }

onDeleteRow2 = (key,e) =>
  {
    e.preventDefault();
    let data_ =  this.state.dataA.filter(item => item.key !== key);
    this.setState({dataA:data_});
  }

  onDeleteRow = (key,e) =>
  {
    e.preventDefault();
    let data_ =  this.state.data.filter(item => item.key !== key);
    this.setState({data:data_});
  }


 PopMessage = (key,record,e) =>
 {
   e.preventDefault();

   this.setState({loadButton:true}, ()=>{
    axios.get('/NGOHome/accept', {
            params: {
               tokenId:key,
                ngoId:this.state.ngoId
            }
          })
          .then(res=>{

            console.log("Status : ",res.data);
            this.setState({loadButton:false});

          })


       })
   message.success("Thank you for accepting the request. We have mailed you the details of the help-seeker.");
   this.onDeleteAddRow(key,record,e);

 }

 PopMessage2 = (key,e) =>
 {
    e.preventDefault();
    this.setState({loadButton:true}, ()=>{
        axios.get('/NGOHome/outForDelivery', {
                params: {
                   tokenId:key,

                }
              })
              .then(res=>{

                console.log("Status : ",res.data);
                this.setState({loadButton:false});

              })


           })
      message.success("Great! We have informed the help-seeker you are on the way.");
      this.onDeleteRow2(key,e);
 }

  CreateFilters = (records) =>
  {
    let citySet = new Set();
    let regionSet = new Set();
    this.columns[0].filters = [];
    this.columns[1].filters = [];

    for(let i=0;i<records.length;i++)
    {
      let record = records[i];
      citySet.add(record.city);
      regionSet.add(record.region);

    }
    let cityA = Array.from(citySet);
    let regionA = Array.from(regionSet);

    for(let i=0;i<regionA.length;i++)
    {
    this.columns[0].filters.push({'text':regionA[i],'value':regionA[i]});
    }
     for(let i=0;i<cityA.length;i++)
        {
        this.columns[1].filters.push({'text':cityA[i],'value':cityA[i]});
        }
    console.log("Columns",this.columns);
  }

  gotoEvent()
  {
    this.setState({postButton:true});
  }

 render()
 {
         if(this.state.loadButton==true)
           return <Spin indicator={antIcon} />;

         if(this.state.postButton==true)
         return <PostEvent id = {this.state.ngoId}/>;
   return(<div>

        {this.CreateFilters(this.state.data)}

       <Button type="primary" style={{marginLeft:"85%",marginRight:"10%"}} onClick={(e)=>{this.gotoEvent(e)}}>Post an Event</Button>
       <div style={{fontSize:"15px"}}>Incoming Requests :</div><br/>
     <Table
        columns={this.columns}
        expandable={{
          expandedRowRender: record => <div>
                                        <Row>
                                        <Col span={8}><b>Name : </b> {record.name} </Col>
                                        <Col><b>Contact : </b>  {record.contact} </Col>
                                        </Row><br/>
                                        <Row><b>Address : </b>{record.address}</Row> <br/>
                                        <Row><b>Deliverables :</b>{record.description}</Row>
                                       </div>,
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        dataSource={this.state.data} />

         <div style={{fontSize:"15px"}}>Accepted Requests :</div><br/>

         <Table
                 columns={this.columnsAccept}
                 expandable={{
                   expandedRowRender: record => <div>
                                                 <Row>
                                                 <Col span={8}><b>Name : </b> {record.name} </Col>
                                                 <Col><b>Contact : </b>  {record.contact} </Col>
                                                 </Row><br/>
                                                 <Row><b>Address : </b>{record.address}</Row> <br/>
                                                 <Row><b>Deliverables :</b>{record.description}</Row>
                                                </div>,
                   rowExpandable: record => record.name !== 'Not Expandable',
                 }}
                 dataSource={this.state.dataA}  />
         </div>
   );
 }

}

export default ViewRequests;