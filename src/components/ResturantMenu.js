import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/Hooks/useResturantMenu";

const ResturantMenu = () => {
  const { resID } = useParams();
  console.log(resID);
  const resInfo = useResturantMenu(resID);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  const { carousel } =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(carousel);

  return (
    <div className="res-menu max-w-4xl mx-auto border-2 border-gray-300 bg-gray-200 rounded-lg shadow-md m-10 p-6">
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

      {/* Menu List */}
      <ul className="menu-list space-y-4">
        {carousel.map((resMen, index) => (
          <li
            key={index}
            className="menu-item flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <span className="dish-name font-medium text-gray-800">
              {resMen.dish.info.name}
            </span>
            <span className="dish-price text-gray-600 font-semibold">
              ₹{resMen.dish.info.price / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
