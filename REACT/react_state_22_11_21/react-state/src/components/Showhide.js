import React from "react";

class ShowHide extends React.Component {
  state = { text: "show smt", NoText: " " };

//   ShowText = () => {
//     this.setState({ text: this.state.text, 
        
//         text });
//   };
//   Hide = () => {
//     this.setState({ text: this.state.text, NoText });
//   };

  render() {
    return (
      <div>
        <button></button>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default ShowHide;
