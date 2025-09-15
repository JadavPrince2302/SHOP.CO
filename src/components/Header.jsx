import {
  ChevronDown,
  CircleUserRound,
  ShoppingCart,
  Menu,
  X,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="max-w-[1240px] mx-auto px-[10px] py-[24px]   flex items-center justify-between gap-[40px]">
          <Link
            className="font-integral text-[26px] sm:text-[32px] font-black"
            to={"#"}
          >
            SHOP.CO
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-start gap-8">
            <ul className="flex gap-6 font-satoshi text-[16px]">
              <li className="flex gap-2 items-center cursor-pointer pl-[40px]">
                <span>Shop</span> <ChevronDown size={16} />
              </li>
              <li className="cursor-pointer">On Sale</li>
              <li className="cursor-pointer">New Arrivals</li>
              <li className="cursor-pointer">Brands</li>
            </ul>
            <div className="flex items-center px-[16px] py-[12px] gap-[12px] bg-[#F0F0F0] rounded-full">
              <Search className="text-black opacity-40" size={24} />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent border-none focus:outline-none text-[16px] font-satoshi"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <ShoppingCart className="cursor-pointer" />
            <CircleUserRound className="cursor-pointer" />
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-black"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-white px-6 py-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center mb-6">
          <button onClick={() => setIsSidebarOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-5 font-satoshi text-[18px]">
          <li className="flex gap-2 items-center cursor-pointer">
            <span>Shop</span> <ChevronDown size={16} />
          </li>
          <li className="cursor-pointer">On Sale</li>
          <li className="cursor-pointer">New Arrivals</li>
          <li className="cursor-pointer">Brands</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
