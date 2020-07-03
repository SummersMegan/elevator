import React, { Component } from 'react'
import './FloorSelector.css'

class FloorSelector extends Component{
  
    renderFloorNumbers(){
        
        let allFloors=this.props.state.allFloors
        
        let renderedFloors = allFloors.map(floor=>{
            if(this.props.state.selectedFloors.includes(floor)){
                return (
                    <button className='selectedFloor' key={floor} onClick={()=>this.handleFloorSelection(floor)}>{floor}</button>
                )
            } else {
                return (
                    <button key={floor} onClick={()=>this.handleFloorSelection(floor)}>{floor}</button>
                )
            }            
        })

        return renderedFloors
    }
  
    renderMessage=()=>{
        if(!this.props.state.usersSelectedFloor){
            return(
                <h3>Please select a floor!</h3>
            )
        }
    }

    handleFloorSelection=(floor)=>{
        //don't let user select a floor if they're already at their selected floor
        if(this.props.state.currentFloor!==this.props.state.usersSelectedFloor){
            this.props.handleUserSelectsFloor(floor)
        }
    }

    render(){
        return(
            <div className='floorSelectorContainer'>
                {this.renderMessage()}
                <div className='buttonContainer'>
                    {this.renderFloorNumbers()}
                </div>
            </div>
        )
    }
  
}

export default FloorSelector
