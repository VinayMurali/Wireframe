import React, { Component } from 'react';
import './Sidebar.css';
import Tickets from '../Tickets/Tickets';
import Booking from '../Booking/Booking';


class Sidebar extends Component {
  
  constructor(props){
        super(props)
        this.state = {
         view: '',

        }
        this.booking=this.booking.bind(this);
      }
    booking = () => {
      console.log('sdsdsd')
             return (
                this.setState({view : 'book'})
                  ) 
        }

    tickets = () => {
          return (
                this.setState({view:'ticket'})
            )
    }

  render() {

    return (
          <div>
            <div className="sidenav">
               <div className="inner-resources-div">
                  <h2>Resources</h2>
                 </div>
                  <h2 onClick={this.booking}>Booking</h2>
                  <h2 onClick={this.tickets}>Tickets</h2>
              </div> 
              {
                this.state.view === 'book' ? <Booking /> : ''
              }
              {
                this.state.view === 'ticket'? <Tickets />:''
              }
              
              <div>
          </div>
      </div>
    );
  }
}

export default Sidebar;
