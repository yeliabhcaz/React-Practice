import React from 'react';
import ButtonGroup from './button-group';

export default function LeftContainer(props) {
  const [email, setEmail] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [info, setInfo] = React.useState('');

  let content;
  switch (props.stage) {
    case 0:
      content = (
      <div className='right-ctr-top'>
      <h1>Apply to work with our agency</h1>
      <input 
      type='text' 
      placeholder="What's your email?"
      onChange={e => setEmail(e.target.value)} />
      </div> )
      break;
    case 1:
      content = (
        <div className='right-ctr-top'>
        <h1>Apply to work with our agency</h1>
        <ButtonGroup budget={setBudget}/>
        </div> )
      break;
    case 2:
      content = (
        <div className='right-ctr-top'>
        <h1>Apply to work with our agency</h1>
        <input 
        type='text' 
        placeholder="Anything else we should know?" 
        onChange={e => setInfo(e.target.value)} />
        </div> )
      break;
    case 3:
      content = (
        <div className='right-ctr-top'>
        <h1>Thank you!</h1>
        </div> )
      break;
    default:
      content = '';
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

  return (
      content
  );
}