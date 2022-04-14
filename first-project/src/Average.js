import React, { useMemo, useState, useCallback, useRef } from "react";

const getAverage = (nums) => {
  console.log("caculating");
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b);
  return sum / nums.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}></input>
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
