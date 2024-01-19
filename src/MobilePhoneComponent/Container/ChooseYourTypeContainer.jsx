/* eslint-disable no-unused-vars */
import LatestMobilePhoneItem from "../Items/LatestMobilePhoneItem";

function ChooseYourTypeContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Choose Your Type
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-3">
          <LatestMobilePhoneItem
            image="/MobilePhonePageComponents/ChooseYourType/IPhone.jpg"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
          <LatestMobilePhoneItem
            image="/MobilePhonePageComponents/ChooseYourType/Android.jpg"
            productName="Croma 32' TV"
            productPrice="120000"
            productStar=""
          />
          <LatestMobilePhoneItem
            image="/MobilePhonePageComponents/ChooseYourType/FeaturePhone.jpg"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseYourTypeContainer;
