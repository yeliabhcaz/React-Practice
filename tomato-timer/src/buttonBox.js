export default function ButtonBox({tomatoes, setTomatoes}) {
  return (
    <div className="buttons-container">
      <div className="button" onClick={tomatoes ? () => setTomatoes(tomatoes.slice(0,-2)) : () => setTomatoes(tomatoes) + alert('No negative tomatoes')}>-</div>
      <div className="button" onClick={() => setTomatoes(tomatoes + '🍅')}>+</div>
    </div>
  );
}