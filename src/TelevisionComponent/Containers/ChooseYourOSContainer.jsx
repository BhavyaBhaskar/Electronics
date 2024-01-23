/* eslint-disable no-unused-vars */
import ChooseYourOSItem from "../Items/ChooseYourOSItem";

function ChooseYourOSContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Choose Your OS
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-4">
          <ChooseYourOSItem image="TelevisionComponents/ChooseYourOS/WebOS.jpg" />
          <ChooseYourOSItem image="TelevisionComponents/ChooseYourOS/Android.jpg" />
          <ChooseYourOSItem image="TelevisionComponents/ChooseYourOS/Tizen.jpg" />
          <ChooseYourOSItem image="TelevisionComponents/ChooseYourOS/FireTV.jpg" />
        </div>
      </div>
    </div>
  );
}

export default ChooseYourOSContainer;
