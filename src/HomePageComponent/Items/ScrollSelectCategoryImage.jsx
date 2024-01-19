/* eslint-disable react/prop-types */
function ScrollSelectCategoryImage({ image, setCurrentPage, text }) {
  return (
    <img
      src={image}
      className="w-28 scroll-auto hover:scale-110 transition-all"
      onClick={() => setCurrentPage(text)}
    />
  );
}

export default ScrollSelectCategoryImage;
