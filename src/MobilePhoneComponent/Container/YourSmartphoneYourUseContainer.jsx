/* eslint-disable no-unused-vars */
import YourSmartphoneYourUseItem from "../Items/YourSmartphoneYourUseItem";

function YourSmartphoneYourContainer() {
  return (
    <div className="-z-50 bg-[#353535] py-10 my-20">
      <div className="text-stone-100 mx-56 mb-4 text-2xl font-bold">
        Your SmartPhone, Your Use
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-4">
          <YourSmartphoneYourUseItem image="/MobilePhonePageComponents/YourSmartphoneYourUse/ContentCreation.jpg" />
          <YourSmartphoneYourUseItem image="/MobilePhonePageComponents/YourSmartphoneYourUse/Gaming.jpg" />
          <YourSmartphoneYourUseItem image="/MobilePhonePageComponents/YourSmartphoneYourUse/Productivity.jpg" />
          <YourSmartphoneYourUseItem image="/MobilePhonePageComponents/YourSmartphoneYourUse/5GNetwork.jpg" />
        </div>
      </div>
    </div>
  );
}

export default YourSmartphoneYourContainer;
