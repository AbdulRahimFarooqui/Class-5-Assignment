import React, {useState} from "react";
import Parent from './JustAParent.js';
import ContextCreation from './ContextCreationForCount.js'

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

