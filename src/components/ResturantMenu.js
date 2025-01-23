import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/Hooks/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const { resID } = useParams();
  console.log(resID);
  const resInfo = useResturantMenu(resID);
  console.log("Restutant Menu card1:");
  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  // let { carousel } =
  //   resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  let carousel =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.carousel || [];

  console.log("Restutant Menu card2:");
  console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  let menuItemList =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categoryItems = menuItemList.filter(
    (category) =>
      category.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categoryItems);

  if (carousel === null) {
    return <Shimmer />;
  }

  return (
    <div className=" text-center res-menu max-w-4xl mx-auto border-2 border-gray-300 bg-gray-200 rounded-lg shadow-md m-10 p-6">
      {/* Restaurant Header */}
      <div className="res-menu-header text-center border-b border-gray-400 pb-4 mb-6">
        <h2 className="res-name text-2xl font-bold text-gray-800 mb-2">
          {name}
        </h2>
        <p className="res-details text-sm text-gray-600 mb-1">
          {sla.deliveryTime} mins | {costForTwoMessage}
        </p>
        <p className="res-cuisines text-sm text-gray-500">
          {cuisines.join(", ")}
        </p>
      </div>

      {/* Menu Title */}
      <h3 className="menu-title text-xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
        Restaurant Menu
      </h3>
      {categoryItems.map((category) => (
        <ResturantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default ResturantMenu;
