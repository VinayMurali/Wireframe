import React, { Component } from 'react';
import './Tickets.css';
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import  Form from '../Form/Form';
import  FormA from '../Form/FormA';

export const  UserData=[
    {
      "id":"1",
      "fieldName":"Redmi Note 4",
      "description":"8GB RAM",
      "uiType":"Box",
      "uiTypeOptions":"None"
    },
    {
      "id":"2",
      "fieldName":"Asus",
      "description":"4 GB Ram",
      "uiType":"Radio",
      "uiTypeOptions":"None"
    },{
      "id":"3",
      "fieldName":"Samsung",
      "description":"Samsung S3",
      "uiType":"CheckBox",
      "uiTypeOptions":"Radio"
    },{
      "id":"4",
      "fieldName":"Huawei",
      "description":"Honor 7x Blue",
      "uiType":"DropDown",
      "uiTypeOptions":"None"
    },
    {
      "id":"5",
      "fieldName":"Nokia",
      "description":"Nokia 7x Blue",
      "uiType":"Display",
      "uiTypeOptions":"None"
    },  
  ]


class Tickets extends Component {
  
      constructor(props){
      super(props)
      this.state={
          showForm :false,
          view:'',
          fieldName:'',
          description:'',
          ticketId:'',
          uiType:'',
          uiTypeOptions:'none',
          list:[],
          editIdNo:'',
          fnValue:''
      };
      this.handleEdit=this.handleEdit.bind(this);
      this.handleFormSubmit= this.handleFormSubmit.bind(this);
  
    }

 handleEdit = (id)=>{
        //console.log("json edit no",id)   
          return(
                  this.setState({showForm:true,view:'form',editIdNo:id})
              )
  }

  handleFormSubmit(formObj){
    console.log(formObj)
    this.setState({
        'fieldName':formObj.fieldName,
        'description':formObj.description,
        'showForm':true,
        'uiTypeOptions':formObj.uiTypeOptions,
        'uiType':formObj.uiType,
        'view':''
       })
};
  

  render() {
     return (
       UserData.map(item=>{ 
        // console.log(item.id,  this.state.editIdNo,this.state.view)
        // console.log(item)
      return (<div className="main-div">
                <div className="current-field-list">
                 <form>
                        <label className="common" onChange={this.formMethod}>
                           Field Name:{item.fieldName}
                        </label><br />
                        <label className="common">
                           Description:{item.description}
                        </label><br />
                        <label className="common">
                           UI Type Options:{item.uiTypeOptions}
                        </label><br />
                         <label className="common">
                           UI Type:{item.uiType}
                        </label><br />
                      </form>
                </div>
                <div className="toogle-div">
                   enable
                      <Toggle
                          defaultChecked={true}
                          onChange={()=>{console.log("Toggle")}}
                        />disable
                </div>
                <div className="edit-button-div">
                    <button className="edit-button" onClick={() => this.handleEdit(item.id)}>Edit</button>
                </div>
                {
                this.state.view==='form' && this.state.editIdNo===item.id &&
                <Form onSubmitFunc={this.handleFormSubmit}  method='POST' value={item} />
              } 
            </div>
        )//sub return
      })//map

      );//main
     
  }
}

export default Tickets;
