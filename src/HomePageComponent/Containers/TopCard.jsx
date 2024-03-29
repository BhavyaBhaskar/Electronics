function TopCard() {
  return (
    <div className="flex gap-10 items-center w-5/6 mx-auto py-4">
      <div className="">
        <img
          src="HomePageComponents/TopCard/ICICI.png"
          className="hover:scale-105 transition-all rounded-lg"
        />
      </div>
      <div>
        <img
          src="HomePageComponents/TopCard/ZIPcare.png"
          className="hover:scale-105 transition-all rounded-lg"
        />
      </div>
    </div>
  );
}

export default TopCard;
