import React from "react";
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
  return (
    <>
      <div className="bg-[#F2F0F1] flex">
        <div className="max-w-[1240px] mx-auto py-8 sm:py-12 lg:py-[90px] px-4 sm:px-6 flex flex-col gap-6 sm:gap-8 lg:gap-11">
          <div className="max-w-[577px] lg:max-w-[577px] flex flex-col gap-4 sm:gap-6 lg:gap-8 relative text-left lg:text-left">
            <p className="font-integral text-[36px] sm:text-4xl md:text-5xl lg:text-[64px] font-black leading-[34px] sm:leading-tight lg:leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
            <div className="font-satoshi text-[16px] font-bold sm:text-base md:text-[16px] text-gray-700 opacity-60">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </div>
            <div className="absolute -right-4 sm:-right-[50px] lg:-right-[100px] -top-5 lg:-top-[35px] hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 104 104"
                fill="none"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="absolute -left-10 sm:-left-[60px] lg:-left-[90px] bottom-[50px] sm:bottom-[80px] lg:bottom-[94px] hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="56"
                viewBox="0 0 104 104"
                fill="none"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto !rounded-full !px-[54px] !py-[14px] sm:!px-12 md:!px-16 !py-2 sm:!py-4 md:!py-4 !text-[16px] sm:!text-base md:!text-[16px] font-bold"
              >
                Shop Now
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            <div className="pl-0 sm:pl-3 text-center sm:text-left">
              <div>
                <span className="text-2xl sm:text-3xl md:text-[40px] font-satoshi font-black">
                  200+
                </span>
              </div>
              <div className="text-sm sm:text-[16px] font-satoshi opacity-60">
                International Brands
              </div>
            </div>
            <div className="pl-0 sm:pl-3 sm:border-l border-gray-300 text-center sm:text-left">
              <div>
                <span className="text-2xl sm:text-3xl md:text-[40px] font-satoshi font-black">
                  2000+
                </span>
              </div>
              <div className="text-sm sm:text-[16px] font-satoshi opacity-60">
                High-Quality Products
              </div>
            </div>
            <div className="pl-0 sm:pl-3 sm:border-l border-gray-300 text-center sm:text-left">
              <div>
                <span className="text-2xl sm:text-3xl md:text-[40px] font-satoshi font-black">
                  30,000+
                </span>
              </div>
              <div className="text-sm sm:text-[16px] font-satoshi opacity-60">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto flex justify-center flex-col items-center gap-6 sm:gap-10 px-4 sm:px-6">
        <div className="pt-8 sm:pt-12">
          <span className="font-black font-integral text-2xl sm:text-3xl md:text-5xl">
            New Arrivals
          </span>
        </div>
        <div className="grid gap-4 sm:gap-5 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center justify-center items-center">
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

      <div className="max-w-[1240px] mx-auto flex justify-center flex-col items-center gap-6 sm:gap-10 px-4 sm:px-6 mt-8">
        <div className="pt-8 sm:pt-12">
          <span className="font-black font-integral text-2xl sm:text-3xl md:text-5xl">
            Top Selling
          </span>
        </div>
        <div className="grid gap-4 sm:gap-5 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center justify-center items-center">
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
              <CarouselPrevious className="-left-6 sm:-left-[41px] bg-blue-700 text-white hover:bg-blue-700" />
              <CarouselNext className="-right-6 sm:-right-[41px] bg-blue-700 text-white hover:bg-blue-700" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
