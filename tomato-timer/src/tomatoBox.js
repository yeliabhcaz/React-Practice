export default function TomatoBox({tomatoes}) {
  return (
    <div className="tomato-box">
      <h1>{tomatoes ? tomatoes : 'no tomatoes yet :('}</h1>
    </div>
  );
}