import React, { Component } from "react";
import axios from "axios";

export default class Ajax extends Component {
  state = { city: "" };

  render() {
    const getWeatherData = () => {

      // state={input:"" }
      // const APIKEY = "f3f8a4524c8fd217eb73e8019868537e";

      //  const url=`api.openweathermap.org/data/2.5/weather?q=${}&appid=${APIKEY}`
      // const  url="https://jsonplaceholder.typicode.com/posts"
      axios
        .get()
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    return (
      <div>
        <form onSubmit="">
          <label for="fname">First name:</label>
          <br />
          <input type="text" id="city" name="city" />
          <br />
          <button onClick={getWeatherData}>get axios</button>
        </form>
      </div>
    );
  }
}

{/* <h1>what is the weather</h1>
<p>enter the name of the city</p>
<div>
  {" "}
  <form>
    <label for="cname"></label>
    <br />
    <input type="text" id="city" name="city" />
    <br />
    <br />
    <button onClick={getWeatherData}>submit</button>
  </form>
</div> */}