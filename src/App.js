import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickDouble = this.handleClickDouble.bind(this)
  }
  handleClick() {
    this.setState((prevState)=>{
      return {
        count:prevState.count + 1
      }
    })
    
  }
  handleClickDouble(){
    this.setState((oldState)=>{
      return{
        count : oldState.count + 2
      }
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>click</button>
        <button onClick={this.handleClickDouble}>double</button>
      </div>
    );
  }
}
