/* eslint-disable no-unused-vars */
import RightResolutionForYouItem from "../Items/RightResolutionForYouItem";

function RightResolutionForYouContainer() {
  return (
    <div className="-z-50 bg-[#353535] py-10 my-20">
      <div className="text-stone-100 mx-56 mb-4 text-2xl font-bold">
        Right Resolution For You
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-4">
          <RightResolutionForYouItem image="TelevisionComponents/RightResolutionForYou/HDReady.jpg" />
          <RightResolutionForYouItem image="TelevisionComponents/RightResolutionForYou/FullHD.jpg" />
          <RightResolutionForYouItem image="TelevisionComponents/RightResolutionForYou/4KUltra.jpg" />
          <RightResolutionForYouItem image="TelevisionComponents/RightResolutionForYou/8KUltra.jpg" />
        </div>
      </div>
    </div>
  );
}

export default RightResolutionForYouContainer;
