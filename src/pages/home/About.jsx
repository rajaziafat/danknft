const About = () => {
  return (
    <section
      id="about"
      className="wrapper pb-[50px] mt- sm:pb-[100px]  mt-[100px] "
    >
      <div className="contain xl:flex-row flex-col  justify-center items-center w-full gap-14">
        <img
          src="/about.png"
          className="w-full  sm:max-w-[550px] object-contain"
          alt=""
        />
        <div className="flex justify-start items-start flex-col gap-8 w-full">
          <h2 className="title">About</h2>
          <p className="text-white text-lg md:text-2xl font-semibold">
            Dank was recruited to help $Pepe take back what was originally his,
            which is the meme community. <br /> <br></br> The Inu’s have had their day.
            It’s time for the Dank Army to help Pepe to take his reign as king
            of the memes.
          </p>
          <p className="text-white text-lg md:text-2xl font-semibold">
            Stealth launch with zero taxes, great utility, and contract
            renounced. $DANK is building the strongest meme army in the world!!!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
