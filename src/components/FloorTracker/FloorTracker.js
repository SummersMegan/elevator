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
        console.log(this.props.state)
        
        let allFloors=this.props.state.allFloors
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

        return renderedFloors
    }


    newRide=()=>{
        if(this.props.state.currentFloor===this.props.state.usersSelectedFloor){
            return(
                <>
                <h3>At your floor!</h3> 
                <button onClick={()=>window.location.reload(false)}>Ride again?</button>
                </>
            )

        }
    }

    render(){

        return(
            <div className='floorTrackerContainer'>
                <h2>FloorTracker</h2>
                {this.newRide()}
                {this.renderFloorNumbers()}
            </div>
        )
    }
  
}

export default FloorTracker
