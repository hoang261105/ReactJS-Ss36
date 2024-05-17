import { useEffect, useState } from "react";

export default function CountClick() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    document.title = `Click ${count} lần`;
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click {count} lần</button>
    </div>
  );
}
