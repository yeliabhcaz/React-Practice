import "./App.css";
import React from 'react';

/*
  1. Select day, Turn it bold (default "M")
  2. Create a state for each day's tomatoes 🍅 
  3. Increment / decrement should work based
     which day is selected 
*/

const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];


export default function App() {
  const [selectedDay, setSelectedDay] = React.useState('M')
  const [allTomatoes, setAllTomatoes] = React.useState({})

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day) => (
          // add event listener for when day div is clicked to update state
          // add ternary operator, if the state is selected make the border and letter black
          <div key={day} className='tomato-box' onClick={() => setSelectedDay(day)}>
            <h3 style={selectedDay == day ? {color: 'black'} : {color: '#929498'}}>{day}</h3>
            <div style={selectedDay == day ? {border: '1px solid black'} : {border: '1px solid gray'}}className="tomato-day-box">
              {allTomatoes[day]}
            </div>
          </div>
        ))}
        <div className="buttons-container">
          <div 
          onClick={() => setAllTomatoes({...allTomatoes,[selectedDay]: allTomatoes[selectedDay] ? allTomatoes[selectedDay].slice(0,-2): alert('no negative tomatoes')})}
          className="button">-</div>
          <div 
          onClick={() => setAllTomatoes({...allTomatoes,[selectedDay]: allTomatoes[selectedDay] ? `${allTomatoes[selectedDay]}🍅`: '🍅'})}
          className="button">+</div>
        </div>
      </div>
    </div>
  );
}
