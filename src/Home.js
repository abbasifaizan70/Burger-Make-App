import React, { useState } from 'react';
import './App.css';
import Meat from './components/Meat';
import Lettuce from './components/Lettuce'
import Cheese from './components/Cheese'
import Bacon from './components/Bacon'
import ActionButton from './components/ActionButtons';


function Home (){
  const [items, setItemCount] = useState({
    lettuce: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  })


  const PerfromAction = (item_name, action) => {
    if (action === 'add') {
      setItemCount(items => ({...items, [item_name]: items[item_name] + 1}));
    } 
    
    if (action === 'remove'){
      if (items[item_name] > 0){
        setItemCount(items => ({...items, [item_name]: items[item_name] - 1}));
      }
    }
  }


  return (
    <div className="App">
      <div className='container mt-5'>
        <div id="upper-bread" />        
        <Lettuce lettuceCount={items.lettuce} />
        <Bacon baconCount={items.bacon} />
        <Cheese cheeseCount={items.cheese} />
        <Meat meatCount={items.meat}/>
        <div id="lower-bread" />
      </div>
        <br/>
      <div className='footer'>
        <ActionButton items={items} PerfromAction={PerfromAction}/>
      </div>      
    </div>
  );
}

export default Home;