"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const option = [
      "recommended",
      "newest first ",
      "popular",
      "price: high to low",
      "price: low to high",
];

const HoverSelect = () => {
      const dropdownRef = useRef(null);
      const [showDropDown, setShowDropDown] = useState(false);
      const [selectedValue, setSelectedValue] = useState("recommended");

      const handleClickOutside = (event) => {
            if (
                  dropdownRef.current &&
                  !dropdownRef.current.contains(event.target)
            ) {
                  setShowDropDown(false);
            }
      };

      useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                  document.removeEventListener("mousedown", handleClickOutside);
            };
      }, []);
      const toggleDropdown = () => {
            setShowDropDown((prev) => !prev);
      };

      const onSelectChange = (value) => {
            setShowDropDown(false);
            setSelectedValue(value);
      };
      return (
            <div className="relative group " ref={dropdownRef}>
                  <div
                        className="flex items-center text-xl font-medium uppercase"
                        onClick={toggleDropdown}
                  >
                        {selectedValue}

                        <IoChevronDownOutline />
                  </div>
                  <div
                        className={` ${
                              showDropDown ? "block" : " hidden"
                        } absolute  top-10 right-0 w-64 bg-white border border-gray-200 rounded-lg shadow `}
                  >
                        <div className="flex flex-col">
                              {option.map((op) => (
                                    <button
                                          className={` text-end w-full p-4 text-xl flex  justify-end items-center ${
                                                op === selectedValue
                                                      ? "font-semibold"
                                                      : "font-medium"
                                          }  uppercase hover:bg-gray-100`}
                                          key={op}
                                          onClick={() => onSelectChange(op)}
                                    >
                                          {op === selectedValue ? (
                                                <TiTick />
                                          ) : null}
                                          {op}
                                    </button>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default HoverSelect;
