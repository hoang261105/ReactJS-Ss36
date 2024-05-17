import { useEffect, useState } from "react";
let seasons: string;
export default function Season() {
  const [month, setMonth] = useState<number>(0);
  const [season, setSeason] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    const monthIndex = date.getMonth();
    setMonth(monthIndex + 1);

    if (monthIndex > 0 && monthIndex < 4) {
      seasons = "Xuân";
    } else if (monthIndex >= 4 && monthIndex < 7) {
      seasons = "Hạ";
    } else if (monthIndex >= 7 && monthIndex < 10) {
      seasons = "Thu";
    } else {
      seasons = "Đông";
    }
    setSeason(seasons);
  }, []);
  return (
    <div>
      <p>Bây giờ là tháng: {month}</p>
      <p>Mùa hiện tại: {season}</p>
    </div>
  );
}
