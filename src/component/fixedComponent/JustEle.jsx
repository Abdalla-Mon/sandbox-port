import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let textArr = [
  "Aenean eu leo quam. Pellentesque ornare.",
  "Nullam quis risus eget urna mollis ornare.",
  "Donec id elit non mi porta gravida at eget.",
];

export default function JustEle() {
  return (
    <>
      {textArr.map((e, index) => {
        return (
          <div className="lower-area flex" key={index}>
            <Check />
            <p className="ml-3">{e}</p>
          </div>
        );
      })}
    </>
  );
}
function Check() {
  return (
    <div className="check flex justify-center items-center">
      <FontAwesomeIcon icon="fa-solid fa-check" />
    </div>
  );
}
