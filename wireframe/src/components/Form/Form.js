import React, { Component,Fragment } from 'react';
import './Form.css';
import Tickets from '../Tickets/Tickets';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import UserData from '../Tickets/Tickets'
import request from 'superagent';


class Form extends Component {

     constructor(props){
        super(props);
        this.state={
            fieldName:this.props.value.fieldName,
            description:this.props.value.description,
            uiType:this.props.value.uiType,
            uiTypeOptions:this.props.value.uiTypeOptions,
            navigateTo:'',
            formPage:'',
            name:'',
            list:[]
      };
      this.fieldName=this.fieldName.bind(this);
      this.description=this.description.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleCancel=this.handleCancel.bind(this);
      this.uiTypeOptions=this.uiTypeOptions.bind(this);
      this.uiType=this.uiType.bind(this);
      this.uiTypeTextArea=this.uiTypeTextArea.bind(this);
      this.uiTypeRadio=this.uiTypeRadio.bind(this);
      this.uiCheckBox=this.uiCheckBox.bind(this);
  }

  fieldName=(event)=>{

          this.setState({fieldName:event.target.value})
          console.log("fieldName",this.state.fieldName)   
  }

  description=(event)=>{
          this.setState({description:event.target.value})
          {/*console.log("description",this.state.description)*/}

  }
   uiTypeOptions=(event)=>{
          this.setState({uiTypeOptions:event.target.value})
          {/*console.log("uiTypeOptions",this.state.uiTypeOptions)*/}
 }
  uiType=(event)=>{
      this.setState({uiType:'input box'})
}

    uiTypeTextArea=(event)=>{
          this.setState({uiType:'Text Area'})
        }
        
    uiTypeRadio=(event)=>{
          this.setState({uiType:'Radio'})
}
  uiCheckBox=(event)=>{
    this.setState({uiType:'CheckBox'})
  }

     handleSubmit=(event)=>{
        //console.log('inside handleSubmit')
        event.preventDefault();
        const params = {
        'fieldName':this.state.fieldName,
        'description':this.state.description,
        'uiTypeOptions':this.state.uiTypeOptions,
        'uiType':this.state.uiType
    }
      this.props.onSubmitFunc(params);
      console.log('params:',params)
      let formJsonData = {
                'fieldName':this.state.fieldName,
                'description':this.state.description,
                'uiTypeOptions':this.state.uiTypeOptions,
                'uiType':this.state.uiType  
      }
      request
        .post('http://localhost:3000/userData')
        .send(formJsonData)
        .then(function(res){
          console.log('Response:' + JSON.stringify(res.body));

        })
        .catch(function(err){
          console.log('error in request',err)
        });
 }

  handleCancel=(event)=>{
   event.preventDefault();
   const params = {
          'ticketId':this.props.ticketId,
          'fieldName':'',
          'description':'',
          'uiTypeOptions':''
   }
    this.props.onCancelFunc();
  } 


  render() {
     return (
        <Fragment>
          {
                      <form className="outer-form" onSubmit={this.handleSubmit}>
                
                            <label>
                                Field Name:
                                <input  type="text" onChange={this.fieldName} name="fieldName" value={this.state.fieldName}/>
                            </label><br />
                            <label>
                                  Description:
                                  <textarea type="text"  onChange={this.description} name="description" value={this.state.description}/>
                            </label><br />
                            <label>
                                  UI Options:
                                  <input type="text"  onChange={this.uiTypeOptions} name="ui options" value={this.state.uiTypeOptions}/>
                            </label><br />
                             <label>
                                  UI Type:
                                  <input type="radio"  onChange={this.uiType} name="inputbox" />inputbox
                                  <input type="radio"  onChange={this.uiTypeTextArea} name="textarea" />textarea
                                  <input type="radio"  onChange={this.uiTypeRadio} name="textarea" />Radio
                                  <input type="radio"  onChange={this.uiCheckBox} name="textarea" />CheckBox
                            </label><br />
                          <label>
                           <button className="cancel" onClick={this.handleCancel}>Cancel</button>
                           <button className="submit">Submit</button>
                         </label>
                     
                     </form>

             }

        </Fragment>
              //   {
              //      this.state.navigateTo==='listpage'?<Tickets fieldName={this.state.fieldName} description={this.state.description} />:''

              // }
               
            
    );
  }
}

export default Form ;
