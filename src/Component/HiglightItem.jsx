/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Product({ image }) {
  return (
    <div className="p-2 hover:scale-105 transition-all cursor-pointer">
      <img src={image} />
    </div>
  );
}

export default Product;
