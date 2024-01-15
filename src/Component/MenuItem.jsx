/* eslint-disable react/prop-types */
function MenuItem({ text }) {
  return (
    <div className="hover:bg-[#00eeab] hover:text-[#001600] cursor-pointer py-0.5 px-1 flex justify-between items-center">
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}

export default MenuItem;
