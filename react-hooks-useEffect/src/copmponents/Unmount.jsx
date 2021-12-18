import { useEffect, useState } from "react";

const Unmount = () => {
    const [mount, setMount] =useState("unmount");
  const printer = () => {
    console.log(mount);
  };
  
  useEffect(()=>{ return printer()},[])

  return <div>{mount}</div>
};

export default Unmount;