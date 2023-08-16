export default function GridBox({ e, left }) {
  return (
    <div className="grid-box flex" key={e.heading}>
      {left}
      <div className="right">
        <h3>{e.heading}</h3>
        <p>{e.text}</p>
      </div>
    </div>
  );
}
