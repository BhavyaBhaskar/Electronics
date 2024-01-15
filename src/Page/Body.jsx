import TopCard from "../HomePageComponent/Containers/TopCard";
import ScrollSelectBrand from "../HomePageComponent/Containers/ScrollSelectBrand";
import BestSellerDealContainer from "../HomePageComponent/Containers/BestSellerDealContainer";
import ScrollSelectCategory from "../HomePageComponent/Containers/ScrollSelectCategory";
import HighlightContainer from "../HomePageComponent/Containers/HiglightContainer";
import TabletsContainer from "../HomePageComponent/Containers/TabletsContainer";
import AppleAtCromaContainer from "../HomePageComponent/Containers/AppleAtCromaContainer";
import NewAtCromaContainer from "../HomePageComponent/Containers/NewAtCromaContainer";
import AccessoriesContainer from "../HomePageComponent/Containers/AccessoriesContainer";
import TopCategoryContainer from "../HomePageComponent/Containers/TopCategoryContainer";
import CarouselContainer from "../HomePageComponent/Containers/CarouselContainer";
import Footer from "./Footer";

function Body() {
  return (
    <div className="bg-[#191919]">
      <TopCard />
      <ScrollSelectCategory />
      <BestSellerDealContainer />
      <HighlightContainer />
      <TabletsContainer />
      <AppleAtCromaContainer />
      <NewAtCromaContainer />
      <AccessoriesContainer />
      <ScrollSelectBrand />
      <TopCategoryContainer />
      <CarouselContainer />
      <Footer />
    </div>
  );
}

export default Body;
