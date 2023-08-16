export default function BlueBtn({ text, href }) {
  return (
    <a className="blue-btn" href={href}>
      {text}
    </a>
  );
}
