import art1 from '../assets/ilustration.png';
import art2 from '../assets/conceptArt.png';
import art3 from '../assets/potrait.png';
import art4 from '../assets/pixelArt.png';

const Gallery = () => {
  const galleryItems = [
    { id: 1, title: 'Sunny and Friends', src: art1, tag: 'Illustration' },
    { id: 2, title: 'Lion-Flower', src: art2, tag: 'Concept Art' },
    { id: 3, title: 'Retro Poster', src: art3, tag: 'Graphic Design' },
    { id: 4, title: 'So bluee', src: art4, tag: 'Pixel Art' },
  ];

  return (
    <section className="bg-[#F4E8C1] border-b-4 border-black py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-black uppercase bg-[#23A6F0] text-white border-3 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
          Art Gallery
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {galleryItems.map((foto) => (
          <div
            key={foto.id}
            className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform [image-rendering: pixelated]">
            <div className="border-2 border-black  overflow-hidden mb-4 bg-gray-100">
              <img
                src={foto.src}
                alt={foto.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-black text-xl uppercase">{foto.title}</h3>
              <span className="bg-[#FF90E8] border border-black font-bold text-xs px-2 py-1 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                {foto.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;