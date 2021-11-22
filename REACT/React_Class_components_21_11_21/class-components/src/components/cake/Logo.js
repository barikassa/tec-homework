import React from "react";
import "./maincake.css";

class Logo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <li>
          <img src={this.props.logo.candy} />
        </li>
        <li>
          <img src={this.props.logo.cake} />
        </li>
        <li>
          <img src={this.props.logo.biscuit} />
        </li>

        <li>
          <img src={this.props.logo.bread} />
        </li>

        <li>
          <img src={this.props.logo.croissants} />
        </li>

        <li>
          <img src={this.props.logo.lollipop} />
        </li>
      </div>
    );
  }
}

export default Logo;