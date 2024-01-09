/* eslint-disable react/prop-types */
function Product({ image }) {
  return (
    <div className="mx-4">
      <div className="border-4 rounded-xl bg-[#121212]">
        <img src={image} />
        <div>Deatail</div>
        <div>Price</div>
        <div>Stars</div>
      </div>
    </div>
  );
}

export default Product;
