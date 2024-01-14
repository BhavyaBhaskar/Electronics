/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function AppleAtCromaItem({
  image,
  productName,
  productPrice,
  productStar,
  productPriceStrike,
}) {
  return (
    <div className="mx-1 my-1 min-w-64">
      <img src={image} className="rounded-lg" />
    </div>
  );
}

export default AppleAtCromaItem;
