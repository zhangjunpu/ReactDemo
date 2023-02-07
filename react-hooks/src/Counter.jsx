import React, { memo, useState, useEffect, useCallback, useMemo } from "react";

const calc = (num, tail) => {
  console.log("calc 被调用 " + (tail ? tail : ""));
  let res = 0;
  for (let i = 1; i <= num; i++) {
    res += i;
  }
  return res;
};

const PButton = memo((props) => {
  console.log("PButton render: " + props.children);
  return <button onClick={props.onClick}>{props.children}</button>;
});

const Counter = memo(() => {
  console.log("Counter render");
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {});
    document.addEventListener("click", () => {});
  }, []);

  const changeCountCallback = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  const changeCountMemo = useMemo(() => {
    return () => {
      setCount(count + 1);
    };
  }, [count, setCount]);

  const calcNum = useMemo(() => calc(count, "memo"), [count]);

  return (
    <div>
      <h2>Counter</h2>
      <h3>calc: {calc(count)}</h3>
      <h3>calcNum: {calcNum}</h3>
      <h3>当前计数：{count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <PButton onClick={() => changeCountCallback()}>PButton 普通函数</PButton>
      <PButton onClick={changeCountCallback}>PButton useCallback</PButton>
      <PButton onClick={changeCountMemo}>PButton useMemo</PButton>
      <button onClick={() => setFlag(!flag)}>switch flag</button>
    </div>
  );
});

export default Counter;
