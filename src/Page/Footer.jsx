function Footer() {
  return (
    <div className="text-[#f5f5f5] bg-[#1d1d1d] flex items-center h-12  mt-10 font-bold text-xl">
      <a
        href="https://bhavyabhaskarportfolio.vercel.app/"
        className="flex grow justify-end"
      >
        <span className="hover:scale-105">BHAVYA BHASKAR</span>
      </a>
      <a href="mailto:Bhavyabhaskar04@gmail.com" className="pt-2 px-6">
        <span className="material-symbols-outlined hover:scale-105">mail</span>
      </a>
    </div>
  );
}

export default Footer;
