/* eslint-disable no-unused-vars */
import BestSellerDealItem from "../Items/BestSellerDealItem";

function ProductContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-36 my-6 mb-10 text-3xl font-bold">
        Best Seller Deals
      </div>
      <div className="mx-36">
        <div className="grid grid-cols-4">
          <BestSellerDealItem
            image="Top Trending Deal/BestSeller1.png"
            productName="LG Fridge dual door"
            productPrice="100000/-"
            productStar=""
          />
          <BestSellerDealItem
            image="Top Trending Deal/BestSeller2.png"
            productName="HP Ideabook gaming"
            productPrice="40000"
            productPriceStrike="45000"
            productStar=""
          />
          <BestSellerDealItem
            image="Top Trending Deal/BestSeller3.png"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
          <BestSellerDealItem
            image="Top Trending Deal/BestSeller4.png"
            productName="Croma 32' TV"
            productPrice="120000"
            productStar=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
