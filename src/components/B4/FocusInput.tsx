import { useEffect, useRef } from "react";

export default function FocusInput() {
  const focusInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    focusInput.current?.focus();
  });
  return (
    <div>
      <input type="text" placeholder="Focus me" ref={focusInput} />
    </div>
  );
}
