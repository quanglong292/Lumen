import React from "react";

const Card = () => {
  return (
    <div className="w-[90%] h-[400px] bg-white rounded-lg shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] p-6">
      <p className="text-[14px] font-semibold text-second">
        Available Coin balance
      </p>
      <p className="text-[48px] mb-6">340</p>
      <div className="w-full bg-second rounded-lg h-[5px] relative mb-8">
        <div className="bg-link rounded-lg w-[75%] h-[5px] z-10 absolute top-0 left-0"></div>
      </div>
      <p className="text-second mb-5">
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </p>
      <p className="text-link mb-5">View tier benefits ></p>
      <button className="bg-primary rounded-lg h-[60px] w-full text-white mx-auto font-semibold text-[18px]">
        My Coupons
      </button>
      <p className="text-center text-second text-[14px] mt-5">
        Updated : 02/11/2021
      </p>
    </div>
  );
};

export default Card;
