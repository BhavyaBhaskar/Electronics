import HighlightItem from "../Items/HiglightItem";

function ProductContainer() {
  return (
    <div>
      <div className="text-stone-100 mx-36 my-6 mt-20 text-3xl font-bold">
        HighLights
      </div>
      <div className="mx-36">
        <div className="grid grid-cols-3">
          <HighlightItem image="/Highlight/CreatorStudio.png" />
          <HighlightItem image="/Highlight/CromaBanner.png" />
          <HighlightItem image="/Highlight/CromaExpress.jpg" />
          <HighlightItem image="/Highlight/CromaGiftCard.jpg" />
          <HighlightItem image="/Highlight/CromaWeddingSpecial.jpg" />
          <HighlightItem image="/Highlight/WinterSale.gif" />
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
