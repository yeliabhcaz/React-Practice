import React from 'react';

export default function ButtonGroup(props) {
  const [isActive, setIsActive] = React.useState(0);
  
  return (
    <div className='button-ctr'>
      <button 
        className ={isActive === 1 ? 'button-stage-1 active-button' : 'button-stage-1'} 
        style={props.stage != 1 ? {display: 'none'}: {}}
        onClick={() => setIsActive(1)}>$2k
      </button>
      <button 
        className ={isActive === 2 ? 'button-stage-1 active-button' : 'button-stage-1'} 
        style={props.stage != 1 ? {display: 'none'}: {}}
        onClick={() => setIsActive(2)}>$5k
        </button>
        <button 
        className ={isActive === 3 ? 'button-stage-1 active-button' : 'button-stage-1'} 
        style={props.stage != 1 ? {display: 'none'}: {}}
        onClick={() => setIsActive(3)}>limitless
        </button>
    </div>
  )
}