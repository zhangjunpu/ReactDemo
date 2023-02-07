import React, { useEffect } from "react";
import Counter from "./Counter";

export default function App() {
  useEffect(() => {
    console.log("useEffect 初始化");
    return () => {
      console.log("useEffect 组件销毁");
    };
  }, []);

  return (
    <div>
      <Counter />
    </div>
  );
}
