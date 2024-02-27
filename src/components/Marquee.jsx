import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className=" w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300/25 flex whitespace-nowrap text-zinc-100 overflow-hidden gap-10">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
          className='text-[26vw] leading-none uppercase font-semibold font-["Test_Founders_Grotesk_X"] -mb-[3vw] -mt-[5.3vw]'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
          className='text-[26vw] leading-none uppercase font-semibold font-["Test_Founders_Grotesk_X"] -mb-[3vw] -mt-[5.3vw]'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
          className='text-[26vw] leading-none uppercase font-semibold font-["Test_Founders_Grotesk_X"] -mb-[3vw] -mt-[5.3vw]'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
