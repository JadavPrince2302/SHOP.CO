import React, { useState } from "react";
import Button from "../components/Button/Button";
import shirtData from "../data/shirt.json";
import tShirtData from "../data/t-shirt.json";
import Card from "../components/Card/Card";
import star from "../assets/icons/star.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const [visibleTshirts, setVisibleTshirts] = useState(4);
  const [lastVisible, setLastVisible] = useState(4);

  const handleViewAll = () => {
    setLastVisible(visibleTshirts);
    setVisibleTshirts((prev) =>
      prev + 4 <= tShirtData.length ? prev + 4 : tShirtData.length
    );
  };

  return (
    <>
      <div className="bg-[#F2F0F1] flex">
        <div className="max-w-[1240px] mx-auto py-8 sm:py-12 lg:py-[90px] px-4 sm:px-6 flex flex-col gap-6 sm:gap-8 lg:gap-11">
          <div className="max-w-[577px] flex flex-col gap-6">
            <p className="font-integral text-[36px] sm:text-4xl md:text-5xl lg:text-[64px] font-black leading-[34px] sm:leading-tight lg:leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
            <div className="font-satoshi text-[16px] font-bold text-gray-700 opacity-60">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto !rounded-full !px-[54px] !py-[14px] hover:scale-105 transition-transform duration-300"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-6 sm:gap-10 px-4 sm:px-6">
        <div className="pt-8 sm:pt-12">
          <span className="font-black font-integral text-2xl sm:text-3xl md:text-5xl">
            New Arrivals
          </span>
        </div>
        <div className="grid gap-4 sm:gap-5 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {tShirtData.slice(0, visibleTshirts).map((item, index) => (
            <Card
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              icon={star}
              className={index >= lastVisible ? "animate-slideUpOnce" : ""}
            />
          ))}
        </div>
        {visibleTshirts < tShirtData.length && (
          <button
            onClick={handleViewAll}
            className="text-center rounded-[62px] font-satoshi border border-black/10 px-[54px] py-4 cursor-pointer"
          >
            View All
          </button>
        )}
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-6 sm:gap-10 px-4 sm:px-6 mt-8">
        <div className="pt-8 sm:pt-12">
          <span className="font-black font-integral text-2xl sm:text-3xl md:text-5xl">
            Top Selling
          </span>
        </div>
        <div className="grid gap-4 sm:gap-5 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
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

      <div className="max-w-[1240px] mx-auto flex justify-center flex-col items-center gap-6 sm:gap-10 px-4 sm:px-6 mt-8">
        <div className="max-w-full lg:max-w-[800px] pt-8 sm:pt-12 flex flex-col items-center gap-4 sm:gap-6">
          <span className="font-black font-integral text-2xl sm:text-3xl md:text-5xl text-center">
            OUR HAPPY CUSTOMERS
          </span>
          <div className="w-full lg:w-[800px] bg-[#F0EEED] rounded-[30px] sm:rounded-[83.5px_0px] p-4 sm:p-6">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="flex flex-col justify-center gap-3 items-center">
                        <p className="font-bold font-satoshi text-sm sm:text-[16px] text-center">
                          Our experience with your service has been exceptional.
                          The platform provided us with a seamless hiring
                          process, from posting job openings to finding the
                          perfect candidate. The user-friendly interface made it
                          easy for our team to collaborate, review applications,
                          and schedule interviews. Thanks to your service, we
                          were able to hire a highly qualified candidate within
                          a short timeframe. It has become an invaluable tool
                          for our recruitment efforts
                        </p>
                        <div className="flex flex-col gap-1 justify-center items-center">
                          <span className="font-satoshi text-sm sm:text-[16px] font-bold">
                            John Smith
                          </span>
                          <span className="font-satoshi text-xs sm:text-[14px] text-gray-500">
                            Senior HR Manager at Zendesk
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className="-left-6 sm:-left-[41px] bg-blue-700 text-white hover:bg-blue-700 hover:text-white" />
              <CarouselNext className="-right-6 sm:-right-[41px] bg-blue-700 text-white hover:bg-blue-700 hover:text-white" />
            </Carousel>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp { from {opacity:0; transform:translateY(50px);} to {opacity:1; transform:translateY(0);} }
        .animate-slideUpOnce { animation: slideUp 0.6s ease-out forwards; }
      `}</style>
    </>
  );
};

export default Home;
