import Image from "next/image";
import React from "react";
import { GoHeart } from "react-icons/go";

const ProductItem = ({ id, title, price, image }) => {
      return (
            <div class="p-1  bg-white border border-gray-200 rounded-lg shadow ">
                  <div className="md:w-[300px] w-[160px]  ">
                        <div className="">
                              <Image
                                    src={image}
                                    alt={`Image of ${title}`}
                                    width={300}
                                    height={399}
                                    className="object-fill md:w-[300px] w-[160px] md:h-[400px] h-[240px] "
                              />
                        </div>
                        <div className="text-lg font-bold w-[90%] whitespace-nowrap overflow-hidden text-ellipsis">
                              {title}
                        </div>
                        <div className=" text-sm flex justify-between items-baseline">
                              <span>
                                    <span className="underline"> Sign in </span>
                                    or Create an account to see pricing
                              </span>
                              <GoHeart className="text-2xl font-bold cursor-pointer transition-transform duration-300 hover:text-red-600  hover:scale-110" />
                        </div>
                  </div>
            </div>
      );
};

export default ProductItem;
