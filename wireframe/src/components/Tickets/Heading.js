import React, { Component } from 'react';
import './Tickets.css';
import Toggle from 'react-toggle';

class Heading extends Component {
  render() {
    return (
      <div className="App">
         	<div className="toogle-div">
                   enable
                      <Toggle
                          defaultChecked={true}
                          onChange={()=>{console.log("Toggle")}}
                        />disable
                </div>
      </div>
    );
  }
}

export default Heading;
