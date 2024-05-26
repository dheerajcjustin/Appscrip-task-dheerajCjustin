import Image from "next/image";
import React from "react";
import { GoHeart } from "react-icons/go";

const ProductItem = ({ id, title, price, image }) => {
      return (
            <div class="p-1  bg-white border border-gray-200 rounded-lg shadow ">
                  <div className="w-[300px] h-[462px] ">
                        <div className=" w-[300px] h-[399px]">
                              <Image
                                    src={image}
                                    alt={`Image of ${title}`}
                                    width={300}
                                    height={399}
                                    className="object-fill w-[300px] h-[399px] "
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
                              <GoHeart className="text-2xl font-bold" />
                        </div>
                  </div>
            </div>
      );
};

export default ProductItem;
