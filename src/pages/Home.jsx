import React from "react";
import Button from "../components/Button/Button";
import shirtData from "../data/shirt.json";
import tShirtData from "../data/t-shirt.json";
import Card from "../components/Card/Card";
import star from "../assets/icons/star.svg";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">
        <div className="max-w-[1240px] mx-auto py-[90px] flex flex-col gap-11">
          <div className="max-w-[577px] flex flex-col gap-8 relative">
            <div>
              <p className="font-integral text-[64px] font-black leading-16">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </p>
            </div>
            <div className="text-center font-satoshi text-[16px] opacity-[0.6]">
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
            </div>
            <div className="absolute -right-[100px] -top-[35px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <div className="absolute -left-[90px] bottom-[94px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="64"
                viewBox="0 0 104 104"
                fill="none"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <div>
              <Button
                variant="primary"
                size="lg"
                className="!rounded-full !px-[54px] !py-[16px] !text-[16px] font-bold"
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="pl-3">
              <div>
                <span className="text-[40px] font-satoshi font-black">
                  200+
                </span>
              </div>
              <div className="text-[16px] font-satoshi opacity-[0.6]">
                International Brands
              </div>
            </div>
            <div className="pl-3 border-l border-gray-300">
              <div>
                <span className="text-[40px] font-satoshi font-black">
                  2000+
                </span>
              </div>
              <div className="text-[16px] font-satoshi opacity-[0.6]">
                High-Quality Products
              </div>
            </div>
            <div className="pl-3 border-l border-gray-300">
              <div>
                <span className="text-[40px] font-satoshi font-black">
                  30,000+
                </span>
              </div>
              <div className="text-[16px] font-satoshi opacity-[0.6]">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto flex justify-center flex-col items-center gap-[55px]">
        <div className="pt-16">
          <span className="font-black font-integral text-5xl ">
            New Arrivals
          </span>
        </div>
        <div className="grid gap-5 w-full grid-cols-[repeat(auto-fill,minmax(295px,1fr))] place-items-center">
          {tShirtData.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              icon={star}
            />
          ))}
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto flex justify-center flex-col items-center gap-[55px]">
        <div className="pt-16">
          <span className="font-black font-integral text-5xl ">
            top selling
          </span>
        </div>
        <div className="grid gap-5 w-full grid-cols-[repeat(auto-fill,minmax(295px,1fr))] place-items-center">
          {shirtData.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              icon={star}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
