import { useEffect, useState } from "react";

export default function CountTimeRender() {
  const [time, setTime] = useState<number>(0);
  const [isRunning] = useState<boolean>(true);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  return (
    <div>
      <p>Thời gian đã trôi qua: {time} giây</p>
    </div>
  );
}
