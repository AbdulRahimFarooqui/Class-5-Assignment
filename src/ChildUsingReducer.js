import React, {useReducer} from 'react';
import Reducer from './ReducerForCount.js';

const Counter=()=>{
  let [state, dispatcher] = useReducer(Reducer, 0);
  return (
    <div>
      <h3>This is the Counter Which Uses Reducer</h3>
      <button onClick = {()=>dispatcher(++state)}>
        Add
      </button>
      <button onClick={()=> dispatcher(++state)}>
        Minus
      </button>
      <p> </p>
      <hr/>
    </div>
  )
}


export default Counter;

