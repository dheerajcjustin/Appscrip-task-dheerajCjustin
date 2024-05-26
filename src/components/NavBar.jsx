import React from "react";
import { GoHeart, GoSearch } from "react-icons/go";
import { IoBagOutline, IoChevronDownOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

const NavBar = () => {
      return (
            <div className="w-full h-20  flex justify-center md:border-gray-300 md:border-b-0 border-b-2 ">
                  <div className="grid grid-cols-3  w-[95%] md:w-[90%]   items-center ">
                        <div className="flex items-center">
                              <Image
                                    width={0}
                                    height={0}
                                    loading="lazy"
                                    src="/logos/logo.svg"
                                    alt="logo of Appscrip"
                                    className="shrink-0 w-8 aspect-square cursor-pointer"
                              />
                              <FiMenu className="text-3xl block md:hidden " />
                        </div>

                        <div className="font-bold text-2xl md:text-4xl text-center">
                              LOGO
                        </div>
                        <div className="flex justify-end text-2xl md:text-4xl font-bold gap-4 text-myDark">
                              <GoSearch />
                              <GoHeart />
                              <IoBagOutline />
                              <CiUser className="md:block hidden" />
                              <p className=" text-xl items-center md:flex hidden">
                                    ENG <IoChevronDownOutline />
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default NavBar;
