import ResturantCard from "./ResturantCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const resList = resData.card.gridElements.infoWithStyle.restaurants;

const Body = () => {
  const [ListofResturant, setListofResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.6633744131923&lng=73.7839624285698&carousel=true&third_party_vendor=1"
    );

    const jsonData = await data.json();
    console.log(jsonData);
    // let apiList =
    //   jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    let apiList =
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListofResturant(apiList);

    console.log("after fetch setlist");
  };

  if (ListofResturant.length === 0) {
    return <Shimmer></Shimmer>;
  }

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
