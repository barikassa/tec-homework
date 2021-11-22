import React from "react";
import Logo from "./Logo";
import Title from "./title";
import Text from "./text";

class Maincake extends React.Component {
  constructor() {
    super();
  }
  render() {
    const logoObj = {
      candy: "https://cdn-icons-png.flaticon.com/128/1888/1888859.png",
      cake: "https://cdn-icons-png.flaticon.com/128/992/992717.png",
      biscuit: "https://cdn-icons-png.flaticon.com/128/2646/2646969.png",
      bread:
        "https://cdn-icons.flaticon.com/png/128/2215/premium/2215883.png?token=exp=1637523118~hmac=3aaa1811578ef8a3d155f23e24ceddd8",
      croissants: "https://cdn-icons-png.flaticon.com/128/2164/2164111.png",
      lollipop: "https://cdn-icons-png.flaticon.com/128/1035/1035121.png",
    };

    const titleObj={candies:"Candies",cake:"Cake",biscuites:"Biscuites",bread:"Bread",croisants:"Croisants",lollipop:"Lollipop"}

    const textObj={candies:"Welcome to Cake Story - Get your fingers ready for the ultimate challenge in the new fun, amazing & FREE Match-3 game. Slide the beautiful and colorful Cakes and Cookies to match 3 or more, test your matching skills with challenging levels and help our young chef to recover his grandparent’s café.",cake:"Welcome to Cake Story - Get your fingers ready for the ultimate challenge in the new fun, amazing & FREE Match-3 game. Slide the beautiful and colorful Cakes and Cookies to match 3 or more, test your matching skills with challenging levels and help our young chef to recover his grandparent’s café.",biscuits:"Welcome to Cake Story - Get your fingers ready for the ultimate challenge in the new fun, amazing & FREE Match-3 game. Slide the beautiful and colorful Cakes and Cookies to match 3 or more, test your matching skills with challenging levels and help our young chef to recover his grandparent’s café.",bread:"Established in 2015, Cake Story has been delivering a wide range of scrumptious bakery items to the entire Gurgaon. The Cake Story has just launched this premiere website to add sweetness in your routine life without you making an extra attempt.",croissants:"Established in 2015, Cake Story has been delivering a wide range of scrumptious bakery items to the entire Gurgaon. The Cake Story has just launched this premiere website to add sweetness in your routine life without you making an extra attempt.",lollipop:"Established in 2015, Cake Story has been delivering a wide range of scrumptious bakery items to the entire Gurgaon. The Cake Story has just launched this premiere website to add sweetness in your routine life without you making an extra attempt."};
    return (
      <div > 
        <Logo logo={logoObj} />
        <Title title={titleObj}/>
       <div className="text"> <Text text={textObj}/></div>
      </div>
    );
  }
}

export default Maincake;
