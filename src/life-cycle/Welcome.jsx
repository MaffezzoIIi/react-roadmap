import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Thomas",
      didMountName: "",
      counter: 0,
    };
  }

  componentDidMount() {
    this.setState({ didUpdateName: "Thomas" });
  }

  render() {
    return (
      <div>
        <div>
          <h1>componentDidMount()</h1>
          <p>didMount: {this.state.didMountName}</p>
        </div>
        <h1>Hello, {this.state.name}</h1>;
      </div>
    );
  }
}

export default Welcome;
