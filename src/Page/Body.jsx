/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TopCard from "../HomePageComponent/Containers/TopCard";
import ScrollSelectBrand from "../HomePageComponent/Containers/ScrollSelectBrand";
import BestSellerDealContainer from "../HomePageComponent/Containers/BestSellerDealContainer";
import ScrollSelectCategory from "../HomePageComponent/Containers/ScrollSelectCategory";
import HighlightContainer from "../HomePageComponent/Containers/HiglightContainer";
import TabletsContainer from "../HomePageComponent/Containers/TabletsContainer";
import AppleAtCromaContainer from "../HomePageComponent/Containers/AppleAtCromaContainer";
import AppleAtCromaContainerMobile from "../MobilePhoneComponent/Container/AppleAtCromaContainer";
import NewAtCromaContainer from "../HomePageComponent/Containers/NewAtCromaContainer";
import AccessoriesContainer from "../HomePageComponent/Containers/AccessoriesContainer";
import TopCategoryContainer from "../HomePageComponent/Containers/TopCategoryContainer";
import CarouselContainer from "../HomePageComponent/Containers/CarouselContainer";
import TopHeading from "../Component/TopHeading";
import Footer from "./Footer";
import Text from "../Component/Text";
import LatestMobilePhoneContainer from "../MobilePhoneComponent/Container/LatestMobilePhoneContainer";

import { createContext, useState } from "react";
import ChooseYourTypeContainer from "../MobilePhoneComponent/Container/ChooseYourTypeContainer";
import YourSmartphoneYourContainer from "../MobilePhoneComponent/Container/YourSmartphoneYourUseContainer";
import PickYourSmartPhoneBrandContainer from "../MobilePhoneComponent/Container/PickYourSmartPhoneBrandContainer";
import FlagshipPhoneContainer from "../MobilePhoneComponent/Container/FlagshipPhoneContainer";

function Body({ setCurrentPage, currentPage }) {
  return (
    <>
      <div className="bg-[#191919]">
        {currentPage === "Home" && (
          <>
            <TopCard />
            <ScrollSelectCategory setCurrentPage={setCurrentPage} />
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
          </>
        )}
        {currentPage === "MobilePhone" && (
          <>
            <TopHeading text="Mobile Phone" />
            <Text style="text-[#fffff8] text-xl font-bold px-56 pt-6 pb-4">
              Treat yourself to a new Mobile Phone
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-56 w-7/12">
              Experience the world at your fingertips! Work, socialise, book a
              ride, play games, listen to music, watch your favourite shows,
              take a photo, or simply make a call! Buy a Mobile Phone from Croma
              that does it all and then some.
            </Text>
            <LatestMobilePhoneContainer />
            <ChooseYourTypeContainer />
            <AppleAtCromaContainerMobile />
            <YourSmartphoneYourContainer />
            <PickYourSmartPhoneBrandContainer />
            <FlagshipPhoneContainer />
            <Text style="text-[#fffff8] text-2xl font-bold px-44 pt-16 pb-4">
              Factors to consider while buying a Mobile Phone
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-44 pb-4 w-6/12">
              When purchasing a mobile phone, it is essential to consider
              various factors to make an informed decision. Factors like display
              size, camera quality, processor performance, battery life, and
              storage capacity are crucial in determining the right device for
              you. At Croma, we understand the importance of these factors and
              provide detailed product descriptions to help you make the best
              choice. You can refer to our phone buying guide or #AskTheExperts
              at Croma stores to zero down on the features your new phone must
              have.
            </Text>
            <Text style="text-[#fffff8] text-2xl font-bold px-44 pt-4 pb-4">
              Choose the phone with the latest network
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-44 pb-4 w-6/12">
              Stay connected with the latest network technology by choosing the
              right mobile phone. Whether you are looking for 4G mobile phones
              or want to embrace the lightning-fast speeds of 5G, Croma has you
              covered. Browse our range of 4G mobile phones and 5G mobile phones
              to experience the power of seamless connectivity.
            </Text>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default Body;
