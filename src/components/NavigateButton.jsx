import React from "react";

import Arrow from "../assets/images/arrow.png";

const NavigateButton = () => {
  return (
    <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full mb-3">
      <img src={Arrow} alt="" className="h-fit w-fit" />
    </div>
  );
};

export default NavigateButton;
