const Utility = () => {
  return (
    <section id="utility" className="wrapper mb-20 pt-[50px]">
      <div className="contain flex-col justify-start items-center gap-10">
        <h2 className="title">Utility</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-10">
          <div className="w-full flex justify-start items-center text-center xl:text-left xl:items-start flex-col gap-3">
            <p className="text-white text-lg lg:text-2xl font-semibold">
              MemeSwap a Multichain Dex <br /> Platform (Coming Soon)
            </p>
            <p className="text-white text-lg lg:text-2xl font-semibold">
              We have UniSwap for ETH
            </p>
            <p className="text-white text-lg lg:text-2xl font-semibold">
              We have PancakeSwap for BNB
            </p>
            <p className="text-white text-lg lg:text-2xl font-semibold">
              We have ShibaSwap for SHIB
            </p>
            <p className="text-white text-lg lg:text-2xl font-semibold">
              And now we have MemeSwap for the Whole Meme Community
            </p>
          </div>
          <img
            src="/form.jpg"
            className="w-full self-center justify-self-center max-w-[600px] object-contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Utility;

{
  /* <div className="w-full flex justify-start items-start flex-col gap-4">
<div>
  <h3 className="text-white text-2xl font-semibold">Trade</h3>
  <p className="text-lg font-medium text-white font-varela">
    1 SUSHI<span className="font-normal">($1.03361)</span> =
    0.0005482 ETH<span className="font-normal">($1.03361)</span>
  </p>
</div>
<div className="flex justify-start items-start flex-col gap-4 relative w-full">
  <div className="flex justify-start items-start flex-col gap-5 w-full bg-black bg-opacity-60 px-5 py-5 rounded-xl">
    <div className="flex justify-between items-center w-full gap-4">
      <input
        type="text"
        className="w-full text-white placeholder:text-white text-2xl border-none outline-none bg-transparent"
        placeholder="0"
      />
      <div className="relative">
        <button className="flex justify-between items-center gap-3 px-3 py-2 border-primary border-solid border rounded text-white">
          <div className="flex justify-start items-center gap-2">
            <img
              src="/ethereum.svg"
              className="object-contain w-4"
              alt=""
            />
            <p className="font-varela">ETH</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="flex justify-between items-center w-full gap-4">
      <p className="font-varela text-white text-lg">$0.00</p>
      <div className="flex justify-center items-center gap-2">
        <img
          src="/wallet.svg"
          className="w-4 object-contain"
          alt=""
        />
        <p className="font-varela text-white text-lg">$0.00</p>
      </div>
    </div>
  </div>
  <button className="rounded-full border border-solid border-primary w-12 h-12 bg-darkBg absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-full z-20 text-primary flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  </button>
  <div className="flex justify-start items-start flex-col gap-5 w-full bg-black bg-opacity-60 px-5 py-5 rounded-xl">
    <div className="flex justify-between items-center w-full gap-4">
      <input
        type="text"
        className="w-full text-white placeholder:text-white text-2xl border-none outline-none bg-transparent"
        placeholder="0"
      />
      <div className="relative">
        <button className="flex justify-between items-center gap-3 px-3 py-2 border-primary border-solid border rounded text-white">
          <div className="flex justify-start items-center gap-2">
            <img
              src="/ethereum.svg"
              className="object-contain w-4"
              alt=""
            />
            <p className="font-varela">Sushi</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="flex justify-between items-center w-full gap-4">
      <p className="font-varela text-white text-lg">$0.00</p>
      <div className="flex justify-center items-center gap-2">
        <img
          src="/wallet.svg"
          className="w-4 object-contain"
          alt=""
        />
        <p className="font-varela text-white text-lg">$0.00</p>
      </div>
    </div>
  </div>
  <button className="bg-primary w-full h-[60px] hover:bg-transparent border-2 border-solid border-primary transition-all duration-300 text-white rounded-lg text-xl">
    Connect Wallet
  </button>
</div>
</div> */
}
