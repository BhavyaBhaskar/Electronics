function TopCard() {
  return (
    <div className="flex gap-10 items-center w-5/6 mx-auto py-4">
      <div className="">
        <img
          src="/TopCard/ICICI.png"
          className="hover:scale-105 transition-all"
        />
      </div>
      <div>
        <img
          src="/TopCard/ZIPcare.png"
          className="hover:scale-105 transition-all"
        />
      </div>
    </div>
  );
}

export default TopCard;
