const reducer=(state,action)=>{
  switch (action) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      if (state>0){
      return state - 1
      }
      else{
        return state
      }
    default:
      throw new Error()
  }
} 

export default reducer;

