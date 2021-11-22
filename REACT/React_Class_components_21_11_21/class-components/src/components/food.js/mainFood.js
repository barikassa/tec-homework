import React from "react";
import FoodMenu from "./fooTitle";

class FoodMain extends React.Component {
  render() {
        const menu={pizza:"Pizza", salad:"Salads", dessert:"Desserts"};
   return <div>
        <FoodMenu menuTitle={menu}/>
    </div>;
  }
}
export default FoodMain;
