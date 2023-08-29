import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopEle({ classN, arr }) {
  return (
    <div className={"top-ele " + classN}>
      <div className="container mx-auto flex gap-3 items-center ">
        {arr.map((el, index) => {
          return (
            <>
              {index === arr.length - 1 ? (
                <a>{el}</a>
              ) : (
                <>
                  <a>{el}</a>
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-right"
                    className="text-sm"
                  />
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
