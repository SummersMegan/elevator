import React, { Component } from 'react'
import './App.css'
import FloorSelector from '../FloorSelector/FloorSelector'
import FloorTracker from '../FloorTracker/FloorTracker'

class App extends Component {
  
  state={
    allFloors:[1,2,3,4,5,6,7,8,9,10,11,12],
    selectedFloor:[],
    currentFloor:1,
  }

  render(){
    return(
      <>
      <h1>Elevator</h1>
      <FloorSelector state={this.state}/>
      <FloorTracker state={this.state}/>
      </>
    )
  }
  
}

export default App
