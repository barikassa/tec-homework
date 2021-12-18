import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Reddit from "./copmponents/Reddit";
import RedditProps from "./copmponents/RedditProp";
import Unmount from "./copmponents/Unmount";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  const [reactJs, setReactJs] = useState("reactjs");

  const [mount, setMount] = useState(true);
  const unMount= mount?<Unmount />:"" 

  return (
    <div className="App">
      {/* <Reddit/> */}

      {/* <RedditProps reactJsProps={reactJs} js={reactJs}/>  */}

      <button onClick={()=> setMount(false)}>click</button>
     
      {unMount}
      
    </div>
  );
}

export default App;
