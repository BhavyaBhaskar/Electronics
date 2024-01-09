/* eslint-disable react/prop-types */
function RotationalBannerItem({ image }) {
  return (
    <>
      <img
        src={image}
        className="rounded-2xl mx-10 hover:scale-110 transition-all w-96"
      />
    </>
  );
}

export default RotationalBannerItem;
