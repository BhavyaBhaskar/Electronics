import ScrollSelectBrand from "../HomePageComponent/Containers/ScrollSelectBrand";
import BestSellerDealContainer from "../HomePageComponent/Containers/BestSellerDealContainer";
import ScrollSelectCategory from "../HomePageComponent/Containers/ScrollSelectCategory";
import HighlightContainer from "../HomePageComponent/Containers/HiglightContainer";
import TabletsContainer from "../HomePageComponent/Containers/TabletsContainer";
import Footer from "./Footer";
import TopCard from "../Component/TopCard";
import AppleAtCromaContainer from "../HomePageComponent/Containers/AppleAtCromaContainer";
import NewAtCromaContainer from "../HomePageComponent/Containers/NewAtCromaContainer";
import AccessoriesContainer from "../HomePageComponent/Containers/AccessoriesContainer";

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
      <NewAtCromaContainer />
      <AccessoriesContainer />
      <Footer />
    </div>
  );
}

export default Body;
