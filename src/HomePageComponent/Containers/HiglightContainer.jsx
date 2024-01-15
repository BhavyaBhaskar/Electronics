import HighlightItem from "../Items/HiglightItem";

function ProductContainer() {
  return (
    <div>
      <div className="text-stone-100 mx-36 my-6 mt-20 text-3xl font-bold">
        HighLights
      </div>
      <div className="mx-36">
        <div className="grid grid-cols-3">
          <HighlightItem image="HomePageComponents/Highlight/CreatorStudio.png" />
          <HighlightItem image="HomePageComponents/Highlight/CromaBanner.png" />
          <HighlightItem image="HomePageComponents/Highlight/CromaExpress.jpg" />
          <HighlightItem image="HomePageComponents/Highlight/CromaGiftCard.jpg" />
          <HighlightItem image="HomePageComponents/Highlight/CromaWeddingSpecial.jpg" />
          <HighlightItem image="HomePageComponents/Highlight/WinterSale.gif" />
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
