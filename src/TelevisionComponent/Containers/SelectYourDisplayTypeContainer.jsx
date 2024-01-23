/* eslint-disable no-unused-vars */
import SelectYourDisplayTypeItem from "../Items/SelectYourDisplayTypeItem";

function SelectYourDisplatTypeContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Select Your Display Type
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-4">
          <SelectYourDisplayTypeItem image="TelevisionComponents/SelectYourDisplayType/LED.jpg" />
          <SelectYourDisplayTypeItem image="TelevisionComponents/SelectYourDisplayType/QLED.jpg" />
          <SelectYourDisplayTypeItem image="TelevisionComponents/SelectYourDisplayType/OLED.jpg" />
          <SelectYourDisplayTypeItem image="TelevisionComponents/SelectYourDisplayType/NanoCell.jpg" />
        </div>
      </div>
    </div>
  );
}

export default SelectYourDisplatTypeContainer;
