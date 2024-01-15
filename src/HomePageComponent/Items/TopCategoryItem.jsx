/* eslint-disable react/prop-types */
function TopCategoryItem({ image, productName }) {
  return (
    <div className="mx-4 min-w-64 hover:scale-105 hover:text-bold">
      <img src={image} className="rounded-xl cursor-pointer" />
      <span className="text-white text-xl flex py-4 justify-center mb-10">
        {productName}
      </span>
    </div>
  );
}

export default TopCategoryItem;
