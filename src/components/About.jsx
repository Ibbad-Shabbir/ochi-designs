import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl">
      <h1 className='text-[3vw] pt-20 font-normal leading-tight w-[80%] text-zinc-800 font-["Neue_Montreal"]'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] pt-10 mt-20 border-zinc-900/25">
        <div className="w-1/2">
            <h1 className="text-8xl">Our Approach</h1>
            <button className="px-10 py-6 bg-zinc-900 rounded-full text-zinc-300">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
