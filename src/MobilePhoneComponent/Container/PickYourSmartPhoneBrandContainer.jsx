import PickYourSmartPhoneBrandItem from "../Items/PickYourSmartPhoneBrandItem";

function PickYourSmartPhoneBrandContainer() {
  return (
    <>
      <div className="text-stone-100 mx-44 my-16 mb-4 text-2xl font-bold">
        Pick Your Smartphone Brand
      </div>
      <div className="flex items-center mx-40">
        <div className="flex flex-wrap gap-4 items-center">
          <PickYourSmartPhoneBrandItem image="MobilePhonePageComponents/PickYourSmartPhoneBrand/Apple.jpg" />
          <PickYourSmartPhoneBrandItem image="MobilePhonePageComponents/PickYourSmartPhoneBrand/OnePlus.jpg" />
          <PickYourSmartPhoneBrandItem image="MobilePhonePageComponents/PickYourSmartPhoneBrand/Nothing.jpg" />
          <PickYourSmartPhoneBrandItem image="MobilePhonePageComponents/PickYourSmartPhoneBrand/Oppo.jpg" />
          <PickYourSmartPhoneBrandItem image="MobilePhonePageComponents/PickYourSmartPhoneBrand/Realme.jpg" />
          <PickYourSmartPhoneBrandItem image="MobilePhonePageComponents/PickYourSmartPhoneBrand/Tecno.jpg" />
          <PickYourSmartPhoneBrandItem image="MobilePhonePageComponents/PickYourSmartPhoneBrand/Mi.jpg" />
          <PickYourSmartPhoneBrandItem image="MobilePhonePageComponents/PickYourSmartPhoneBrand/Samsung.jpg" />
        </div>
      </div>
    </>
  );
}

export default PickYourSmartPhoneBrandContainer;
