/* eslint-disable no-unused-vars */
import NewAtCromaItem from "../Items/NewAtCromaItem";

function ProductContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-36 my-6 mb-10 text-3xl font-bold">
        New At Croma
      </div>
      <div className="mx-36">
        <div className="grid grid-cols-2">
          <NewAtCromaItem image="New At Croma/RealmePhone.png" />
          <NewAtCromaItem image="New At Croma/TCLWachingMachine.png" />{" "}
        </div>
        <div className="grid grid-cols-4">
          <NewAtCromaItem image="New At Croma/CromaAC.png" />
          <NewAtCromaItem image="New At Croma/CromaFANHEATER.png" />
          <NewAtCromaItem image="New At Croma/CromaREFRIGERATOR.png" />
          <NewAtCromaItem image="New At Croma/LEDProjector.png" />
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
