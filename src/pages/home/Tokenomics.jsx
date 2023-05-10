const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="wrapper  py-[50px] sm:py-[100px] bg-darkBg"
    >
      <div className="contain lg:flex-row flex-col justify-between relative gap-10 items-center">
        <div className="flex justify-start lg:w-auto w-full flex-col gap-10">
          <div>
            <h2 className="title">TOKENOMICS</h2>
            <p className="text-xl sm:text-[30px] font-semibold text-white mt-4">
              Token Supply: 1,000,000,000,000
            </p>
          </div>
          <p className="text-xl sm:text-[30px]  font-semibold text-primary max-w-[460px]  ">
            ZERO Taxes ZERO bullshit. Just Straight DANK!
          </p>
          <div className="flex justify-start items-start flex-col gap-8 sm:mt-4">
            <div className="flex justify-start items-center gap-4">
              <div className="bg-babyPink w-[54px] h-5"></div>
              <p className="text-lg sm:text-2xl font-bold text-white">
                Liquidity/Presale : 75%
              </p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-primary w-[54px] h-5"></div>
              <p className="text-lg sm:text-2xl font-bold text-white">
                Team - 5%
              </p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-[#F48800] w-[54px] h-5"></div>
              <p className="text-lg sm:text-2xl font-bold text-white">
                Marketing - 5%
              </p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-[#E42A2A] w-[54px] h-5"></div>
              <p className="text-lg sm:text-2xl font-bold text-white">
                Airdrops/Contest - 5%
              </p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-[#289F83] w-[54px] h-5"></div>
              <p className="text-lg sm:text-2xl font-bold text-white">
                CEX - 5%
              </p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="bg-[#4356FF] w-[54px] h-5"></div>
              <p className="text-lg sm:text-2xl font-bold text-white">
                Ecosystem - 5%
              </p>
            </div>
          </div>
        </div>
        <img
          src="/chart.png"
          className="max-w-[500px] xl:max-w-[685px] w-full object-contain lg:absolute right-0"
          alt=""
        />
      </div>
    </section>
  );
};

export default Tokenomics;
