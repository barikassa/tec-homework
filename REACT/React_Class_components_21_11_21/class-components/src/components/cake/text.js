import React from "react";
import "./maincake.css";

class Text extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <li>{this.props.text.candies}</li>
        <li>{this.props.text.cake}</li>
        <li>{this.props.text.biscuits}</li>
        <li>{this.props.text.bread}</li>
        <li>{this.props.text.croissants}</li>
        <li>{this.props.text.lollipop}</li>
      </div>
    );
  }
}

export default Text;