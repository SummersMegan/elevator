import React, { Component } from 'react'
import './FloorTracker.css'

class FloorTracker extends Component {
  
    renderFloorNumbers(){
        console.log(this.props.state)
    }


    render(){
        return(
            <div>
            <h1>FloorTracker</h1>
            {this.renderFloorNumbers()}
            </div>
        )
    }
  
}

export default FloorTracker
