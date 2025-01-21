import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/Hooks/useResturantMenu";

const ResturantMenu = () => {
  const { resID } = useParams();
  console.log(resID);
  const resInfo = useResturantMenu(resID);

  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }

  const { name, cuisines, costForTwoMessage, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  const { carousel } =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(carousel);

  return (
    <div className="res-menu">
      <div className="res-menu-header">
        <h2 className="res-name">{name}</h2>
        <p className="res-details">
          {sla.deliveryTime} mins | {costForTwoMessage}
        </p>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
      </div>
      <h3 className="menu-title">Restaurant Menu</h3>
      <ul className="menu-list">
        {carousel.map((resMen, index) => (
          <li key={index} className="menu-item">
            <span className="dish-name">{resMen.dish.info.name}</span> -
            <span className="dish-price">₹{resMen.dish.info.price / 100}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
