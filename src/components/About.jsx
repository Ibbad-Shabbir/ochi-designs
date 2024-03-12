import photo from "../assets/images/photo.jpg";

function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.1"
      className="w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl"
    >
      <h1 className='text-[3vw] pt-20 font-normal leading-tight w-[80%] text-zinc-800 font-["Neue_Montreal"]'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-zinc-900/25">
        <div className="w-1/2">
          <h1 className="text-7xl font-['Neue_Montreal']">Our approach:</h1>
          <button className="px-10 py-6 gap-10 bg-zinc-800 rounded-full text-zinc-300 mt-10 flex uppercase font-['Neue_Montreal'] items-center font-medium">
            Read More
            <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <img
          src={photo}
          alt="homepage_photo"
          className="w-1/2 h-[70vh] rounded-3xl"
        />
      </div>
    </div>
  );
}

export default About;
