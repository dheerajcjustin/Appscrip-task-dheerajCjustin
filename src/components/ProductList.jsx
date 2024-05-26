import React from "react";
import ProductItem from "./ProductItem";
import FilterNavBar from "./FilterNavBar";
import FilterSideBar from "./FilterSideBar";

async function getData() {
      try {
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            return products;
      } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
      }
}

const ProductList = async () => {
      const products = await getData();
      console.log(products);
      return (
            <div className=" ">
                  <FilterNavBar />
                  <div className=" my-7 flex ">
                        <FilterSideBar></FilterSideBar>
                        <div className="w-full">
                              <div className="flex md:gap-4 gap-2  flex-wrap justify-center">
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
