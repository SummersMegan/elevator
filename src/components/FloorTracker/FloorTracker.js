import React, { Component } from 'react'
import './FloorTracker.css'

class FloorTracker extends Component {
  
    //prevents re-render when additional buttons are selected or music turned on or off
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.state.selectedFloors.length===(this.props.state.selectedFloors.length+1) && nextProps.state.selectedFloors.length>1 || nextProps.state.play !== this.props.state.play){
          return false;
        } else {
          return true;
        }
    }

    handleFloorChange=()=>{
        //if adding one floor to current floor will not pass user's selected floor, go up a floor
        if(this.props.state.currentFloor+1 <= this.props.state.usersSelectedFloor){
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
