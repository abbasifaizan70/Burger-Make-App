import React from 'react';

export const Button = ({defaultValue, PerfromAction, text, currentValue}) => {
  return (
    <>
      <button defaultValue={defaultValue} onClick={(e) => PerfromAction( text, "add")} className='btn btn-success m-3'>Add {text}</button>
      <button 
        defaultValue={defaultValue}
        onClick={(e) => PerfromAction( text, "remove")} 
        className= {`btn btn-info m-3 ${currentValue > 0 ? '': 'disabled'}`}>
          Remove {text}
      </button>
    </>
  )
}