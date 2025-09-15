import React from "react";
import { Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative mt-[90px]">
      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        <div className="bg-black rounded-3xl px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white flex-1">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              STAY UPTO DATE ABOUT
              <br />
              OUR LATEST OFFERS
            </h2>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-700 placeholder-gray-400 border-none outline-none text-sm"
              />
            </div>
            <button className="w-full py-4 bg-white text-black font-medium rounded-full hover:bg-gray-50 transition-colors text-sm">
              Send Us For Notification
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] pt-24 pb-12 -mt-16">
        <div className="max-w-5xl mx-auto px-6 pt-8">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="flex-1 max-w-lg">
              <h1 className="text-4xl font-extrabold text-black mb-6 tracking-tight">
                SHOP.CO
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                We have clothes that suits your style and
                <br />
                which you're proud to wear. From
                <br />
                women to men.
              </p>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Facebook className="w-5 h-5 text-black fill-current" />
                </div>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="lg:pt-0">
              <h3 className="font-medium text-black mb-8 text-lg tracking-wider">
                HELP
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors text-base"
                >
                  Privacy statement
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors text-base"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors text-base"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
