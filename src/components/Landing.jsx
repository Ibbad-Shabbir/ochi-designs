import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.6"
      className="w-full h-screen bg-slate-100 pt-1"
    >
      <div className="textStructure mt-52 px-20">
        {["We Create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] h-[5.7vw] -top-[0.2vw] relative bg-slate-400 rounded-md"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[9vw] leading-[7vw] font-['Test_Founders_Grotesk_X']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-slate-400 mt-20 flex justify-between items-center py-5 px-20 text-xl font-['Neue_Montreal']">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex gap-2 items-center">
          <div className="px-5 py-2 border-[1px] border-slate-500 font-light rounded-full uppercase">
            Start the project
          </div>
          <div className="h-12 w-12 rounded-full border-[1px] border-slate-500 flex items-center justify-center text-[24px]">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
