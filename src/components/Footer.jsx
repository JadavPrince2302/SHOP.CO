import React from "react";
import { Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="relative mt-[90px]">
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-black rounded-3xl px-6 sm:px-8 lg:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white w-full lg:max-w-[550px] text-center lg:text-left">
            <span className="text-2xl sm:text-3xl lg:text-[40px] font-bold font-integral leading-[34px] sm:leading-[40px] lg:leading-[45px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </span>
          </div>
          <div className="flex flex-col gap-4 w-full lg:max-w-sm">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-full bg-white text-gray-700 placeholder-gray-400 border-none outline-none text-sm"
              />
            </div>
            <button className="w-full py-3 sm:py-4 bg-white text-black font-medium rounded-full hover:bg-gray-50 transition-colors text-sm">
              Send Us For Notification
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] pt-20 sm:pt-24 pb-10 sm:pb-12 -mt-12 sm:-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-evenly gap-12 sm:gap-16">
            <div className="flex-1 max-w-lg text-left lg:text-left">
              <h1 className="text-3xl sm:text-[34px] font-integral font-black text-black mb-6">
                SHOP.CO
              </h1>
              <div className="max-w-[280px] lg:mx-0">
                <p className="text-gray-600 mb-8 font-satoshi leading-[22px] text-sm sm:text-base">
                  We have clothes that suits your style and which you're proud
                  to wear. From women to men.
                </p>
              </div>

              <div className="flex justify-start lg:justify-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow hover:scale-105 transition">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow hover:scale-105 transition">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="lg:pt-0 text-left lg:text-left">
              <h3 className="font-satoshi font-medium text-black mb-6 sm:mb-8 text-base sm:text-lg tracking-wider">
                HELP
              </h3>
              <div className="flex flex-col gap-4 sm:gap-5">
                <Link
                  to="#"
                  className="text-gray-600 font-satoshi hover:text-black transition-colors text-sm sm:text-base"
                >
                  Privacy statement
                </Link>
                <Link
                  to="#"
                  className="text-gray-600 font-satoshi hover:text-black transition-colors text-sm sm:text-base"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="#"
                  className="text-gray-600 font-satoshi hover:text-black transition-colors text-sm sm:text-base"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
