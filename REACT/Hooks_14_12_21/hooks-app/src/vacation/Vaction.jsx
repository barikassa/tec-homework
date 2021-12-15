import { useState } from "react";

const Vaction = () => {
  const [vactionList, setVactionList] = useState([
    { city: "TLV", complited: false },
  ]);

  const [all, setAll] = useState([]);
  const [complited, setComplited] = useState([]);
  const [active, setActive] = useState([]);

  const [activeBtn, setActivBtn] = useState(false);
  const [allBtn, setAllBtn] = useState(false);
  const [completeBtn, setCompleteBtn] = useState(false);

  const [input, setInput] = useState();

  const addVaction = () => {
    const copyVactionList = [...vactionList];
    copyVactionList.push(input);
    setVactionList(copyVactionList);
    setAll(copyVactionList);
    console.log(copyVactionList);
  };

  const allHandler = () => {
    
    let allContainer = [];
    vactionList.map((item, i) => {
      if (!item.complited || item.complited) {
        allContainer.push(item);
      }
    });
    setAll(allContainer);
  };

  const activeHandler = () => {
    let activeVacation = [];
    vactionList.map((city, i) => {
      if (!city.complited) {
        activeVacation.push(city);
      }
    });
    setActivBtn(true);
    setActive(activeVacation);
    console.log("falsesssssssssss", activeVacation);
  };

  const colorHandler = (i) => {
    const copyVactionList = [...vactionList];
    if (copyVactionList[i].complited) {
      copyVactionList[i].complited = false;
    } else {
      copyVactionList[i].complited = true;
    }
    setVactionList(copyVactionList);
  };

  const complitedHandler = () => {
    let complitedArr = [];
    vactionList.map((city, i) => {
      if (city.complited) {
        complitedArr.push(city);

        console.log("true");
      }
    });
    setComplited(complitedArr);
    setCompleteBtn(true);
    console.log("false");
  };

  return (
    <div>
      <p>Vacation Wish List</p>
      Show All:{" "}
      <input
        type="text"
        onChange={(evt) => {
          setInput({ city: evt.target.value, complited: false });
        }}
      />
      <button onClick={addVaction}>Add Vacation</button>
      <br />
      <br />
      <br />
      {vactionList.map((item, i) => {
        return (
          <div key={i}>
            <p
              style={{ textDecoration: item.complited ? "line-through" : " " }}
              onClick={() => colorHandler(i)}
            >
              {item.city}
            </p>
          </div>
        );
      })}
      {completeBtn
        ? complited.map((item, i) => {
            return (
              <div key={i}>
                <p
                  style={{
                    textDecoration: item.complited ? "line-through" : " ",
                  }}
                  onClick={() => colorHandler(i)}
                >
                  {item.city}
                </p>
              </div>
            );
          })
        : null}


      {allBtn
        ? all.map((item, i) => {
            return (
              <div key={i}>
                <p
                  style={{
                    textDecoration: item.complited ? "line-through" : " ",
                  }}
                  onClick={() => colorHandler(i)}
                >
                  {item.city}
                </p>
              </div>
            );
          })
        : null}


      {activeBtn
        ? active.map((item, i) => {
            return (
              <div key={i}>
                <p
                  style={{
                    textDecoration: item.complited ? "line-through" : " ",
                  }}
                  onClick={() => colorHandler(i)}
                >
                  {item.city}
                </p>
              </div>
            );
          })
        : null}
      <button disabled={allBtn} onClick={allHandler}>
        all
      </button>
      <button disabled={activeBtn} onClick={activeHandler}>
        active
      </button>
      <button disabled={completeBtn} onClick={complitedHandler}>
        complited
      </button>
    </div>
  );
};

export default Vaction;
