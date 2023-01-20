import React, { useEffect, useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect 初始化");

    return () => {
      console.log("useEffect 组件销毁")
    }
  }, []);

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
