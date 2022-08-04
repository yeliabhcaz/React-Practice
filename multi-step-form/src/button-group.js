import React from 'react';

export default function ButtonGroup({budget}) {
  const [isActive, setIsActive] = React.useState(0);
  
  return (
    <div className='button-ctr'>
      <button 
        className ={isActive === 1 ? 'button-stage-1 active-button' : 'button-stage-1'} 
        onClick={() => {setIsActive(1); budget('2k');}}>$2k
      </button>
      <button 
        className ={isActive === 2 ? 'button-stage-1 active-button' : 'button-stage-1'} 
        onClick={() => {setIsActive(2); budget('5k');}}>$5k
        </button>
        <button 
        className ={isActive === 3 ? 'button-stage-1 active-button' : 'button-stage-1'} 
        onClick={() => {setIsActive(3); budget('limitless');}}>limitless
        </button>
    </div>
  )
}