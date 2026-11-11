const About = () => {
  const bioData = [
    { id: 1, label: 'Full Name', value: 'St. Asma Ashikah H.' },
    { id: 2, label: 'Location', value: 'Makassar, Indonesia' },
    { id: 3, label: 'Talent', value: 'Indie Ilustrations, Animation & Comics' },
    { id: 4, label: 'Tools', value: 'Photoshop, DaVinvci & React' },
  ];

  return (
    <section className="bg-[#A7F3D0] border-b-4 border-black py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-black uppercase tracking-tight bg-white inline-block border-3 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          About Me
        </h2>
        <p className="mt-6 text-lg font-medium text-gray-900 leading-relaxed max-w-2xl mx-auto bg-white border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          I am a passionate digital artist and front-end developer based in Indonesia. I love blending traditional graphic art styles with modern web interactive design to create memorable digital experiences.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {bioData.map((item) => (
          <div
            key={item.id}
            className="bg-white border-3 border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center"
          >
            <span className="font-black uppercase text-sm text-[#FF6B6B]">
              {item.label}:
            </span>
            <span className="font-bold text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;