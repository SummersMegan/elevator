import React, { Component } from 'react'
import './App.css'
import FloorSelector from '../FloorSelector/FloorSelector'
import FloorTracker from '../FloorTracker/FloorTracker'
import ElevatorMusic from '../../assets/elevator-music.mp3'

class App extends Component {
  
  state={
    allFloors:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    usersSelectedFloor:null,
    selectedFloors:[],
    currentFloor:1,
  }

  componentDidMount(){
    var audio = new Audio(ElevatorMusic);
    audio.play(); 
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
    
    if(floor!==this.state.usersSelectedFloor){
      this.setState(prevState=>({
        usersSelectedFloor:floor,
        selectedFloors:[...prevState.selectedFloors,floor]
      }))
    }
    
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
      <nav>
        <h1>Elevator Ride</h1>
      </nav>
      <main>
        <FloorTracker state={this.state} handleFloorChange={this.changeCurrentFloor} restartRide={this.restartRide}/>
        <FloorSelector state={this.state} handleUserSelectsFloor={this.handleUserSelectsFloor}/>
      </main>
      </>
    )
  }
  
}

export default App
