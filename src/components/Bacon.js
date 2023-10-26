import React from "react";

function Bacon ({ baconCount }){
  return(
    <div>
      {Array.from({ length: baconCount }).map((item, index) => <div key={index} className='Bacon'></div>)}
    </div>
  )
}

export default Bacon;