import React, { useMemo, useState } from "react";

const getAverage = (nums) => {
  console.log("caculating");
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b);
  return sum / nums.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange}></input>
      <button onClick={onInsert}>registration</button>
      <ui>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ui>
      <div>
        <b>average: </b> {avg}
      </div>
    </div>
  );
};

export default Average;
