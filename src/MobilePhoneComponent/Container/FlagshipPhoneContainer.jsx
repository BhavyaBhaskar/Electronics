/* eslint-disable no-unused-vars */
import FlagshipPhoneItem from "../Items/FlagshipPhoneItem";

function FlagshipPhoneContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-semibold">
        Flagship Phones
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-3">
          <FlagshipPhoneItem
            image="MobilePhonePageComponents/FlagshipPhone/IPhone13.jpg"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
          <FlagshipPhoneItem
            image="MobilePhonePageComponents/FlagshipPhone/OnePlus11.jpg"
            productName="Croma 32' TV"
            productPrice="120000"
            productStar=""
          />
          <FlagshipPhoneItem
            image="MobilePhonePageComponents/FlagshipPhone/OppoFindN2Flip.jpg"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
        </div>
      </div>
    </div>
  );
}

export default FlagshipPhoneContainer;
