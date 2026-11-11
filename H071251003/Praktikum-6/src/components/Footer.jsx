const Footer = () => {
  const authorName = 'St. Asma Ashikah H.';
  const currentYear = 2026;

  return (
    <footer className="bg-black text-white py-8 px-6 text-center border-t-4 border-black">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-extrabold uppercase tracking-wider text-sm sm:text-base text-[#00E5FF]">
          © {currentYear} {authorName}. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <span className="bg-[#FF90E8] text-black font-black text-xs px-3 py-1 border border-white">
            St. Asma Ashikah H.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;