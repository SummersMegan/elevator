import React, { Component } from 'react'
import './FloorSelector.css'

class FloorSelector extends Component {
  
    renderFloorNumbers(){
        //console.log(this.props.state)
        
        let allFloors=this.props.state.allFloors
        let renderedFloors = allFloors.map(floor=>{
            
            if(this.props.state.selectedFloors.includes(floor)){
                return (
                    <p className='selectedFloor' key={floor} onClick={()=>this.handleFloorSelection(floor)}>{floor}</p>
                )
            } else {
                return (
                    <p key={floor} onClick={()=>this.handleFloorSelection(floor)}>{floor}</p>
                )
            }
            
            /*if(floor===this.props.state.currentFloor){
                return (
                    <p key={floor} onClick={()=>this.handleFloorSelection(floor)}>{floor}</p>
                )
            } else{
                return (
                    <p key={floor} onClick={()=>this.handleFloorSelection(floor)}>{floor}</p>
                )
            }*/
        
            
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
        //console.log('selected'+floor)
        if(this.props.state.currentFloor!==this.props.state.usersSelectedFloor){
            this.props.handleUserSelectsFloor(floor)
        }
       
    }

    /*componentDidUpdate(){
        console.log(this.props.state.usersSelectedFloor)
        console.log(this.props.state.selectedFloors)
    }*/

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
