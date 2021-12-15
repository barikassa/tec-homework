import { useState } from "react";

const VactionAppAgain = () => {
  const [vactionList, setVactionList] = useState([
    { city: "tel-aviv", complited: false },
  ]);
  const [input, setInput] = useState([]);
  const [allBtn, setAll] = useState([]);

  const [activeBtn, setActiveBtn] = useState(false);

  const addVaction = () => {
    const copyVactionList = [...vactionList];
    copyVactionList.push(input);
    setVactionList(copyVactionList);
    setAll(copyVactionList);
    console.log(input);
    console.log(copyVactionList);
  };

  const allBtnHandler = () => {
    const copyVactionList = [...vactionList];
    setAll(copyVactionList);
    console.log(allBtn);
  };

  //   const activeHandler=()=>{

  //   }

  return (
    <div>
      city:{" "}
      <input
        type="text"
        onChange={(evt) =>
          setInput({ city: evt.target.value, complited: false })
        }
      />{" "}
      <button onClick={addVaction}>addVaction</button>
      <br />
      <br />
      <br />
      {vactionList.map((item, i) => {
        return (
          <li key={i}>
            {i},{item.city}
          </li>
        );
      })}
      <br />
      <br />
      <br />
      <button onClick={allBtnHandler}>all</button> <button>active</button>{" "}
      <button>complited</button>
    </div>
  );
};

export default VactionAppAgain;
