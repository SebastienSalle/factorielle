import {useState} from 'react';

import './App.css';
import './index.css';
import factorial from './factoriser';

function App() {

const [num, setNum] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        La factorielle de
        <input data-testid="main-input" type="number" value={num} min={0} onChange={e => setNum(e.target.value)} className ='input'/>
        est
        <span data-testid="output-value">
          {factorial(num)}
        </span>

      </header>
    </div>
  );
}

export default App;
