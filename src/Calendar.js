import { memo } from "react";

function Calendar({ count }) {
  console.log("render Calendar");
  return <h1>Calendar {count}</h1>;
}

export default memo(Calendar, (prevProp, nextProp) => {});
