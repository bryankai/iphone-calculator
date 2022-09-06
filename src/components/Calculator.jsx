import Buttons from "./Buttons";
import Display from "./Display";
import React, { useState} from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  return ( 
    <div>
      <div className="top">clock</div>
      <Display value={display}/>
      <Buttons
        display={display}
        setDisplay={setDisplay}
      />
    </div>
   );
  }
 
export default Calculator;