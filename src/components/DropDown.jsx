import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export const DropDownTypes = {
      selectBox: "selectBox",
      link: "link",
};
const Dropdown = ({ title, options, type = DropDownTypes.link }) => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleDropdown = () => {
            setIsOpen((prev) => !prev);
      };

      return (
            <div className="transition-height duration-100 ease-out ">
                  <div className="flex justify-between items-center">
                        <button
                              className="text-xl font-bold uppercase"
                              onClick={toggleDropdown}
                              aria-expanded={isOpen ? "true" : "false"}
                        >
                              {title}
                        </button>
                        {isOpen ? (
                              <IoChevronUpOutline
                                    onClick={toggleDropdown}
                                    size={20}
                              />
                        ) : (
                              <IoChevronDownOutline
                                    onClick={toggleDropdown}
                                    size={20}
                              />
                        )}
                  </div>
                  {type === DropDownTypes.selectBox ? (
                        <span className="text-lg font-normal uppercase">
                              all
                        </span>
                  ) : null}
                  {isOpen && (
                        <div
                              className="dropdown-menu flex flex-col"
                              aria-labelledby="dropdownMenuButton"
                        >
                              {type === DropDownTypes.selectBox ? (
                                    <div className="flex  flex-col gap-4">
                                          {options.map((option, index) => (
                                                <div
                                                      key={index}
                                                      className="flex  items-center"
                                                >
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
                                                            <p className="text-lg text-gray-500 uppercase font-bold dark:text-gray-800 px-2">
                                                                  {option.label}
                                                            </p>
                                                      </label>
                                                </div>
                                          ))}
                                    </div>
                              ) : (
                                    options.map((option, index) => (
                                          <a
                                                key={index}
                                                className="mt-4 cursor-pointer "
                                                href={option.href}
                                          >
                                                {option.label}
                                          </a>
                                    ))
                              )}
                        </div>
                  )}
            </div>
      );
};

export default Dropdown;
