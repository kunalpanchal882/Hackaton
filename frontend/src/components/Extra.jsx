import { useState } from "react";
const Extra = () => {
  const [message, setMessage] = useState("");

  const handleMove = () => {
    console.log("Mouse moved");
    setMessage("Mouse moved!");
  };

  return (
    <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
      <div
        onMouseMove={handleMove}
        className="w-[300px] h-[200px] bg-blue-500 text-white flex items-center justify-center text-xl font-bold"
      >
        Hover / Move Mouse Here
      </div>
      <p className="absolute top-4 left-4">{message}</p>
    </div>
  );
}

export default Extra