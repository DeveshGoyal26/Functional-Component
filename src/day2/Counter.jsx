import React, { useState } from "react";

const Button = () => {

    const [count,setcount] = useState(0)

    const incre = () => {
        setcount(count+1);
    }

    const decre = () => {
        if(count>0){
            setcount(count-1);
        }
        
    }

    const double = () => {
        setcount(()=>count*2);
    }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>incre()}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={()=>double()}>Double</button>
    </div>
  );
};

export default Button;
