import React from "react";
import {Timeline , Row ,message, Divider, Button,Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons'
import axios from "axios";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class RequestViewPage extends React.Component
{
  constructor(props)
  {
   super(props);
   this.state = {color1:props.color1,color2:props.color2,color3:props.color3,
                 color4:props.color4,loadButton:false,token:props.tokenCode};
  }

   changeCompleted = (flag) => {
      if(flag === "yes"){
          message.success("Congratulations! Your request is completed.")
         /// this.setState({color4:"green"});
            this.setState({loadButton:true}, ()=>{
                  axios.get('/UserHome/completeRequest', {
                          params: {
                             tokenId:this.state.token,

                          }
                        })
                        .then(res=>{

                          console.log("Status : ",res.data);
                          this.setState({loadButton:false,color4:"green"});

                        })


                     })
      }
      else{
          message.error("Sorry! We will investigate your request and get back to you shortly.")
      }
   }

 render()
 {
   if(this.state.loadButton==true)
             return <Spin indicator={antIcon} />;
  return(
    <div>
     <Row style={{marginBottom:"1%"}}>
  ​
     </Row>
     <Row>
      <Divider>this.state.token</Divider>
        <Timeline style={{marginTop:"1%",marginLeft:"40%"}} mode="alternate">
            <Timeline.Item color={this.state.color1} align="left"><b>Request Created</b>
            <p>{this.props.description}</p>
            </Timeline.Item>
            <Timeline.Item color={this.state.color2} align="left"><b>Request Acccepted</b>
            <p>NGO  has accepted your request</p>
            </Timeline.Item>
            <Timeline.Item color={this.state.color3} align="left"> <b>Request Processing</b>
            <p>Our helper is on the way. (S)he will get in touch with you.</p>
            <p><b>Address:</b> {this.props.address}</p>
            </Timeline.Item>
             <Timeline.Item color={this.state.color4} align="left"><b>Request Completed</b>
             <Button type="primary" htmlType="submit" style={{background:"green",marginRight:"2%",borderColor:"green"}} onClick={(e)=>{this.changeCompleted("yes")}}>Yes</Button>
             <Button type="primary" htmlType="submit" style={{background:"#8B0000",borderColor:"#8B0000"}} onClick={(e)=>{this.changeCompleted("no")}}>No</Button>
             </Timeline.Item>
          </Timeline>
      <Divider></Divider>
    </Row>
    </div>
    );



 }




}

export default RequestViewPage;