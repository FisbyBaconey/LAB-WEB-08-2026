const Nav = () => {
  const menuItems = ['About', 'Skills', 'Gallery', 'Contact'];

  const handleMenuClick = (menu) => {
    console.log(`Menu clicked: ${menu}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F4E8C1] border-b-4 border-black px-6 py-4 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-2xl font-black uppercase tracking-wider bg-[#FF90E8] border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:rotate-2 transition-transform cursor-pointer">
        FISBY BACONEY
      </div>
      <div className="flex gap-4 sm:gap-8">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(item)}
            className="font-bold text-sm sm:text-base border-2 border-black bg-[#23A6F0] text-white px-3 py-1 rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;