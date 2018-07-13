import React, { Component } from 'react';
import './Tickets.css';
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import  EditForm from '../EditForm/EditForm';
import request from 'superagent';

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
          fnValue:'',
          value:'',
          tickets:null,
          id:'',
          showPopup:false
      };
      this.handleEdit=this.handleEdit.bind(this);
      this.handleFormSubmit= this.handleFormSubmit.bind(this);
      this.fetchTickets= this.fetchTickets.bind(this);

    }
    componentDidMount(){
      this.fetchTickets();
      console.log("componentDidMount",this.state.tickets)
    }
    fetchTickets(){
      request
        .get('http://localhost:3000/userData/')
        .then(res=>res.body)
        .then(
          (result)=>{
            console.log('inside result of cDidm',result);
              this.setState({tickets:result});
              }
          )
        .catch(function(err){
          console.log('error in request',err)
        })
    }

 handleEdit = (id)=>{
        console.log("json edit no",id)

          return(
                  this.setState({showForm:true,view:'form',editIdNo:id})
              )

  }

  handleFormSubmit(formObj){
    console.log('formObj:',formObj)
    this.setState({
        'fieldName':formObj.fieldName,
        'description':formObj.description,
        'showForm':true,
        'uiTypeOptions':formObj.uiTypeOptions,
        'uiType':formObj.uiType,
        view:'ticket'
       })
};


  render() {
  console.log("Render",this.state.tickets)
    return (
      <div className="main-div">
        <div className="current-field-list">
          {this.state.tickets && this.state.tickets.map((item)=>{
            {console.log("item from map:",item)}
              return (
              <div className="first-div-of-return">
                <div className="form-div">
                  <div className="toogle-div">
                    enable
                    <Toggle
                      defaultChecked={true}
                      onChange={()=>{console.log("Toggle")}} />
                        disable
                  </div>{/*end of toogle-div*/}
                  <div className="database-value">
                     <label className="common" >
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
                </div>{/*end of database-value*/}
                <div className="edit-button-div">
                  <button className="edit-button" onClick={() => this.handleEdit(item.id)}>Edit</button>
                </div>{/*end of edit-button-div*/}
            </div>
            <div>
                  {
                 this.state.view==='form' && this.state.editIdNo===item.id &&
                  <EditForm onSubmitFunc={this.handleFormSubmit} display={this.fetch} method='POST' value={item} />
                }
            </div>
          </div>
        )
      })
    }
    </div>{/*end of current-field-list*/}
    {this.state.view === 'ticket'?<Tickets />:''}
   </div>
)}
}


export default Tickets;
