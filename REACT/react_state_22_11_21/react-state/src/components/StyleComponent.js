import React from "react";

class LongText extends React.Component {
  state = { textLength: this.props.text };

  render() {
    if (this.state.textLength.length > 5) {
      console.log("hi");
    } else {
      console.log("nope");
    }
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default LongText;
