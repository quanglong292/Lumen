import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

import Frame_1 from "../assets/images/frame1.png";

const array = [
  {
    head: "15 Coins",
    descpt: "50% discount for every $100 top-up on your Shell Petrol Card",
    extra: "",
  },
  {
    head: "15 Coins",
    descpt: "70% discount top-up on your Shell Petrol Card",
    extra: "Insufficient coins",
  },
  {
    head: "15 Coins",
    descpt: "Free Cold Stone Sundae at any flavour!",
    extra: "",
  },
  {
    head: "15 Coins",
    descpt: "Get $500 Rental rebate",
    extra: "",
  },
];

const CarouselItem = ({ item }) => {
  const { head, descpt, extra } = item;
  return (
    <div className="w-[85%] h-[240px] rounded-md shadow-lg mr-4 overflow-hidden">
      <img src={Frame_1} alt="" className="w-full h-fit" />
      <div className="p-3 text-ellipsis">
        <p className="font-semibold text-link my-1">{head}</p>
        <p className="text-second">{descpt}</p>
        {extra && <p className="text-[14px] text-link">{extra}</p>}
      </div>
    </div>
  );
};

const Carousel = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-full my-5 mb-8">
      <Slider {...settings}>
        {array.map((i) => (
          <CarouselItem key={i.descpt} item={i} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
