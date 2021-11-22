import React from "react";

class Counter extends React.Component {
  state = { count: 0};
  CountHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.CountHandler}>up</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
