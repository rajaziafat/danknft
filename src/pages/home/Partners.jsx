const Partners = () => {
  return (
    <section className="wrapper mt-[60px]">
      <div className="contain flex-col justify-start items-start sm:items-center gap-5">
        <h2 className="title">
          Partnerships <br className="sm:hidden" /> (Coming Soon)
        </h2>
        {/* <div className="w-full lg:flex-row flex-col gap-10 flex justify-between items-center">
          <div className="flex justify-start items-start flex-col gap-2 sm:gap-8">
            <div>
              <h2 className="title">$PEPE</h2>
              <p className="text-white text-lg md:text-2xl font-semibold">
                the most memeable memecoin in existence. The dogs have had their
                day, it’s time for Pepe to take reign.
              </p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <a href="#" target="blank">
                <img
                  src="/twitter-big.webp"
                  className="object-contain w-10 sm:w-20 h-20"
                  alt=""
                />
              </a>
              <a href="#" target="blank">
                <img
                  src="/telegram-big.webp"
                  className="object-contain w-10 sm:w-20 h-20"
                  alt=""
                />
              </a>
              <a href="#" target="blank">
                <img
                  src="/dex-big.webp"
                  className="object-contain w-10 sm:w-20 h-20"
                  alt=""
                />
              </a>
              <a href="#" target="blank">
                <img
                  src="/etherscan-big.webp"
                  className="object-contain w-10 sm:w-20 h-20"
                  alt=""
                />
              </a>
              <a href="#" target="blank">
                <img
                  src="/cmc.webp"
                  className="object-contain w-10 sm:w-20 h-20"
                  alt=""
                />
              </a>
              <a href="#" target="blank">
                <img
                  src="/uniswap.webp"
                  className="object-contain w-10 sm:w-20 h-20"
                  alt=""
                />
              </a>
            </div>
          </div>
          <img
            src="/partner.webp"
            className="w-full sm:max-w-[476px] object-contain"
            alt=""
          />
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 w-full gap-5">
          <PartnerRow name="uniswap" img="/uniswap.webp"  />
          <PartnerRow name="mexc" img="/part2.webp"  />
          <PartnerRow name="gate.io" img="/part3.webp" />
          <PartnerRow name="huobi" img="/part4.webp" />
          <PartnerRow name="poloniex" img="/part5.webp"  />
          <PartnerRow name="okx dex" img="/part6.webp"  />
          <PartnerRow name="Ibank" img="/part7.webp"  />
          <PartnerRow name="bingx" img="/part8.webp"  />
          <PartnerRow name="trustwallet" img="/part9.webp"  />
          <PartnerRow name="digifinex" img="/part10.webp"  />
          <PartnerRow name="btcex" img="/part11.webp"  />
          <PartnerRow name="dextools" img="/dex-big.webp" />
          <PartnerRow name="coinmarketcap" img="/cmc.webp"  />
          <PartnerRow name="coingecko" img="/gecko.webp"  />
        </div>
      </div>
    </section>
  );
};

export default Partners;

const PartnerRow = ({ name, img, url }) => {
  return (
    <a
      href={url}
      target="blank"
      className="flex px-4 h-[65px] justify-between items-center w-full hover:bg-white hover:bg-opacity-30 transition-all duration-300 gap-2 rounded-full border border-solid border-white"
    >
      <p className="text-white leading-[1] pt-1 text-2xl font-semibold">
        {name}
      </p>
      <img src={img} className="h-[29px] object-contain" alt="" />
    </a>
  );
};
