/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function AccessoriesItem({ image }) {
  return (
    <div className="mx-2 my-2 min-w-64">
      <img src={image} className="rounded-lg hover:scale-105" />
    </div>
  );
}

export default AccessoriesItem;
