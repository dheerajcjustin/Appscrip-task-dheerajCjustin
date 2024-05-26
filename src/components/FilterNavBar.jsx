import React from "react";
import {
      IoChevronBackOutline,
      IoChevronDownOutline,
      IoChevronForwardOutline,
} from "react-icons/io5";
import HoverSelect from "./HoverSelect";

const FilterNavBar = ({ sidBarOpen, toggleSideBar }) => {
      return (
            <div className=" flex justify-evenly md:justify-between items-center  py-8  border-y-2 border-gray-300 ">
                  <div className="md:flex hidden items-center gap-10">
                        <span className="text-lg md:text-xl ">3425 ITEMS</span>
                        <button
                              className="flex items-center text-sm  md:text-lg text-gray-400 uppercase"
                              onClick={toggleSideBar}
                        >
                              {sidBarOpen ? (
                                    <>
                                          <IoChevronBackOutline /> hide Filters
                                    </>
                              ) : (
                                    <>
                                          <IoChevronForwardOutline /> Show
                                          Filter
                                    </>
                              )}
                        </button>
                  </div>
                  <button
                        className="text-black font-bold md:hidden block   uppercase"
                        type="button"
                        onClick={toggleSideBar}
                  >
                        filter
                  </button>
                  <div className=" md:hidden block  text-gray-600">|</div>

                  <div className=" text-lg md:text-xl">
                        <HoverSelect />
                  </div>
            </div>
      );
};

export default FilterNavBar;
