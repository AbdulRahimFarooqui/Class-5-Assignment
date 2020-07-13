import React, {useState} from "react";
import Parent from './JustAParent.js';
import ContextCreation from './ContextCreationForCount.js'

function App() {
  const ContextInfoArray = useState(0);
  return (
    <div className="App">
      <ContextCreationForCount.Provider value ={ContextInfoArray}>
        <Parent />
      </ContextCreationForCount.Provider>
    </div>
  );
}

export default App;

