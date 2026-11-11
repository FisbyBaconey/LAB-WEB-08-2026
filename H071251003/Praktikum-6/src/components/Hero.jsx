const Hero = () => {
  const handleButtonClick = () => {
    console.log("Welcome to my art space! Let's create together.");
  };

  return (
    <section className="bg-[#FFF4E0] border-b-4 border-black px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-4">
          <span className="bg-[#00E5FF] border-2 border-black font-extrabold px-3 py-1 uppercase text-xs tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Digital Illustrator & Concept Artist
          </span>
          <h1 className="text-5xl sm:text-7xl font-black uppercase leading-none tracking-tight text-black drop-shadow-[3px_3px_0px_#FFD700]">
            Halo Semua!
          </h1>
          <p className="text-lg font-medium border-l-4 border-black pl-4 my-2 text-gray-800">
            Halo! Saya ST. Asma Ashikah H. Biasa buat komik, animasi singkat, konsep OC atau fanart random buat hobi-hobian aja. (anyway, saya buka komisi di ko-fi banh. Cuma 3 dollar aja banh)
          </p>
          <button
            onClick={handleButtonClick}
            className="mt-4 bg-[#FF6B6B] text-white font-black text-lg px-8 py-4 border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
          >
            Explore My Work
          </button>
        </div>

        <div className="relative flex justify-center items-center min-h-320px sm:min-h-400px">
          <div className="w-64 h-80 sm:w-80 sm:h-96 border-4 border-black bg-[#23A6F0] p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2deg">
            <img
              src= "/Profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover border-2 border-black"
            />
          </div>
          <div className="absolute bottom-0 right-4 sm:right-0 w-45 sm:w-60 rotate-6deg hover:-rotate-3 hover:-translate-x-2 transition-transform">
            <img
              src= "/Dummy.png"
              alt="Artwork preview"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;