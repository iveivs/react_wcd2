import { Component } from 'react'
import Input from "./Input";
import ControlBar from "./ControlBar";
import Header from './Header';

class App extends Component {
  state = {
    inputValue: 0
  }

  decrise = () =>{
    this.setState((state) =>{
      if(this.state.inputValue) {
        state.inputValue = this.state.inputValue - 1
      }
      return {
        state
      }
    })
  }

  increase  = () =>{
    this.setState((state) =>{
      state.inputValue = this.state.inputValue + 1
      return {
        state
      }
    })
  }
  
  reset = () =>{
    this.setState((state) =>{
      state.inputValue = 0
      return {
        state
      }
    })
  }

  render () {
    return <div className="p-3">
      <Header />
      <Input inputValue={this.state.inputValue} />
      <ControlBar 
        decrise={this.decrise} 
        increase={this.increase} 
        reset={this.reset}/>
    </div>
  }
}

export default App;
