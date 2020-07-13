import React, {useState} from "react";
import Parent from './JustAParent';
import ContextCreation from './ContextCountCreation'

function App() {
  const ContextInfoArray = useState(0);
  return (
    <div className="App">
      <ContextCreation.Provider value ={ContextInfoArray}>
        <Parent />
      </ContextCreation.Provider>
    </div>
  );
}

export default App;

