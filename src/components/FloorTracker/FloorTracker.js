import React, { Component } from 'react'
import './FloorTracker.css'

class FloorTracker extends Component {
  
    //for initial floor change
    componentDidMount(){
        this.handleFloorChange()
    }

    //for every proceeding floor change
    componentDidUpdate(){
        this.handleFloorChange()
    }

    handleFloorChange=()=>{

        //console.log(this.props.state.usersSelectedFloor)
    
        if(this.props.state.usersSelectedFloor && this.props.state.currentFloor!==this.props.state.usersSelectedFloor){
            console.log('handled floor change!')
            setTimeout(()=>{ 
                this.props.handleFloorChange(this.props.state.currentFloor+1)
            }, 1000);
        }
    } 
    
    renderFloorNumbers(){
        //console.log(this.props.state)
        
        /*let allFloors=this.props.state.allFloors
        let renderedFloors = allFloors.map(floor=>{
            if(floor===this.props.state.currentFloor){
                return (
                    <p key={floor} className='currentFloor'>{floor}</p>
                )
            } else{
                return (
                    <p key={floor}>{floor}</p>
                )
            }
        
            
        })

        return renderedFloors*/

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
                {this.newRide()}
                {/*this.renderFloorNumbers()*/}
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
