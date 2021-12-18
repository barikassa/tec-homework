import { useEffect, useState } from "react";

const Reddit = () => {
  const [redit, setRedit] = useState([]);

  const getReddditData = () => {
    const url = "https://www.reddit.com/r/reactjs.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return console.log(data.data.children), setRedit(data.data.children), console.log(data);
      });
  };

  useEffect(getReddditData, []);

  return <div>{redit.map((item,i)=>{
      return <div key={i}><li>Title:{item.data.title}</li></div>
  })}</div>;
};

export default Reddit;
