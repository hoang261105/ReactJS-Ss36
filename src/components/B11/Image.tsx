import React, { useEffect, useState } from "react";

export default function Image() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFiles = files ? files[0] : null;
    setFile(selectedFiles);
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, [file]);
  return (
    <div>
      <input type="file" onChange={handleChange} /> <br />
      <img src={image} style={{ width: 200 }} />
    </div>
  );
}
