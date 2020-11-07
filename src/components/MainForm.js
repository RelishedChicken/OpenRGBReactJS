import React from "react";

class MainForm extends React.Component{

  //TODO
  //Create form handling for connection
  //Only allow editing of colours when connected
  //Show connection status
  //Handle all with states!


  state = {
    r: 0,
    g: 0,
    b: 0,
    on: false
  }

  update = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
    return(
      <>
        <form style={{float: "left", marginRight: "10px"}}>
          <label>
            R:{" "}
            <input type="range" min="0" max="255" name="r" value={this.state.r} onChange={this.update}/>
            {this.state.r}
          </label>
          <br/>
          <label>
            G:{" "}
            <input type="range" min="0" max="255" name="g" value={this.state.g} onChange={this.update}/>
            {this.state.g}
          </label>
          <br/>
          <label>
            B:{" "}
            <input type="range" min="0" max="255" name="b" value={this.state.b} onChange={this.update}/>
            {this.state.b}
          </label>
        </form>
        <div style={{background: `rgb(${this.state.r},${this.state.g},${this.state.b})`, width: 100, height: 65, float: "left"}}>
        </div>
      </>
    )
  }

}

export default MainForm;
