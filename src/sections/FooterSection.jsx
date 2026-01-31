import React from "react";

const FooterSection = () => {
  return (
    <section className="footer-section ">
      <img
        src="/images/footer-dip.png"
        alt=""
        className=" w-full object-cover -translate-y-1"
      />

      <div className=" relative 2xl:h-[110dvh] md:pt-[20vh] pt-[10vh]">
        <div className=" overflow-hidden z-10">
          <h1 className="general-title text-center py-5 text-milk">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        <video
          src="/videos/splash.mp4"
          muted
          playsInline
          autoPlay
          className=" absolute top-0 object-contain mix-blend-lighten"
        ></video>

        <div className=" flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="/images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="/images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="/images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className=" mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
            <div className=" flex items-center md:gap-16 gap-5">
                <div>
                    <p>SPYLT Flavors</p>
                </div>
                <div>
                    <p>Chug Club</p>
                    <p>Student Marketing</p>
                    <p>Dairy DealersDairy Dealers</p>
                </div>
                <div>
                    <p>Company</p>
                    <p>Contacts</p>
                    <p>Tasty Talk</p>
                </div>
            </div>

            <div className=" md:max-w-lg">
                <p>Get Exclusive Early Access and
                     Stay Informed About Product Updates, Events, and More!</p>

            </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
