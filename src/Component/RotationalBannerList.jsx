import RotationalBannerItem from "./RotationalBannerItem";

function RotationalBannerList() {
  return (
    <div className="h-2/5 flex justify-center pt-10">
      <RotationalBannerItem image="Top Categories/ComputersTablets.jpg" />
      <RotationalBannerItem image="Top Categories/AudioVideo.jpg" />
      <RotationalBannerItem image="Top Categories/Accessories.jpg" />
    </div>
  );
}

export default RotationalBannerList;
