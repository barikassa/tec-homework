import { useState } from "react";

const Name = ({nameProp}) => {
  const [name, setName] = useState(nameProp);
  const [color, setColor] = useState(true);

  return <div>
      <p style={{color:color ? "green": "red"}} onClick={()=>setColor(!color)}>Name:{nameProp}</p>

  </div>
};

export default Name;