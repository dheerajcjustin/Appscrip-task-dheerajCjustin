import FilterNavBar from "@/components/FilterNavBar";
import HomeDiscover from "@/components/HomeDiscover";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
      return (
            <main className=" md:w-[90%] w-full  mx-auto ">
                  <HomeDiscover />
                  <ProductList />
            </main>
      );
}
