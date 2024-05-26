import { useState } from "react";
import { sitemapLinks } from "../constants";
import Dropdown from "../DropDown";

const SiteMap = () => {
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);

      return (
            <section className="flex flex-col grow text-lg text-white max-md:mt-6">
                  <div className="md:mt-0 md:flex-grow md:flex md:flex-col hidden">
                        <h2 className="text-xl font-bold uppercase">
                              mettā muse
                        </h2>
                        {sitemapLinks.map((data, index) => (
                              <a
                                    key={index}
                                    href={data.href}
                                    className={`md:mt-4 cursor-pointer `}
                              >
                                    {data.label}
                              </a>
                        ))}
                  </div>
                  <div
                        className="md:hidden"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                        <Dropdown options={sitemapLinks} title="mettā muse" />
                  </div>
            </section>
      );
};

export default SiteMap;
