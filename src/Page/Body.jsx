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
import LatestTVForYouContainer from "../TelevisionComponent/Containers/LatestTVForYouContainer";
import FromCromaForYouContainer from "../TelevisionComponent/Containers/FromCromaForYouContainer";
import TopTrendingDealContainer from "../TelevisionComponent/Containers/TopTrendingDealContainer";
import SelectYourDisplayTypeContainer from "../TelevisionComponent/Containers/SelectYourDisplayTypeContainer";
import ChooseYourOSContainer from "../TelevisionComponent/Containers/ChooseYourOSContainer";
import RightResolutionForYouContainer from "../TelevisionComponent/Containers/RightResolutionForYouContainer";
import SizeUpYourScreenContainer from "../TelevisionComponent/Containers/SizeUpYourScreenContainer";
import LatestLaptopForYouContainer from "../LaptopContainer/Containers/LatestLaptopForYouContainer";
import HotDealInAppleContainer from "../LaptopContainer/Containers/HotDealInAppleContainer";

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

        {currentPage === "Television" && (
          <>
            <TopHeading text="LED TVs" />
            <Text style="text-[#fffff8] text-2xl font-bold px-56 pt-6 pb-4">
              Settle down and turn on the TV
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-56 w-7/12">
              Streaming services have made it possible to watch your favourite
              shows and live events on any screen you desire. But every so often
              you need a screen large enough so you can sink into your sofa or
              curl up in bed and watch your beloved stories come to life. It
              does not matter what your lifestyle is, there is always a TV for
              you at Croma.
            </Text>
            <LatestTVForYouContainer />
            <FromCromaForYouContainer />
            <TopTrendingDealContainer />
            <SelectYourDisplayTypeContainer />
            <ChooseYourOSContainer />
            <RightResolutionForYouContainer />
            <SizeUpYourScreenContainer />
            <Text style="text-[#fffff8] text-2xl font-bold px-44 pt-16 pb-4">
              What are the different types of TVs available?
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-44 pb-4 w-6/12">
              With the sheer number of models available from brands like
              Samsung, Mi, LG, Panasonic, and Croma, among others, choosing the
              best TV for you might seem like a daunting task. The first thing
              to decide is the size of your TV. Depending on the size of the
              room you plan to install it in, you can choose anywhere from a
              32-inch TV to one above 90 inches.
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-44 pb-4 w-6/12">
              The next decision to make is the type of display. Quantum Dot LED
              TV or QLED TV is a variation of the standard LED TV. These TVs use
              LEDs to light up the display and quantum dots to produce the
              colours. On the other hand, OLED stands for organic light-emitting
              diode. In OLED TVs, instead of backlights, the pixels emit their
              own light. Display resolution is an essential factor when it comes
              to any screen like televisions and monitors. HD Ready and Full HD
              TVs are widely available while 4K TVs, also called Ultra-HD TVs,
              are gaining popularity too. To know more about these technologies
              and how to choose the right one for you, have a look at our TV
              Buying Guide
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-44 pb-4 w-6/12">
              Considering how often we stream shows and movies, investing in
              Smart TVs is a good idea. Available with various operating
              systems, these televisions connect to the internet and let you
              enjoy your favourite content on big screens. The in-built speaker
              quality and connectivity slots available are two other features to
              be considered before zeroing down on the best television for you.
            </Text>
            <Footer />
          </>
        )}

        {currentPage === "Laptop" && (
          <>
            <TopHeading text="Laptop" />
            <Text style="text-[#fffff8] text-2xl font-bold px-56 pt-6 pb-4">
              Laptops That Bring Out the Best In You{" "}
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-56 w-7/12">
              While tablets and smartphones are still popular, most people agree
              that everything, from doing research for an assignment to playing
              hardcore games, works better on a laptop. It does not matter what
              your lifestyle is, there is always one for you at Croma.
            </Text>
            <LatestLaptopForYouContainer />
            <HotDealInAppleContainer />
            <TopTrendingDealContainer />
            <SelectYourDisplayTypeContainer />
            <ChooseYourOSContainer />
            <RightResolutionForYouContainer />
            <SizeUpYourScreenContainer />
            <Text style="text-[#fffff8] text-2xl font-bold px-44 pt-16 pb-4">
              Buy laptops online at the best price in India{" "}
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-44 pb-4 w-6/12">
              Smartphones have taken over most of our screen time. Even tablets
              are being designed to replace laptops. Even as the ubiquitous
              bricks and slabs are getting more and more powerful each week,
              there is always a need for a real computer. For most people, this
              typically means a laptop.
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-44 pb-4 w-6/12">
              Even the most digitally-forward folks will admit there’s no
              substitute for a keyboard and a big screen. Tasks like creating
              spreadsheets or presentations and editing photos or videos are far
              more easily accomplished on a laptop than on a tablet or mobile
              phone. But what laptop is right for you depends on a variety of
              factors: what exactly you plan on using it for, how often you
              intend to use it, and (most importantly) your budget.
            </Text>
            <Text style="text-[#fffff8] text-2xl font-bold px-44 pt-16 pb-4">
              What are some best Laptops for work and play?
            </Text>
            <Text style="text-[#fffff8] text-base font-semibold mx-44 pb-4 w-6/12">
              Windows laptops are among the highest-selling machines across the
              world. Several manufacturers –HP and Dell to Lenovo and Asus –
              make Windows laptops. And while these are more common, Apple
              MacBooks are also getting popular for their sleek looks, shiny
              interface, and highly user-friendly behaviour. 2-in-1 Laptops are
              also getting more popular than ever as we find newer uses for our
              machines – to work and collaborate, binge-watch shows, and even
              read.
            </Text>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default Body;
