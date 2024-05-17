import React, { useState } from "react";

export default function KeyPress() {
  const [key, setKey] = useState("");
  const [keyPressed, setKeyPressed] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    setKey(event.key); // Cập nhật trạng thái key là event.key
    setKeyPressed(event.keyCode); // Cập nhật trạng thái keyPressed là event.keyCode
  };

  return (
    <div
      onKeyDown={handleKeyDown} // Dùng để xử lý sự kiện khi người dùng nhấn 1 phím trong khi tương tác với 1 thành phần component
      tabIndex={0} // Dùng để cho phép thẻ nhận sự kiện bàn phím
      style={{
        border: "1px solid black",
        padding: "20px",
        display: "inline-block",
      }}
    >
      <p>Bạn đã nhấn phím: {key}</p>
      <p>Mã phím: {keyPressed}</p>
    </div>
  );
}
