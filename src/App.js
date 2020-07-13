import React, {useState} from "react";
import JustAParent from './JustAParent.js';
import ContextCreationForCount from './ContextCreationForCount.js'

function App() {
  const ContextInfoArray = useState(0);
  return (
    <div className="App">
      <ContextCreationForCount.Provider value ={ContextInfoArray}>
        <JustAParent />
      </ContextCreationForCount.Provider>
    </div>
  );
}

export default App;

