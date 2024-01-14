/* eslint-disable no-unused-vars */
import AppleAtCromaItem from "../Items/AppleAtCromaItem";

function ProductContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-36 my-6 mb-10 text-3xl">
        Apple At Croma
      </div>
      <div className="mx-36">
        <div className="grid grid-cols-2">
          <AppleAtCromaItem
            image="Apple At Croma/IPhone15.png"
            productName="LG Fridge dual door"
            productPrice="100000/-"
            productStar=""
          />
          <AppleAtCromaItem
            image="Apple At Croma/IPhone15Plus.png"
            productName="HP Ideabook gaming"
            productPrice="40000"
            productPriceStrike="45000"
            productStar=""
          />{" "}
        </div>
        <div className="grid grid-cols-4">
          <AppleAtCromaItem
            image="Apple At Croma/IPhone15Pro.png"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
          <AppleAtCromaItem
            image="Apple At Croma/WatchSE.png"
            productName="Croma 32' TV"
            productPrice="120000"
            productStar=""
          />
          <AppleAtCromaItem
            image="Apple At Croma/IPads.png"
            productName="Realme 12 5G"
            productPrice="40000"
            productStar=""
          />
          <AppleAtCromaItem
            image="Apple At Croma/AirPodsPro2.png"
            productName="Croma 32' TV"
            productPrice="120000"
            productStar=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
