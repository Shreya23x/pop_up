import React, { useState } from 'react'
import "./Popup.css"
import tick from "./404-tick.png"
function Popup() {
  const [visible , setVisible] = useState(false);
  const[styles , setStyles] = useState('box')
  const showPopUp=()=>{
    if(visible===false){
      setVisible(true);
      setStyles("show");
      return "show";
    }
    else {
      setVisible(false)
      setStyles("box");
      return "box";
    }

  } 
  return (
    <>
    <div className="container">
      <div className="btn">
        <button onClick={showPopUp}> Submit </button>
      </div>
      <div className={styles}>
        <div className="popup">
          <img src={tick} alt="tick" />
          <h2>Thank You!</h2>
          <p>Your details are successfully submitted. Thanks!</p>
          <button onClick={showPopUp}>OK</button>
        </div>
        

      </div>
    </div>
    </>
  )
}

export default Popup