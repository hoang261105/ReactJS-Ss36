import React, { useEffect, useState } from "react";

export default function ChangeTitle() {
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    document.title = inputValue;
  }, [inputValue]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}
