import React, { Component } from "react"; //let's also import Component

//the clock's state has one field: the current time, based upon
//-> the Javascript class Date

type ClockState = {
  time: Date;
  dayOf?: String;
};

//Clock has no properties, but the currennt state is of type ClockState
//The generic parameters in the Component typing allow to pass props
//and state. Since we don't have props, we pass an empty object.

export default class Clock extends Component<{}, ClockState> {
  /* static defaultProps = {
    time: '01.02.03'
  } */

  //The tick function sets the current state, TypeScript will let us know
  //wich ones we are allowed to set.
  tick() {
    this.setState({
      time: new Date()
    });
  }

  //Before the component mounts, we initialise our state
  componentWillMount() {
    this.tick();
  }

  //After the component did mount, we set the state each second
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  //render will know everything!
  render() {
    return (
      <>
        <h1>Class component</h1>
        <p>The current time is {this.state.time.toLocaleDateString()}</p>;
      </>
    );
  }
}
