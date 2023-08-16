export default function Heading({ h4, h1 }) {
  return (
    <div className="fixed-heading">
      <h4 className="text-center">{h4}</h4>
      <h1 className="text-center">{h1}</h1>
    </div>
  );
}
