import React, { Component } from 'react'
import './FloorTracker.css'

class FloorTracker extends Component {
  
    //prevents re-render when additional buttons are selected
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.state.selectedFloors.length===(this.props.state.selectedFloors.length+1) && nextProps.state.selectedFloors.length>1) {
          return false;
        } else {
          return true;
        }
      }

    //for initial floor change
    /*componentDidMount(){
        this.handleFloorChange()
    }*/

    //for every proceeding floor change
    //componentDidUpdate(prevProps, prevState){
        
        /*if(prevProps.state.selectedFloors!==this.props.state.selectedFloors || prevProps.state.usersSelectedFloor!==this.props.state.usersSelectedFloor){
            this.handleFloorChange()
        }*/

        //if(this.props.state.currentFloor<this.props.state.usersSelectedFloor){
           // this.handleFloorChange()
        //}
        
   // }

    handleFloorChange=()=>{

        //console.log(this.props.state.usersSelectedFloor)
        console.log(this.props.state.usersSelectedFloor,this.props.state.currentFloor) 
        
        if(/*this.props.state.usersSelectedFloor &&*/ /*this.props.state.currentFloor+1<=this.props.state.usersSelectedFloor*/ this.props.state.currentFloor+1 <= this.props.state.usersSelectedFloor){
            //console.log('handled floor change!')
            setTimeout(()=>{ 
                this.props.handleFloorChange(this.props.state.currentFloor+1)
            }, 1000);
        }
    } 
    
    newRide=()=>{
        if(this.props.state.currentFloor===this.props.state.usersSelectedFloor){
            
            return(
                <>
                <h3>This is your floor!</h3> 
                <button className='rideAgainButton' onClick={()=>window.location.reload(false)}>Ride again.</button>
                </>
            )

        }
    }

    render(){

        return(
            <div className='floorTrackerContainer'>
                {this.handleFloorChange()}
                {this.newRide()}
                <div className='elevator'>
                    <p className='floorTracker'>{this.props.state.currentFloor}</p>
                    <div className='elevatorDoors'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
  
}

export default FloorTracker
