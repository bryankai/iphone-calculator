import React from 'react';

const Button = ({value, handleClick, classes}) => {
  return ( 
      <button className={classes} key={value} onClick={()=>handleClick(value)}>{value}</button>
   );
}
 
export default Button;