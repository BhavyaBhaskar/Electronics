/* eslint-disable no-unused-vars */
import AppleAtCromaItem from "../Items/AppleAtCromaItem";

function AppleAtCromaContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Choose Your Type
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-3">
          <AppleAtCromaItem
            image="/MobilePhonePageComponents/AppleAtCroma/IPhone15.jpg"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
          <AppleAtCromaItem
            image="/MobilePhonePageComponents/AppleAtCroma/IPhone14.jpg"
            productName="Croma 32' TV"
            productPrice="120000"
            productStar=""
          />
          <AppleAtCromaItem
            image="/MobilePhonePageComponents/AppleAtCroma/IPhone13.jpg"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
        </div>
      </div>
    </div>
  );
}

export default AppleAtCromaContainer;
