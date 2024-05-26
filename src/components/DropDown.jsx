import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const Dropdown = ({ title, options }) => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleDropdown = () => {
            setIsOpen((prev) => !prev);
      };

      return (
            <div className="dropdown">
                  <div
                        className="flex justify-between items-center"
                        onClick={toggleDropdown}
                  >
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
                  {isOpen && (
                        <div
                              className="dropdown-menu flex flex-col"
                              aria-labelledby="dropdownMenuButton"
                        >
                              {options.map((option, index) => (
                                    <a
                                          key={index}
                                          className="mt-4 cursor-pointer transition-transform duration-300 hover:scale-110"
                                          href={option.href}
                                    >
                                          {option.label}
                                    </a>
                              ))}
                        </div>
                  )}
            </div>
      );
};

export default Dropdown;
