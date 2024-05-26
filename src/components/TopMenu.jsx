import React from "react";
import UnderLineText from "./UnderLineText";

const TopMenu = () => {
      return (
            <div className="md:flex w-full hidden justify-center   py-5 border-gray-300 border-b-2">
                  <div className="flex gap-8">
                        <UnderLineText>Shop</UnderLineText>
                        <UnderLineText>Skills</UnderLineText>
                        <UnderLineText>Stories</UnderLineText>
                        <UnderLineText>About</UnderLineText>
                        <UnderLineText>Contact Us</UnderLineText>
                  </div>
            </div>
      );
};

export default TopMenu;
