import { useEffect, useState } from "react";

export default function Navbar() {
  const [btns, setBtns] = useState<string[]>([
    "trang chủ",
    "sản phẩm",
    "thông tin",
    "liên hệ",
  ]);
  const [color, setColor] = useState<string[]>(["", "", "", ""]);

  //   useEffect(() => {}, [color]);
  const handleClick = (a: any) => {
    for (let i = 0; i < color.length; i++) {
      if (i === a) {
        color[i] = "red";
        setColor([...color]);
      } else {
        color[i] = "";
        setColor([...color]);
      }
    }
  };
  return (
    <>
      {btns.map((item, index) => (
        <button
          style={{ background: color[index] }}
          onClick={() => handleClick(index)}
        >
          {item}
        </button>
      ))}
    </>
  );
}
