import {
  ChevronDown,
  CircleUserRound,
  Search,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-[1240px] mx-auto px-2.5 py-6 flex items-center justify-between">
        <div className="flex gap-10">
          <Link className="font-integral text-[32px] font-black" to={"#"}>
            SHOP.CO
          </Link>
          <div className="flex gap-4 items-center pl-10">
            <ul className="flex gap-5 font-satoshi text-[16px]">
              <li className="flex gap-2 items-center">
                <span>Shop</span> <ChevronDown size={16} />
              </li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className="px-4 py-3 flex gap-3 bg-[#F0F0F0] rounded-[62px]">
            <div className="text-black opacity-[0.4]">
              <Search />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search For Products..."
                className="border-none text-[16px] bg-transparent font-satoshi focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3.5">
          <ShoppingCart />
          <CircleUserRound />
        </div>
      </div>
    </div>
  );
};

export default Header;
