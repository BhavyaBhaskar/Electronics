import ScrollSelectBrandImage from "./ScrollSelectBrandImage";

function ScrollSelectCategory() {
  return (
    <div className="flex items-center mx-20">
      <span className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </span>
      <div className="py-10 flex items-center gap-10 overflow-y-auto max-w-screen-xl mx-auto">
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Amazon.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Apple.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Croma.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Dell.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Hp.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Jbl.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Lenovo.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Lg.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Mi.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Oppo.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Panasonic.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Philips.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Realme.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Samsung.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/Sony.png"} />
        <ScrollSelectBrandImage image={"/Scroll Select Brand/VIvo.png"} />
      </div>
      <span className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </div>
  );
}

export default ScrollSelectCategory;
