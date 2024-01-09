import RotationalBannerList from "../Component/RotationalBannerList";
import ScrollSelectBrand from "../Component/ScrollSelectBrand";
import ProductContainer from "../Component/ProductContainer";
import ScrollSelectCategory from "../Component/ScrollSelectCategory";
import Footer from "../Component/Footer";

function Body() {
  return (
    <div className="bg-[#191919]">
      <RotationalBannerList />
      <ScrollSelectBrand />
      <ScrollSelectCategory />
      <ProductContainer />
      <Footer />
    </div>
  );
}

export default Body;
