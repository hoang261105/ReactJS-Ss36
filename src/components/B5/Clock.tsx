import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <p>Thời gian hiện tại: {date.toLocaleTimeString()}</p>
    </div>
  );
}
