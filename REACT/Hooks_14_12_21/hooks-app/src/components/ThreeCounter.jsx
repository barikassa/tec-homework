import { useState } from "react";

const ClickHandler=()=>{
    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0);
    const [counter3,setCounter3]=useState(0);

    return <div>
        <button onClick={()=>setCounter1(counter1 +1)}>click1</button>
        <button onClick={()=>setCounter2(counter2 +1)}>click2</button>
        <button onClick={()=>setCounter3(counter3 +1)}>click3</button>
        <p>{counter1}</p>
        <p>{counter2}</p>
        <p>{counter3}</p>
    </div>
}

export default ClickHandler;















































