import ResturantCard from "./ResturantCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";

//whenever state ariable changes recat triggers reconcillation cycle(re-renders component)

const resList = resData.card.gridElements.infoWithStyle.restaurants;

const Body = () => {
  //state variables=> create on top
  //useStae is used to create local state variable inside function hence always call it inside function component.
  //never create it inside if-else for lopp or normal function, only inside and top of functional cmponent

  const [ListofResturant, setListofResturant] = useState(resList);
  const [ListFilterResturant, setListFilterResturant] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [toggleButton, settoggleButton] = useState(1);
  const [toggleButton2, settoggleButton2] = useState(1);

  //is no dependancy array ![] => the useEffect is rendedred every time
  //if empty dependancy array => useEffect is called on inital render(just once)
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
    setListFilterResturant(apiList);

    console.log("after fetch setlist");
  };

  //conditional rednering:- Rendering based on some condition as below is know as conditional redndreing
  // if (ListofResturant.length === 0) {
  //   return <Shimmer></Shimmer>;
  // }
  // console.log("Hello from Boday");

  const onlineStatus = useOnlineStatus();

  console.log("Your Online status is: " + onlineStatus);

  if (onlineStatus === false) {
    return <h1>You are Offline!! Kindly Check your internet connection!!!!</h1>;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            let searchBackText = e.target.value;
            setSearchText(searchBackText);

            let searchBackList = ListFilterResturant.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchBackText.toLowerCase());
            });
            setListofResturant(searchBackList);
          }}
        />
        {/* <button
          className="search-button"
          onClick={() => {
            console.log(searchText);
            let searchList = ListofResturant.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });

            setListofResturant(searchList);
          }}
        >
          Search
        </button> */}
      </div>

      <div className="mainH">
        <h2>Top restaurant chains in Pune</h2>
      </div>
      <div className="button-container">
        <button
          id="top-rated"
          className="button"
          onClick={() => {
            if (toggleButton) {
              let topRatedList = ListofResturant.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListofResturant(topRatedList);
              settoggleButton(0);
            } else {
              setListofResturant(ListFilterResturant);
              settoggleButton(1);
            }
          }}
        >
          Top Rated
        </button>
        <button
          id="veg-res"
          className="button"
          onClick={() => {
            if (toggleButton2) {
              let pureVegList = ListofResturant.filter((res) => res.info.veg);
              setListofResturant(pureVegList);
              settoggleButton2(0);
            } else {
              setListofResturant(ListFilterResturant);
              settoggleButton2(1);
            }
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
      {/* <div className="resturant-container">
        {ListofResturant.map((restaurant, index) => (
          <link>
            <ResturantCard key={restaurant.info.id} resData={restaurant} />
          </link>
        ))}
      </div> */}
      <div className="resturant-container">
        {ListofResturant.map((restaurant, index) => (
          <Link
            to={`/resturants/${restaurant.info.id}`}
            key={restaurant.info.id}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
