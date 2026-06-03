import { useState } from "react";

const User=(props)=>{
  const[count,setCount]=useState(0)
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
        <h2>Name of user : {props.name}</h2>
        <h3>Location : Pauri</h3>
        <h3>Contact : danish7</h3>
        <h4>Count : {count}</h4>
        <h4>Count2 : {count2}</h4>
    </div>
  )
}

export default User;