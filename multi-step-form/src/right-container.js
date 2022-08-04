export default function RightContainer(props) {
  let url = ''
  switch (props.stage) {
    case 0:
      url = 'https://assets.codepen.io/6060109/form-stage-1.png';
      break;
    case 1:
      url = 'https://assets.codepen.io/6060109/form-stage-2.png';
      break;
    case 2:
      url = 'https://assets.codepen.io/6060109/form-stage-3.png';
      break;
    case 3:
      url = 'https://assets.codepen.io/6060109/form-stage-4.png';
      break;
    default:
      url = 'fuck you';
  };
  return (
    <div className='right-ctr' style={{background: `url(${url}`}}></div>
  );
}