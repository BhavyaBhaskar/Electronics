import TabletsItem from "../Items/TabletsItem";

function TopTrendingDealContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-36 my-6 mb-10 text-3xl font-bold">
        Top Trending Deals
      </div>
      <div className="mx-36">
        <div className="grid grid-cols-4">
          <TabletsItem
            image="Tablets/Tablet1.png"
            productName="Tablet 1"
            productPrice="100000/-"
            productStar=""
          />
          <TabletsItem
            image="Tablets/Tablet2.png"
            productName="Tablet 2"
            productPrice="40000"
            productPriceStrike="45000"
            productStar=""
          />
          <TabletsItem
            image="Tablets/Tablet3.png"
            productName="Tablet 3"
            productPrice="40000"
            productStar=""
          />
          <TabletsItem
            image="Tablets/Tablet4.png"
            productName="Tablet 4"
            productPrice="120000"
            productStar=""
          />
        </div>
      </div>
    </div>
  );
}

export default TopTrendingDealContainer;
