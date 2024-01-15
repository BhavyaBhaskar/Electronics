import TopCategoryItem from "../Items/TopCategoryItem";

function TopTrendingDealContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-36 my-6 mb-10 text-3xl font-bold">
        Top Category
      </div>
      <div className="mx-36">
        <div className="grid grid-cols-4">
          <TopCategoryItem
            image="Top Categories/Accessories.jpg"
            productName="Accessories"
          />
          <TopCategoryItem
            image="Top Categories/HomeAppliance.jpg"
            productName="Home Appliance"
          />
          <TopCategoryItem
            image="Top Categories/ComputersTablets.jpg"
            productName="Computers & Tablets"
          />
          <TopCategoryItem
            image="Top Categories/Phone&Wearable.jpg"
            productName="Phones & Wearables"
          />
          <TopCategoryItem
            image="Top Categories/KitchenAppliance.jpg"
            productName="Kitchen Appliance"
          />
          <TopCategoryItem
            image="Top Categories/AudioVideo.jpg"
            productName="Audio & Video"
          />
          <TopCategoryItem
            image="Top Categories/Camera&Accessories.jpg"
            productName="Cameras & Accessories"
          />
          <TopCategoryItem
            image="Top Categories/Gaming.jpg"
            productName="Gaming"
          />
        </div>
      </div>
    </div>
  );
}

export default TopTrendingDealContainer;
