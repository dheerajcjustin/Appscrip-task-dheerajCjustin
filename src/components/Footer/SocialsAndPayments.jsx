import Image from "next/image";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { paymentMethodsLogos } from "../constants";
import { useState } from "react";

const SocialIcons = () => (
      <div className="flex gap-3 self-start pr-2.5 mt-8">
            <Image
                  width={0}
                  height={0}
                  loading="lazy"
                  src="/logos/Insta.svg"
                  alt="instagram logo"
                  className="shrink-0 w-8 aspect-square cursor-pointer "
            />
            <Image
                  width={0}
                  height={0}
                  loading="lazy"
                  src="/logos/linkedin.svg"
                  alt="linkedIn logo"
                  className="shrink-0 w-8 aspect-square cursor-pointer"
            />
      </div>
);

const PaymentMethods = () => (
      <div className="flex gap-1 md:gap-2 justify-center md:pr-12 mt-6 max-md:flex-wrap max-md:pr-5">
            {paymentMethodsLogos.map((method, index) => (
                  <Image
                        key={index}
                        width={0}
                        height={0}
                        loading="lazy"
                        src={method.src}
                        alt={`${method.alt} logo`}
                        className="shrink-0 w-12 md:w-14 aspect-[1.59] cursor-pointer  duration-300 "
                  />
            ))}
      </div>
);
const SocialsAndPayments = () => {
      const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

      return (
            <section className="flex flex-col max-md:mt-6 max-md:max-w-full">
                  <h2 className="text-xl font-bold text-white uppercase max-md:max-w-full hidden md:block">
                        Follow Us
                  </h2>
                  <div className="flex justify-between items-center  md:hidden">
                        <h2
                              onClick={() =>
                                    setIsSocialDropdownOpen(
                                          !isSocialDropdownOpen
                                    )
                              }
                              className="text-xl font-bold text-white uppercase max-md:max-w-full block md:hidden"
                        >
                              Follow Us
                        </h2>
                        {isSocialDropdownOpen ? (
                              <IoChevronUpOutline
                                    size={20}
                                    onClick={() =>
                                          setIsSocialDropdownOpen(
                                                !isSocialDropdownOpen
                                          )
                                    }
                              />
                        ) : (
                              <IoChevronDownOutline
                                    size={20}
                                    onClick={() =>
                                          setIsSocialDropdownOpen(
                                                !isSocialDropdownOpen
                                          )
                                    }
                              />
                        )}
                  </div>
                  <div className="hidden md:block">
                        <SocialIcons />
                  </div>
                  {isSocialDropdownOpen ? <SocialIcons /> : ""}
                  <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />

                  <h2 className="mt-16 text-lg font-bold text-white uppercase max-md:mt-10 max-md:max-w-full">
                        mettā muse <span className="uppercase">Accepts</span>
                  </h2>
                  <PaymentMethods />
            </section>
      );
};
export default SocialsAndPayments;
