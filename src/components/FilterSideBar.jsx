import React from "react";
import Dropdown, { DropDownTypes } from "./DropDown";

const filterLabels = [
      { label: "mens" },
      { label: "women" },
      { label: "baby & kids" },
];

const category = [
      "idea for",
      "occasion",
      "work",
      "fabric",
      "segment",
      "suitable for",
      "raw materials",
      "pattern",
];

const FilterSideBar = ({ sidBarOpen, toggleSideBar }) => {
      return (
            <div
                  id="drawer-navigation"
                  className={`transition-width duration-300 h-full overflow-hidden self-stretch  ${
                        sidBarOpen ? "md:w-96 w-svw" : "w-0"
                  }`}
                  aria-labelledby="drawer-navigation-label"
            >
                  <div className="flex justify-between items-center p-4">
                        <div className="flex items-center px-8">
                              <input
                                    type="checkbox"
                                    id="customizable"
                                    //   onChange={() => null}
                                    className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                              />
                              <label
                                    htmlFor="customizable"
                                    className="ml-2"
                                    id="drawer-navigation-label"
                              >
                                    <p className="text-lg uppercase font-bold text-dracula px-2">
                                          CUSTOMIZBLE
                                    </p>
                              </label>
                        </div>
                        <button
                              type="button"
                              onClick={toggleSideBar}
                              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                              <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                              >
                                    <path
                                          fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                    ></path>
                              </svg>
                              <span className="sr-only">Close menu</span>
                        </button>
                  </div>
                  {category.map((cat, index) => (
                        <>
                              <div className="w-full h-[0.2px] bg-gray-500  my-7 " />
                              <Dropdown
                                    title={cat}
                                    options={filterLabels}
                                    type={DropDownTypes.selectBox}
                              />
                        </>
                  ))}
            </div>
      );
};

export default FilterSideBar;
