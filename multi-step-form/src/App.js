import './App.css';
import React from 'react';
import RightContainer from './right-container';
import LeftContainer from './left-container';

function App() {
  const [stage, setStage] = React.useState(0);

  return (
    <div className="App">
      <div className='left-combined'>
        <LeftContainer stage={stage} />
        <div className='left-ctr-bottom'>
          <button 
          style={stage == 3 ? {display: 'none'} : {}}
          onClick={() => {stage < 3 ? setStage(stage + 1) : setStage(0)}}>
            Next
          </button>
        </div>
      </div>
      <RightContainer stage={stage}/>
    </div>
  );
}

export default App;
