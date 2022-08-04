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
      type='email' 
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

  return (
      content
  );
}
