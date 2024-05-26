"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import ContactInfo from "./Footer/ContactInfo";
import SiteMap from "./Footer/SiteMap";
import QuickLinks from "./Footer/QickLins";
import SocialsAndPayments from "./Footer/SocialsAndPayments";

const FormComponent = ({ id, label, placeholder, buttonText }) => (
      <form className="flex gap-4 mt-10 text-lg max-md:flex-wrap max-md:mt-8 max-md:max-w-full">
            <label htmlFor={id} className="sr-only">
                  {label}
            </label>
            <div className=" flex flex-wrap gap-4 max-md:flex-nowrap">
                  <input
                        type="email"
                        id={id}
                        placeholder={placeholder}
                        aria-label={label}
                        className="h-12 grow px-6 py-4 bg-white text-neutral-300 w-96 max-md:px-5 max-md:w-48"
                  />
                  <button
                        type="submit"
                        className="flex items-center h-12 px-12 py-4 font-medium text-white uppercase  bg-black rounded-md border border-white border-solid  max-md:px-5 max-md:py-2.5 max-md:text-lg"
                  >
                        {buttonText}
                  </button>
            </div>
      </form>
);

export default function Footer() {
      return (
            <div className="flex flex-col items-center px-20 md:pt-10 pt-5 pb-4 w-full bg-black max-md:px-5 max-md:max-w-full">
                  <div className="w-full max-w-[1248px] max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                              <section className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                                          <h1 className="text-lg font-bold text-white uppercase max-md:max-w-full">
                                                Be the first to know
                                          </h1>
                                          <p className="mt-8 text-base text-white max-md:max-w-full">
                                                Sign up for updates from mettā
                                                muse.
                                          </p>
                                          <FormComponent
                                                id="emailInput"
                                                label="Enter your email"
                                                placeholder="Enter your e-mail..."
                                                buttonText="Subscribe"
                                          />
                                          <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />
                                    </div>
                              </section>

                              <ContactInfo />
                        </div>
                  </div>
                  <hr className=" shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />
                  <div className="mt-5 w-full max-w-[1248px] md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                              <nav className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                                    <SiteMap />
                                    <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />
                              </nav>
                              <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                                    <div className="grow max-md:mt-7 max-md:max-w-full">
                                          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                                <QuickLinks />
                                                <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />

                                                <SocialsAndPayments />
                                                <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <p className="sm:block md:hidden mt-4 text-sm text-center md:mt-4">
                        Copyright © 2023 mettamuse. All rights reserved.
                  </p>
            </div>
      );
}
