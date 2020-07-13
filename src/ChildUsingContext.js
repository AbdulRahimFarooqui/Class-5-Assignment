import React from 'react';
import {useContext} from 'react';
import CCC from './ContextCountCreation.js';

const Counter=()=> {
  let ContextInfoArray = useContext(CCC);

  return (
    <div>
      <h3>This, first, Counter Uses Contexts which include createContext and useContext
      </h3>
      <button onClick ={()=>ContextInfoArray[1](++ContextInfoArray[0])}>
        Add
      </button>
      

      <button onClick = {()=> ContextInfoArray[1](--ContextInfoArray[0])}>
        Minus
      </button>
      <p>The value of this, Context, counter is {ContextInfoArray[0]}</p>
      <p> </p>
      <hr/>
    </div>
  )
} 


export default Counter;
