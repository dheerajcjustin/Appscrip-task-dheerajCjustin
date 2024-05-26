import React from "react";

const UnderLineText = ({ children, colorFrom, colorTo, label }) => {
      return (
            <div className="group text-dracula font-bold text-2xl relative uppercase">
                  {/* <div className=" transition-width ease-linear group-hover:w-full absolute w-0 bg-white h-0.5 top-0  left-0" /> */}
                  {/* <div className=" transition-height ease-linear group-hover:h-full absolute h-0 bg-white w-0.5 bottom-0  left-0" /> */}
                  {/* <div className=" absolute top-1/2 translate-y-1/2"></div> */}
                  {children}
                  {/* <div className="transition-height ease-linear group-hover:h-full absolute h-0 bg-white w-0.5 top-0  right-0" /> */}
                  <div className=" transition-width duration-200 ease-linear group-hover:w-full absolute w-0 bg-black h-0.5 bottom-0      left-0" />
            </div>
      );
};

export default UnderLineText;
