import React, {useEffect, useState} from 'react';
import Button from './Button';

const Buttons = ({display, setDisplay }) => {
  
  const NUMBERS = [0,1,2,3,4,5,6,7,8,9];
  const OPERATORS = ["+","-","*","/",];

  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [operator, setOperator] = useState("");

  useEffect(()=>{
    console.log(value1)
    console.log(value2)
  })
  
  const handleNumberClick = (number) => {
    if (parseInt(display)===value1){
      setDisplay(number)
    } else if (display==="0") {
      setDisplay(number.toString);
    } else {
      setDisplay(display+number.toString())
    }
  }

  const handleOperatorClick = (operator) =>{
    setValue1(parseInt(display))
    setOperator(operator)
  }

  const handleEquals = () => {
    console.log({currString: display})
    const parsedNumber = parseInt(display);
    setValue2();
    if (operator==="+") {
      setDisplay(value1+parsedNumber)
    } else if (operator==="-") {
      setDisplay(value1-parsedNumber)
    } else if (operator==="*") {
      setDisplay(value1*parsedNumber)
    } else if (operator==="/") {
      setDisplay(value1/parsedNumber)
    setValue1(0)
    setValue2(0)
    }
  }

  const handleClear = () => {
    setDisplay(0)
    setValue1(0)
    setValue2(0)
    setOperator("")
  }


  return ( 
    <div className="buttons">
        {NUMBERS.map(n=> (
        <Button 
          classes="number-button"
          key={n}
          value={n}
          handleClick={handleNumberClick}
          />
      ))}
      {OPERATORS.map(n=>(
        <Button 
          classes="operator-button"
          key={n}
          value={n}
          handleClick={handleOperatorClick}
          />
      ))}
      <Button 
        classes="operator-button"
        key="="
        value="="
        handleClick={handleEquals}
      />
      <Button 
        class="special-button"
        key="C"
        value="C"
        handleClick={handleClear}
      />
    </div>
   );
}
 
export default Buttons;