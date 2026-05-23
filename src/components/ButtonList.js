import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const list = [
    "All","Gaming","Technology","Fun","Cricket",
    "Songs","News","Cooking","Football","Telugu"
  ];

  return (
    <div className="flex space-x-4 py-2 px-2 overflow-x-auto no-scrollbar">
      {list.map((item) => (
        <Buttons key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;