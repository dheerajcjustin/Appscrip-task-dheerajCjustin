import Image from "next/image";
import React from "react";

const TopBar = () => {
      return (
            <div className="w-full h-8 bg-black flex justify-around text-myRed items-center">
                  <div className="text-center text-xs md:block hidden">
                        <p className="flex gap-1">
                              <Image
                                    alt="grid logo"
                                    src={"/logos/boxs.svg"}
                                    height={10}
                                    width={10}
                              />{" "}
                              Lorem ipsum dolor
                        </p>
                  </div>
                  <div className=" text-center text-xs  md:block hidden">
                        <p className="flex gap-1">
                              <Image
                                    alt="grid logo"
                                    src={"/logos/boxs.svg"}
                                    height={10}
                                    width={10}
                              />{" "}
                              Lorem ipsum dolor
                        </p>
                  </div>
                  <div className="text-center text-xs">
                        <p className="flex gap-1">
                              <Image
                                    alt="grid logo"
                                    src={"/logos/boxs.svg"}
                                    height={10}
                                    width={10}
                              />{" "}
                              Lorem ipsum dolor
                        </p>
                  </div>
            </div>
      );
};

export default TopBar;
