import React from "react";

function Cheese ({ cheeseCount }){
  return(
    <div>
      {Array.from({ length: cheeseCount }).map((item, index) => <div key={index} className='Cheese'></div>)}
    </div>
  )

}

export default Cheese;