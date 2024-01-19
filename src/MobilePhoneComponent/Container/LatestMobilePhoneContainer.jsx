/* eslint-disable no-unused-vars */
import LatestMobilePhoneItem from "../Items/LatestMobilePhoneItem";

function LatestMobilePhoneContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Latest Mobile Phone for you
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-2">
          <LatestMobilePhoneItem
            image="/MobilePhonePageComponents/LatestMobilePhone/Mi13C.jpg"
            productName="LG Fridge dual door"
            productPrice="100000/-"
            productStar=""
          />
          <LatestMobilePhoneItem
            image="/MobilePhonePageComponents/LatestMobilePhone/SamsungA.jpg"
            productName="HP Ideabook gaming"
            productPrice="40000"
            productPriceStrike="45000"
            productStar=""
          />{" "}
        </div>
        <div className="grid grid-cols-4">
          <LatestMobilePhoneItem
            image="/MobilePhonePageComponents/LatestMobilePhone/OnePlus11R.jpg"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
          <LatestMobilePhoneItem
            image="/MobilePhonePageComponents/LatestMobilePhone/RealmeC675G.jpg"
            productName="Croma 32' TV"
            productPrice="120000"
            productStar=""
          />
          <LatestMobilePhoneItem
            image="/MobilePhonePageComponents/LatestMobilePhone/RedmiNote13.jpg"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
          <LatestMobilePhoneItem
            image="/MobilePhonePageComponents/LatestMobilePhone/NothingPhone2.jpg"
            productName="Croma 32' TV"
            productPrice="120000"
            productStar=""
          />
        </div>
      </div>
    </div>
  );
}

export default LatestMobilePhoneContainer;
