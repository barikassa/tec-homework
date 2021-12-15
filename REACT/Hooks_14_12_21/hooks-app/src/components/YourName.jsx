import { useState } from "react";

//todo 1. כתוב קומפוננטה YourName אשר מציגה את שמך באלמנט p . לחיצה על השם מחליפה את הצבע של השם מירוק לאדום ובחזרה

const YourName = () => {
  const [color, setColor] = useState(true);

  const changeColor = () => {
    if (color) {
      setColor(false);
    } else {
      setColor(true);
    }
  };

  return (
    <div>
      <p style={{ color: color ? "green" : "red" }} onClick={changeColor}>
        name:Lionades
      </p>
    </div>
  );
};

export default YourName;
