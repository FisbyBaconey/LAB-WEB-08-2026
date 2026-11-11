import skill1 from '../assets/test.png';
import skill2 from '../assets/test.png';
import skill3 from '../assets/test.png';
import skill4 from '../assets/test.png';
import skill5 from '../assets/test.png'; // or replace with another image

const Skills = () => {
  return (
    <section className="bg-[#FFF4E0] border-b-4 border-black py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-black uppercase tracking-tight bg-[#FF90E8] border-3 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
          Skill Saya
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex justify-center items-center py-12">
        {/* Container with negative space to overlap the cards */}
        <div className="flex -space-x-8 sm:-space-x-12 p-6 overflow-x-auto py-15">
          
          {/* CARD 1 */}
          <div
            style={{ zIndex: 1 }}
            className="relative w-52 sm:w-60 h-80 sm:h-92 bg-[#FF90E8] border-4 border-black rounded-[2.5rem] flex flex-col justify-between shrink-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-10 sm:hover:-translate-y-14 hover:z-50! hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer group"
          >
            <div className="relative w-full h-3/5 overflow-hidden">
              <img
                src={skill1}
                alt="Digital Drawing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#FF90E8] opacity-100" />
            </div>
            <div className="relative z-10 p-5 pt-0 flex flex-col justify-end items-center text-center">
              <span className="font-black text-lg sm:text-xl uppercase text-black leading-tight drop-shadow-[1px_1px_0px_#FFF]">
                Digital Drawing
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{ zIndex: 2 }}
            className="relative w-52 sm:w-60 h-80 sm:h-92 bg-[#23A6F0] border-4 border-black rounded-4xl flex flex-col justify-between shrink-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-10 sm:hover:-translate-y-14 hover:z-50! hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer group"
          >
            <div className="relative w-full h-3/5 overflow-hidden">
              <img
                src={skill2}
                alt="Concept Art"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#23A6F0] opacity-100" />
            </div>
            <div className="relative z-10 p-5 pt-0 flex flex-col justify-end items-center text-center">
              <span className="font-black text-lg sm:text-xl uppercase text-black leading-tight drop-shadow-[1px_1px_0px_#FFF]">
                Concept Art
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{ zIndex: 3 }}
            className="relative w-52 sm:w-60 h-80 sm:h-92 bg-[#FFD700] border-4 border-black rounded-[2.5rem] flex flex-col justify-between shrink-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-10 sm:hover:-translate-y-14 hover:z-50! hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer group"
          >
            <div className="relative w-full h-3/5 overflow-hidden">
              <img
                src={skill3}
                alt="UI/UX Design"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#FFD700] opacity-100" />
            </div>
            <div className="relative z-10 p-5 pt-0 flex flex-col justify-end items-center text-center">
              <span className="font-black text-lg sm:text-xl uppercase text-black leading-tight drop-shadow-[1px_1px_0px_#FFF]">
                UI/UX Design
              </span>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            style={{ zIndex: 4 }}
            className="relative w-52 sm:w-60 h-80 sm:h-92 bg-[#00E5FF] border-4 border-black rounded-[2.5rem] flex flex-col justify-between shrink-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-10 sm:hover:-translate-y-14 hover:z-50! hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer group"
          >
            <div className="relative w-full h-3/5 overflow-hidden">
              <img
                src={skill4}
                alt="Character Design"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#00E5FF] opacity-100" />
            </div>
            <div className="relative z-10 p-5 pt-0 flex flex-col justify-end items-center text-center">
              <span className="font-black text-lg sm:text-xl uppercase text-black leading-tight drop-shadow-[1px_1px_0px_#FFF]">
                Character Design
              </span>
            </div>
          </div>

          {/* CARD 5 */}
          <div
            style={{ zIndex: 5 }}
            className="relative w-52 sm:w-60 h-80 sm:h-92 bg-[#A7F3D0] border-4 border-black rounded-[2.5rem] flex flex-col justify-between shrink-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-10 sm:hover:-translate-y-14 hover:z-50! hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer group"
          >
            <div className="relative w-full h-3/5 overflow-hidden">
              <img
                src={skill5}
                alt="React & Tailwind"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#A7F3D0] opacity-100" />
            </div>
            <div className="relative z-10 p-5 pt-0 flex flex-col justify-end items-center text-center">
              <span className="font-black text-lg sm:text-xl uppercase text-black leading-tight drop-shadow-[1px_1px_0px_#FFF]">
                React & Tailwind
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;