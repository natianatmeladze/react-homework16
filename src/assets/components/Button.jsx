import { useState } from "react";

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-5 mx-auto items-center mt-20">
      <button
        className="rounded-lg bg-gray-200 text-gray-800 p-4 text-md font-bold"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <h1 className="font-bold text-2xl text-red-800">Hello World!</h1>}
    </div>
  );
};

export default Button;