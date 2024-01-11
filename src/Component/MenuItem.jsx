/* eslint-disable react/prop-types */
function MenuItem({ text }) {
  return (
    <li className="hover:bg-[#00eeab] hover:text-[#001600] cursor-pointer py-0.5">
      {text}
    </li>
  );
}

export default MenuItem;
