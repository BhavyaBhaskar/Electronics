import ScrollSelectBrand from "../HomePageComponent/ScrollSelectBrand";
import BestSellerDealContainer from "../HomePageComponent/BestSellerDealContainer";
import ScrollSelectCategory from "../HomePageComponent/ScrollSelectCategory";
import HighlightContainer from "../HomePageComponent/HiglightContainer";
import TabletsContainer from "../HomePageComponent/TabletsContainer";
import Footer from "./Footer";
import TopCard from "../Component/TopCard";
import AppleAtCromaContainer from "../HomePageComponent/AppleAtCromaContainer";

function Body() {
  return (
    <div className="bg-[#191919]">
      <TopCard />
      <ScrollSelectCategory />
      <BestSellerDealContainer />
      <HighlightContainer />
      <TabletsContainer />
      <ScrollSelectBrand />
      <AppleAtCromaContainer />
      <Footer />
    </div>
  );
}

export default Body;
