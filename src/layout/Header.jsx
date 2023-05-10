import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="wrapper bg-primary fixed top-0 left-0 z-50">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="bg-black opacity-70 fixed top-0 lg:hidden block left-0 w-full h-full z-[88]"
        ></div>
      )}
      <div className="contain justify-between items-center gap-2 h-[100px] ">
        <img
          src="/logo.png"
          className="w-[60px] lg:w-[74px] aspect-square h-[64px] lg:h-[74px]"
          alt=""
        />
        <nav
          className={`flex lg:justify-center lg:items-center gap-5 xl:gap-[30px] ${
            headerToggle ? "right-0" : "-right-full"
          } lg:static fixed top-0  lg:flex-row flex-col justify-start items-center sm:items-start px-[3rem] pt-[6rem] pb-[3rem] lg:p-0 w-full h-full bg-primary sm:max-w-[450px] lg:max-w-none lg:bg-transparent lg:w-auto xl:h-auto transition-all duration-700 z-[90]`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            href="#home"
            className="text-white text-xl xl:text-[22px] font-semibold"
          >
            Home
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#about"
            className="text-white text-xl xl:text-[22px] font-semibold"
          >
            About
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#how"
            className="text-white text-xl xl:text-[22px] font-semibold"
          >
            How to Buy
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#tokenomics"
            className="text-white text-xl xl:text-[22px] font-semibold"
          >
            Tokenomics
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#utility"
            className="text-white text-xl xl:text-[22px] font-semibold"
          >
            Utility
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#roadmap"
            className="text-white text-xl xl:text-[22px] font-semibold"
          >
            Roadmap
          </a>
        </nav>
        <div className="flex justify-center gap-2">
          <a href="https://twitter.com/dankarmyeth" target="blank">
            <img
              src="/twitter.svg"
              className=" w-[35px] hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/dankarmyeth" target="blank">
            <img
              src="/fb.webp"
              className="  w-[35px]  hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <a href="https://t.me/dankarmyeth" target="blank">
            <img
              src="/telegram.svg"
              className=" w-[35px] hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x9161abeed49e018cba2a0e6277d7e4c01342e9b3"
            target="blank"
          >
            <img
              src="/dex.svg"
              className=" w-[35px] hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <a
            href="https://etherscan.io/token/0x8d3625fe177bb0d4c825246dea821f14068e34e3"
            target="blank"
          >
            <img
              src="/medium.svg"
              className=" w-[35px] hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <a
            href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8d3625fe177bb0d4c825246dea821f14068e34e3"
            target="blank"
          >
            <img
              src="/uniswap.webp"
              className=" w-[35px] hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <button
            onClick={() => setHeaderToggle((prev) => !prev)}
            className="lg:hidden ml-5 block relative z-[91] text-white"
          >
            {headerToggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
