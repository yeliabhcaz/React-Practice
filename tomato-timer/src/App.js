import React from 'react';
import './App.css';
import TomatoBox from './tomatoBox';
import ButtonBox from './buttonBox';

function App() {
  const [tomatoes, setTomatoes] = React.useState('');

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <TomatoBox tomatoes={tomatoes} />
        <ButtonBox tomatoes={tomatoes} setTomatoes={setTomatoes} />
      </div>
    </div>
  );
}

export default App;
