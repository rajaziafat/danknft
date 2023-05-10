const Hero = () => {
  return (
    <section
      id="home"
      className="wrapper pt-[140px] xl:min-h-[650px]  xl:h-screen"
    >
      <div className="contain flex-col justify-center items-center gap-5">
        <h2 className="text-center uppercase  text-[28px] sm:text-[35px] lg:text-[42px] text-white font-bold">
          Dank is here to help grow the meme army{" "}
        </h2>
        <div className="flex xl:flex-row flex-col justify-between  items-center w-full gap-8">
          <div className="flex justify-start xl:max-w-[580px] items-center text-center xl:text-left  xl:items-start flex-col gap-5 ">
            <h3 className="text-primary uppercase text-2xl sm:text-3xl  font-bold">
              Let's conquer the dog coins for good
            </h3>
            <p className="text-lg md:text-xl font-bold text-white">
              We are the original meme
            </p>
            <p className="text-lg md:text-xl font-bold text-white">
              Launched with zero taxes
            </p>
            <p className="text-lg md:text-xl font-bold text-white">
              Clean BS free contract
            </p>
            <p className="text-lg md:text-xl font-bold text-white">
              $DANK is the perfect coin for all meme lovers worldwide.
            </p>
            <a
              href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8d3625fe177bb0d4c825246dea821f14068e34e3"
              target="blank"
              className="bg-babyPink text-white text-xl  font-bold rounded-full w-full md:w-[250px] h-[60px]  flex justify-center items-center gap-4 "
            >
              Buy Now{" "}
              <svg
                width="46"
                height="22"
                className="max-w-[30px]"
                viewBox="0 0 46 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.4148 22L32.9449 19.3417L39.2078 12.8333H0V9.16667H39.2078L32.9449 2.65833L35.4148 0L46 11L35.4148 22Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <img
            className="w-full max-w-[480px]  object-contain"
            src="/hero-img.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
