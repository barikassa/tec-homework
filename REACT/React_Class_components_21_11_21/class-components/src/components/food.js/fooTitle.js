import React from "react";

class FoodMenu extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.menuTitle.pizza}</li>
        <li>{this.props.menuTitle.salad}</li>
        <li>{this.props.menuTitle.dessert}</li>
      </div>
    );
  }
}

export default FoodMenu;