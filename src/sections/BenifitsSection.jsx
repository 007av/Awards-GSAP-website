import React from "react";
import ClippathTitle from "../components/ClippathTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenifitsSection = () => {

    useGSAP(()=>{

        const reveltl = gsap.timeline({
            delay: 2,
            scrollTrigger: {
                trigger:".benefit-section",
                scrub: 1.5,
                start:" top 60%",
                end: "top top",

            }
        });

        reveltl.to(".benefit-section .first-title", {
            duration:1.5,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        })
        .to(".benefit-section .second-title", {
            duration:1.5,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        })
        .to(".benefit-section .third-title", {
            duration:1.5,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        })
        .to(".benefit-section .fourth-title", {
            duration:1.5,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.out"
        })
    })




  return (
    <section className="benefit-section ">
      <div className=" container mx-auto pt-20">
        <div className=" col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>

          <div className=" mt-20 col-center">
            <ClippathTitle
              title={"Shelf stable"}
              bg={"#C88E64"}
              color={"#faeade"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClippathTitle
              title={"Protein + Caffeine"}
              bg={"#faeade"}
              color={"#222123"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClippathTitle
              title={"Infinitely recyclable"}
              bg={"#7f3b2d"}
              color={"#faeade"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClippathTitle
              title={"Lactose free"}
              bg={"#fed775"}
              color={"#232d2f"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className=" md:mt-0 mt-10">
            <p>And much more..</p>
          </div>
        </div>
      </div>

      <div className=" relative overlay-box">
        <VideoPinSection/>

      </div>
    </section>
  );
};

export default BenifitsSection;
