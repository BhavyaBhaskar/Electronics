/* eslint-disable no-unused-vars */
import SizeUpYourScreenItem from "../Items/SizeUpYourScreenItem";

function SizeUpYourScreenContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Size Up Your Screen
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-4">
          <SizeUpYourScreenItem image="TelevisionComponents/SizeUpYourScreen/32Screen.jpg" />
          <SizeUpYourScreenItem image="TelevisionComponents/SizeUpYourScreen/43Screen.jpg" />
          <SizeUpYourScreenItem image="TelevisionComponents/SizeUpYourScreen/50Screen.jpg" />
          <SizeUpYourScreenItem image="TelevisionComponents/SizeUpYourScreen/55Screen.jpg" />
        </div>
      </div>
    </div>
  );
}

export default SizeUpYourScreenContainer;
