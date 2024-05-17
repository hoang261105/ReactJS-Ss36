import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [preCountRef, setPreCountRef] = useState<number>();
  const handleClick = () => {
    setCount(count + 1);
    setPreCountRef(count);
  };
  return (
    <div>
      <p>Giá trị trước {preCountRef}</p>
      <p>Giá trị hiện tại: {count}</p>
      <button onClick={handleClick}>Tăng</button>
    </div>
  );
}
