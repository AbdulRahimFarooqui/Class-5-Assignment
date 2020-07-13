import React from 'react';
import ChildContext from './ChildUsingContext';
import ChildReducer from './ChildUsingReducer';

const Parent = ()=>{
  return(
    <div>
      <ChildContext />
      <ChildReducer />
    </div>
  )
}


export default Parent;

