/* eslint-disable no-unused-vars */
import FromCromaForYouItem from "../Items/FromCromaForYouItem";

function FromCromaForYouContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Latest Television For You
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-4">
          <FromCromaForYouItem image="TelevisionComponents/FromCromaForYou/Croma32HD.jpg" />
          <FromCromaForYouItem image="TelevisionComponents/FromCromaForYou/Croma50UHD.jpg" />
          <FromCromaForYouItem image="TelevisionComponents/FromCromaForYou/Croma43FHD.jpg" />
          <FromCromaForYouItem image="TelevisionComponents/FromCromaForYou/Croma32.jpg" />
        </div>
      </div>
    </div>
  );
}

export default FromCromaForYouContainer;
