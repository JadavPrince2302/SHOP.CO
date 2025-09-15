import React from "react";

const Card = ({ image, name, icon, price }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="w-[295px] h-[298px]">
          <img src={image} alt="shirt" />
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="font-satoshi text-[20px] font-bold ">{name}</span>
          <div className="flex gap-1.5">
            <img src={icon} alt="" />
            <img src={icon} alt="" />
            <img src={icon} alt="" />
            <img src={icon} alt="" />
            <span className="text-[14px]">
              4.5/<span className="text-gray-500"> 5</span>
            </span>
          </div>
          <span className="font-satoshi text-2xl font-bold">{price}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
