import ScrollSelectBrand from "../Component/ScrollSelectBrand";
import BestSellerDealContainer from "../Component/BestSellerDealContainer";
import ScrollSelectCategory from "../Component/ScrollSelectCategory";
import HighlightContainer from "../Component/HiglightContainer";
import Footer from "./Footer";
import TopCard from "../Component/TopCard";

function Body() {
  return (
    <div className="bg-[#191919]">
      <TopCard />
      <ScrollSelectCategory />
      <div>
        <BestSellerDealContainer />
        <HighlightContainer />
      </div>
      <ScrollSelectBrand />
      <Footer />
    </div>
  );
}

export default Body;
