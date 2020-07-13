import React from 'react';
import ChildContext from './ChildUsingContext.js';
import ChildReducer from './ChildUsingReducer.js';

const Parent = ()=>{
  return(
    <div>
      <ChildContext />
      <ChildReducer />
    </div>
  )
}


export default Parent;

