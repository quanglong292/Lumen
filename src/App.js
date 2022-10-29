import { useState } from "react";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import NavigateButton from "./components/NavigateButton";

import menu_1 from "./assets/images/menu_1.png";
import menu_2 from "./assets/images/menu_2.png";
import menu_3 from "./assets/images/menu_3.png";
import menu_4 from "./assets/images/menu_4.png";

function App() {
  return (
    <div className="w-full pb-[72px] relative overflow-hidden">
      <div className="w-full h-fit relative">
        <div className="w-full h-[428px] bg-primary p-4">
          <NavigateButton />
          <p className="text-[32px] text-white font-semibold mb-3">
            Silver Tier
          </p>
          <p className="text-[16px] text-[#B5B5BE] font-normal">
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </p>
        </div>
        <Card />
      </div>
      <div className="w-full h-fit mt-[200px]">
        <h1 className="font-semibold pl-4 text-[18px]">Petrol</h1>
        <Carousel />
        <h1 className="font-semibold pl-4 text-[18px]">Rental Rebate</h1>
        <Carousel />
        <h1 className="font-semibold pl-4 text-[18px]">Food and Beverage</h1>
        <Carousel />
      </div>
      <div className="w-full h-[96px] bg-white border-t-[1px] border-[#D5D5DC] fixed bottom-[1px] left-0 px-4 flex justify-between items-center overflow-hidden">
        <img src={menu_1} className="w- fit h-fit" />
        <img src={menu_2} className="w-fit h-fit" />
        <img src={menu_3} className="w-fit h-fit" />
        <img src={menu_4} className="w-fit h-fit" />
      </div>
    </div>
  );
}

export default App;
