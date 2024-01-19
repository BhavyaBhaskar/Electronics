/* eslint-disable react/prop-types */
function Logo({ image, setCurrentPage }) {
  return (
    <img
      src={image}
      onClick={() => setCurrentPage("Home")}
      className="cursor-pointer"
    />
  );
}

export default Logo;
