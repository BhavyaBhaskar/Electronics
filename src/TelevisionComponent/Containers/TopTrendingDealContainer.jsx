/* eslint-disable no-unused-vars */
import TopTrendingDealItem from "../Items/TopTrendingDealItem";

function TopTrendingDealContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold pb-4">
        Top Trending Deals
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-4">
          <TopTrendingDealItem
            image="TelevisionComponents/TopTrendingDeal/Xiaomi.jpg"
            productName="Xiaomi A Series"
            productPrice="40000"
            productStar=""
          />
          <TopTrendingDealItem
            image="TelevisionComponents/TopTrendingDeal/Samsung.jpg"
            productName="SAMSUNG CUE60"
            productPrice="100000"
            productStar=""
          />
          <TopTrendingDealItem
            image="TelevisionComponents/TopTrendingDeal/Foxsky.jpg"
            productName="FOXSKY 43 inch"
            productPrice="40000"
            productPriceStrike="45000"
            productStar=""
          />

          <TopTrendingDealItem
            image="TelevisionComponents/TopTrendingDeal/Blaupunkt.jpg"
            productName="Bluepunkt CyberSound"
            productPrice="120000"
            productStar=""
          />
        </div>
      </div>
    </div>
  );
}

export default TopTrendingDealContainer;
