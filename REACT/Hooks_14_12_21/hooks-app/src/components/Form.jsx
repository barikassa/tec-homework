import { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const printer = (e) => {
    e.preventDefault();
    console.log(name, email, Password);
  };
  return (
    <div>
      <form onSubmit={printer}>
        Name:{" "}
        <input type="text" onChange={(evt) => setName(evt.target.value)} />
        <br />
        Email:{" "}
        <input type="text" onClick={(evt) => setEmail(evt.target.value)} />
        <br />
        Password:{" "}
        <input type="text" onClick={(evt) => setPassword(evt.target.value)} />
        <br />
        <input type="submit" value="Login" />
        <br />
      </form>
    </div>
  );
}; 

export default Form;
