import ResturantCard from "./ResturantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const resList = resData.card.gridElements.infoWithStyle.restaurants;

const Body = () => {
  const [ListofResturant, setListofResturant] = useState(resList);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="mainH">
        <h2>Top restaurant chains in Pune</h2>
      </div>
      <div className="button-container">
        <button
          id="top-rated"
          className="button"
          onClick={() => {
            let topRatedList = ListofResturant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListofResturant(topRatedList);
          }}
        >
          Top Rated
        </button>
        <button
          id="veg-res"
          className="button"
          onClick={() => {
            let pureVegList = ListofResturant.filter((res) => res.info.veg);
            setListofResturant(pureVegList);
          }}
        >
          Pure Veg 💚
        </button>
        <button
          id="lesthn300"
          className="button"
          onClick={() => {
            let costFriendlyList = ListofResturant.filter((res) => {
              let costString = res.info.costForTwo;
              let cost = parseInt(costString.match(/\d+/)[0]);

              return cost < 300;
            });
            setListofResturant(costFriendlyList);
          }}
        >
          Less than Rs. 300
        </button>
        <button
          id="fastDelivery"
          className="button"
          onClick={() => {
            let fastDeliveryList = ListofResturant.filter((res) => {
              let timeTaken = res.info.sla.deliveryTime;
              return timeTaken < 25;
            });
            setListofResturant(fastDeliveryList);
          }}
        >
          Fast Delivery
        </button>
      </div>
      <div className="resturant-container">
        {ListofResturant.map((restaurant, index) => (
          <ResturantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
