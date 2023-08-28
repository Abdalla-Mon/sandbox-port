import { useState } from "react";
import TrTable from "./CartTr";
import { authFnc } from "./Cart";

export default function CartTable({ arr }) {
  const headTable = ["Product", "", "Price", "Quantity", "Total", ""];
  const [increaseStop, setIncrease] = useState(false);
  const auth = authFnc();
  return (
    <table className="relative">
      {auth.popup ? (
        <div className="table-popup">
          <span>Updating Cart...</span>
        </div>
      ) : null}

      <thead>
        <tr>
          {headTable.map((e) => {
            return <th key={e}>{e}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {arr.map((el) => {
          return (
            <TrTable
              el={el}
              key={el.id}
              setIncrease={setIncrease}
              increaseStop={increaseStop}
            />
          );
        })}
      </tbody>
    </table>
  );
}
