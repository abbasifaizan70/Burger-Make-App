import React from "react";

function Meat ({ meatCount }){
  return(
    <div>
      {Array.from({ length: meatCount }).map((item, index) => <div key={index} className='Meat'></div>)}
    </div>
  )
}

export default Meat;