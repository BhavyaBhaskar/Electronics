import Product from "./Product";

function ProductContainer() {
  return (
    <div>
      <div className="text-stone-100 mx-36 my-10 text-3xl">
        Best Seller Deals
      </div>
      <div className="mx-36">
        <div className="grid grid-cols-2 my-4">
          <Product image="Top Trending Deal/BestSeller1.png" />
          <Product image="Top Trending Deal/BestSeller2.png" />
        </div>
        <div className="grid grid-cols-3 my-4">
          <Product image="Top Trending Deal/BestSeller3.png" />
          <Product image="Top Trending Deal/BestSeller4.png" />
          <Product image="Top Trending Deal/BestSeller5.png" />
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
