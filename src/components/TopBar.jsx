import React from "react";

const TopBar = () => {
      return (
            <div className="w-full h-8 bg-black flex justify-around text-myRed items-center">
                  <div className="text-center text-xs md:block hidden">
                        <p>🏷️ Lorem ipsum dolor</p>
                  </div>
                  <div className="text-center text-xs  md:block hidden">
                        <p>🏷️Lorem ipsum dolor</p>
                  </div>
                  <div className="text-center text-xs">
                        <p>🏷️Lorem ipsum dolor</p>
                  </div>
            </div>
      );
};

export default TopBar;
