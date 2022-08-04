import React from 'react';
import ButtonGroup from './button-group';

export default function LeftContainer(props) {
  let headline = '';
  switch (props.stage) {
    case 0:
      headline = 'Apply to work with our agency';
      break;
    case 1:
      headline = 'What\'s your budget?';
      break;
    case 2:
      headline = 'Anything else we should know?'
      break;
    case 3:
      headline = 'Thank you!';
      break;
    default:
      headline = 'fuck you';
  };

/* 
   to do this better, use a switching statement to set a content variable and then return content
   this allows you to update your app more dynamically and handle individual inputs
   the current iteration of this app carries the input value from email to details, which is an issue
   
   to handle the data:
    set a state variable for each input
    collect input value with onChange={e => updateValue(e.target.value)} (pass update value as prop)
    and it is stored in your state variable

  this can either be output or sent to a server with post
*/

  const [isActive, setIsActive] = React.useState(false)
  const handleClick = () => {
    setIsActive(current => !current)
  }
  
  return (
    <div className='right-ctr-top'>
      <h1>{headline}</h1>
      <input 
      type='text' 
      placeholder={props.stage == 0 ? 'What\'s your email?' : '' }
      style= {props.stage == 3 || props.stage == 1 ? {display: 'none'} : {}} />
      <ButtonGroup stage={props.stage}/>
    </div>
  );
}