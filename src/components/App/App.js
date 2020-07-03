import React, { Component } from 'react'
import './App.css'
import FloorSelector from '../FloorSelector/FloorSelector'
import FloorTracker from '../FloorTracker/FloorTracker'

class App extends Component {
  
  state={
    allFloors:[1,2,3,4,5,6,7,8,9,10,11,12],
    usersSelectedFloor:null,
    selectedFloors:[],
    currentFloor:1,
  }

  /*componentDidUpdate(){
    if(this.state.currentFloor===this.state.usersSelectedFloor){
      alert("You've reached your floor!")
      //this.restartRide()
      window.location.reload(false);
  }
  }*/

  changeCurrentFloor=(newFloor)=>{
    this.setState({
      currentFloor: newFloor
    })
  }

  handleUserSelectsFloor=(floor)=>{
    //let currentSelectedFloors=this.state.selectedFloors.push(floor)
    //console.log(currentSelectedFloors)
    this.setState(prevState=>({
      usersSelectedFloor:floor,
      selectedFloors:[...prevState.selectedFloors,floor]
    }))
  }

  restartRide=()=>{

    //if(this.state.currentFloor===this.state.usersSelectedFloor){
      //alert("You've reached your floor!")
      this.setState({
        usersSelectedFloor:null,
        selectedFloors:[],
        currentFloor:1
      })
    //}
    
  }

  render(){
    return(
      <>
      {/*this.restartRide()*/}
      <h1>Elevator</h1>
      <FloorTracker state={this.state} handleFloorChange={this.changeCurrentFloor} restartRide={this.restartRide}/>
      <FloorSelector state={this.state} handleUserSelectsFloor={this.handleUserSelectsFloor}/>
      </>
    )
  }
  
}

export default App
