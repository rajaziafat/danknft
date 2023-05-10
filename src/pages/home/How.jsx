const How = () => {
  return (
    <section
      id="how"
      className="wrapper pb-[50px] sm:pb-[100px] mt-[80px]  sm:mt-[100px]"
    >
      <div className="contain flex-col justify-center items-center w-full gap-5">
        <h2 className="title mb-6">HOW TO BUY</h2>
        <Row
          img="/create.png"
          title="Create a Wallet"
          desc="   download metamask or your wallet of choice from the app store or
            google play store for free. Desktop users, download the google
            chrome extension by going to metamask.io."
        />
        <Row
          img="/get.png"
          title="Get Some ETH"
          desc="have ETH in your wallet to switch to $DANK. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet."
        />
        <Row
          img="/uni.png"
          title="Go to Uniswap"
          desc="connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $DANK token address into Uniswap, select Dank, and confirm. When Metamask prompts you for a wallet signature, sign."
        />
        <Row
          img="/logo.png"
          title="Switch ETH for $DANK"
          desc="switch ETH for $DANK. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."
        />
      </div>
    </section>
  );
};

export default How;

const Row = ({ img, title, desc }) => {
  return (
    <div className="bg-white bg-opacity-[0.04] border-2 border-solid border-white rounded-tr-[20px] rounded-bl-[20px] flex md:flex-row flex-col justify-start items-center gap-6 md:gap-14 p-5 sm:p-7">
      <img src={img} className={`max-w-[130px] w-full object-contain`} alt="" />
      <div className="flex justify-start items-start flex-col gap-2">
        <h4 className="text-white text-2xl sm:text-[36px] font-bold">
          {title}
        </h4>
        <p className="text-white text-base sm:text-xl md:text-2xl font-varela">
          {desc}
        </p>
      </div>
    </div>
  );
};
