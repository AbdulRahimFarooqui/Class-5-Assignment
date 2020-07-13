import React from 'react';
import ChildUsingContext from './ChildUsingContext.js';
import ChildUsingReducer from './ChildUsingReducer.js';

const Parent = ()=>{
  return(
    <div>
      <ChildUsingContext />
      <ChildUsingReducer />
    </div>
  )
}


export default Parent;

