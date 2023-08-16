import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CloseBtn({ setClose, className }) {
  return (
    <div className={"close-btn " + className} onClick={() => setClose(true)}>
      <FontAwesomeIcon icon="fa-solid fa-circle" className="close-circle" />
      <FontAwesomeIcon icon="fa-solid fa-xmark" className="close-x" />
    </div>
  );
}
