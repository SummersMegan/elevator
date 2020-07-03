import React, { Component } from 'react'
import './App.css'
import FloorSelector from '../FloorSelector/FloorSelector'
import FloorTracker from '../FloorTracker/FloorTracker'
import ElevatorMusic from '../../assets/elevator-music.mp3'

class App extends Component{
  
  constructor(props){
    super(props)
    this.state={
      allFloors:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      usersSelectedFloor:null,
      selectedFloors:[],
      currentFloor:1,
      play: false
    }
    this.audio=new Audio(ElevatorMusic)
  }

  playMusic=()=>{
    this.setState({ 
        play: true 
      })
      this.audio.play()
    }
    
  pauseMusic=()=>{
    this.setState({ 
      play: false 
    })
    this.audio.pause()
  }

  changeCurrentFloor=(newFloor)=>{
    this.setState({
      currentFloor: newFloor
    })
  }

  handleUserSelectsFloor=(floor)=>{
    //if user did not already select floor    
    if(floor!==this.state.usersSelectedFloor){
      this.setState(prevState=>({
        usersSelectedFloor:floor,
        selectedFloors:[...prevState.selectedFloors,floor]
      }))
    }
  }

  renderMusicButtons=()=>{
    if(this.state.play===true){
      return(
        <button className='musicButton' onClick={this.pauseMusic}>Pause Music</button>
      )
    } else{
      return(
        <button className='musicButton' onClick={this.playMusic}>Play Elevator Music</button>
      )
    }
  }

  render(){
    return(
      <>
      <nav>
        <h1>Elevator Ride</h1>
      </nav>
      <main>
        <FloorTracker state={this.state} handleFloorChange={this.changeCurrentFloor}/>
        <FloorSelector state={this.state} handleUserSelectsFloor={this.handleUserSelectsFloor}/>
      </main>
      <footer>
        {this.renderMusicButtons()}
        <p>Royalty Free Music from Bensound</p>
      </footer>
      </>
    )
  }
  
}

export default App
