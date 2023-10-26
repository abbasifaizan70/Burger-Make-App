import React from "react";

function Lettuce ({ lettuceCount }){
  return(
    <div>
      {Array.from({ length: lettuceCount }).map((item, index) => <div key={index} className='Lettuce'></div>)}
    </div>
  )

}

export default Lettuce;