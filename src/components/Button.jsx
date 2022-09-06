import React from 'react';

const Button = ({value, handleClick}) => {
  return ( 
      <button key={value} onClick={()=>handleClick(value)}>{value}</button>
   );
}
 
export default Button;