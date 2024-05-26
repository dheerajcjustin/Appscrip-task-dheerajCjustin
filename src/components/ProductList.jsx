"use client";
import React, { useState } from "react";
import ProductItem from "./ProductItem";
import FilterNavBar from "./FilterNavBar";
import FilterSideBar from "./FilterSideBar";

const ProductList = ({ products }) => {
      const [isSideBarOpen, setIsSideBarOpen] = useState(true);

      const toggleSideBar = () => {
            setIsSideBarOpen((prev) => !prev);
      };

      return (
            <div className=" ">
                  <FilterNavBar
                        sidBarOpen={isSideBarOpen}
                        toggleSideBar={toggleSideBar}
                  />
                  <div className="flex mt-7">
                        <FilterSideBar
                              sidBarOpen={isSideBarOpen}
                              toggleSideBar={toggleSideBar}
                        ></FilterSideBar>
                        <div
                              className={`w-full ${
                                    isSideBarOpen ? "hidden md:block" : "block"
                              } `}
                        >
                              <div className="flex  flex-wrap justify-around">
                                    {products.map(
                                          ({ id, title, price, image }) => (
                                                <ProductItem
                                                      key={id}
                                                      id={id}
                                                      title={title}
                                                      price={price}
                                                      image={image}
                                                />
                                          )
                                    )}
                              </div>
                              \
                        </div>
                  </div>
            </div>
      );
};

export default ProductList;
