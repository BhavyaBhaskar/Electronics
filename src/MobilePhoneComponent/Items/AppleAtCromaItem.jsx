/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function AppleAtCromaItem({ image }) {
  return (
    <div className="mx-2 my-2 min-w-64">
      <img src={image} className="rounded-lg hover:scale-[102%]" />
    </div>
  );
}

export default AppleAtCromaItem;
