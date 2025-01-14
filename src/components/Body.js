import ResturantCard from "./ResturantCard";
import resData from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="mainH">
        <h2>Top restaurant chains in Pune</h2>
      </div>
      <div className="resturant-container">
        {resData.card.gridElements.infoWithStyle.restaurants.map(
          (restaurant, index) => (
            <ResturantCard key={index} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};
export default Body;
