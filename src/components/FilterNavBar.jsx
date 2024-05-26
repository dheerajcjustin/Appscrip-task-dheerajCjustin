import React from "react";
import { IoChevronBackOutline, IoChevronDownOutline } from "react-icons/io5";

const FilterNavBar = () => {
      return (
            <div className=" flex justify-between items-center  py-8  border-y-2 border-gray-300 ">
                  <div className="flex items-center gap-10">
                        <span className="text-lg md:text-xl ">3425 ITEMS</span>
                        <span className="flex items-center text-sm md:text-lg text-gray-400">
                              <IoChevronBackOutline /> hide Filters
                        </span>
                  </div>
                  <div className="flex items-center text-lg md:text-xl">
                        Recommended <IoChevronDownOutline />{" "}
                  </div>
            </div>
      );
};

export default FilterNavBar;
