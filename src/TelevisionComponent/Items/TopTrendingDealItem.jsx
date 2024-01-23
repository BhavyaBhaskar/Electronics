/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function TopTrendingDealItem({
  image,
  productName,
  productPrice,
  productStar,
  productPriceStrike,
}) {
  return (
    <div className="mx-4 scale-105 min-w-64">
      <div className=" rounded-xl bg-[#121212] p-5 hover:scale-105 transition-all cursor-pointer ">
        <img src={image} className="scale-110" />
        <div className="mx-4">
          <div className="text-[#f5f5f5] font-semibold text-md my-2">
            {productName}
          </div>
          <div className="text-[#f5f5f5] font-extralight flex gap-2">
            <span>Rs.{productPrice}</span>
            {productPriceStrike && (
              <span className="flex items-center line-through text-sm">
                {productPriceStrike}
              </span>
            )}
          </div>
          <div className="text-[#f5f5f5]">{productStar}</div>
        </div>
      </div>
    </div>
  );
}

export default TopTrendingDealItem;
