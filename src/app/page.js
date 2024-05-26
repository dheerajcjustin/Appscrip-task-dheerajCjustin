import FilterNavBar from "@/components/FilterNavBar";
import HomeDiscover from "@/components/HomeDiscover";
import ProductList from "@/components/ProductList";
import Image from "next/image";

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

export default async function Home() {
      const products = await getData();
      return (
            <main className=" md:w-[90%] w-full  mx-auto ">
                  <HomeDiscover />
                  <ProductList products={products} />
            </main>
      );
}
