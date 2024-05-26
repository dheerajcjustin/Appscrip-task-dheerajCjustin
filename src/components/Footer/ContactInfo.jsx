import Image from "next/image";

const ContactInfo = () => (
      <section className="flex flex-col grow text-base font-bold text-white max-md:mt-10 max-md:max-w-full">
            <h2 className="text-lg uppercase max-md:max-w-full">
                  {"CONTACT US"}
            </h2>
            <div className="flex md:block">
                  <p className="mt-6 max-md:max-w-full text-xs md:text-base">
                        +44 221 133 5360{" "}
                  </p>{" "}
                  <span className="mt-5 md:hidden block ml-2 mr-2">
                        {" "}
                        &#11049;{" "}
                  </span>
                  <p className="mt-6 max-md:max-w-full text-xs md:text-base">
                        customercare@mettamuse.com{" "}
                  </p>
            </div>
            <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />

            <h2 className="mt-8 text-lg uppercase max-md:max-w-full">
                  Currency
            </h2>

            <div className="flex gap-1.5 items-center self-start mt-6 tracking-wider whitespace-nowrap">
                  <Image
                        width={0}
                        height={0}
                        loading="lazy"
                        src="/logos/usa.svg"
                        alt="logo usa flag LOGO"
                        className="shrink-0 self-stretch w-6 aspect-square"
                  />
                  &#11049;
                  <div className="self-stretch my-auto">USD</div>
            </div>
            <p className="mt-5 text-xs max-md:max-w-full md:block hidden">
                  Transactions will be completed in Euros and a currency
                  reference is available on hover.
            </p>
      </section>
);

export default ContactInfo;
