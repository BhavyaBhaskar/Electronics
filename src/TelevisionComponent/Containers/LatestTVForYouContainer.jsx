/* eslint-disable no-unused-vars */
import LatestTVForYouItem from "../Items/LatestTVForYouItem";

function LatestTVForYouContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Latest Television For You
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-2">
          <LatestTVForYouItem image="TelevisionComponents/LatestTVForYou/Blaupunkt.jpg" />
          <LatestTVForYouItem image="TelevisionComponents/LatestTVForYou/Xiaomi.jpg" />
        </div>
      </div>
    </div>
  );
}

export default LatestTVForYouContainer;
