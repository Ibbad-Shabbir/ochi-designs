import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[2px] border-zinc-300 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardContainer relative w-1/2 h-[80vh] rounded-3xl ">
          <h1 className="absolute z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-['Test_Founders_Grotesk_X'] text-[10vw] text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="image"
              />
            </div>
          </div>
          <div className="relative cardContainer w-1/2 h-[80vh] rounded-3xl">
            <h1 className="absolute z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-['Test_Founders_Grotesk_X'] text-[10vw] text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
