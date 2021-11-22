import React from "react";

class SmartCounter extends React.Component {
    state = { count: this.props.starter};
    CountHandler = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <div>
          <button onClick={this.CountHandler}>up</button>
          <p>smart SmartCounter:{this.state.count}</p>
        </div>
      );
    }
  }
  
  export default SmartCounter;