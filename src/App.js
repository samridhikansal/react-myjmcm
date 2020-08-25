import React, {useState} from "react";
import "./style.css";

export default function App() {
 const [toggle, setToggle]= useState( { toggleState: false})
 
 const handleToggle = ()=>{ setToggle ({ toggleState: ! toggle.toggleState})}
  return (
    <div>
    <button onClick = { handleToggle} >Toggle</button>
      {toggle.toggleState&&<ul style={{ listStyleType: "none" }} >
          <li> home </li>
          <li>contact</li>
          <li>about</li>
      </ul>}
      
    </div>
  );
}
