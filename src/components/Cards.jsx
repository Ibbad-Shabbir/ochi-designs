import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center gap-5 px-20">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full bg-[#004D43] flex items-center justify-center rounded-2xl">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="logo"
          />
          <button className='absolute px-5 py-1 border-[1.5px] border-[#CDEA67] rounded-full left-10 bottom-10 text-[#CDEA67] font-[550] font-["Neue_Montreal"]'>
            &copy;2019-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="relative card w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center ">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="logo" />
            <button className='absolute px-5 py-1 border-[1.5px] border-zinc-100 rounded-full left-10 bottom-10 text-zinc-100 font-[550] font-["Neue_Montreal"] uppercase'>rating 5.0 on clutch</button>
        </div>
        <div className="relative card w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center ">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="logo" />
            <button className='absolute px-5 py-1 border-[1.5px] border-zinc-100 rounded-full left-10 bottom-10 text-zinc-100 font-[550] font-["Neue_Montreal"] uppercase'>business bootcamp alumni</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
