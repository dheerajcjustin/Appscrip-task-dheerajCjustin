import { quickLinks } from "../constants";
import Dropdown from "../DropDown";

const { useState } = require("react");

const QuickLinks = () => {
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      return (
            <section className="flex flex-col grow text-lg text-white ">
                  <div className="md:mt-0 md:flex-grow md:flex md:flex-col hidden">
                        <h2 className="text-xl font-bold uppercase">
                              Quick Links
                        </h2>
                        {quickLinks.map((data, index) => (
                              <a
                                    key={index}
                                    href={data.href}
                                    className={`md:mt-4 cursor-pointer `}
                              >
                                    {data.label}
                              </a>
                        ))}
                        <p className="md:block hidden mt-auto text-sm text-center md:mt-4">
                              Copyright © 2023 mettamuse. All rights reserved.
                        </p>
                  </div>

                  <div
                        className="md:hidden"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                        <Dropdown options={quickLinks} title="Quick Links" />
                  </div>
            </section>
      );
};

export default QuickLinks;
