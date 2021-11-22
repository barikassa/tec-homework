import React from "react";
import "./mainshafe.css";

class Img extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='pic'>
        <li>
          <img src={this.props.image.img1} />
        </li>
        <li>
          <img src={this.props.image.img2} />
        </li>
        <li>
          <img src={this.props.image.img3} />
        </li>
        <li>
          <img src={this.props.image.img4} />
        </li>
      </div>
    );
  }
}

export default Img;