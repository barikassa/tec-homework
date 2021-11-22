import React from "react";
import "./maincake.css";

class Title extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="title">
        <li>{this.props.title.candies}</li>
        <li>{this.props.title.cake}</li>
        <li>{this.props.title.biscuites}</li>
        <li>{this.props.title.bread}</li>
        <li>{this.props.title.croisants}</li>
        <li>{this.props.title.lollipop}</li>
      </div>
    );
  }
}

export default Title;
