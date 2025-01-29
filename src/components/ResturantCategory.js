import { useState } from "react";
import FoodItemList from "./FoodItemList";

const ResturantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log("Data from Res catergory:");
  //console.log(data);
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    //setShowItems(true);
    // showItems ? setShowItems(true) : setShowItems(false);
    setShowIndex();
  };

  return (
    <div className="justify-center items-center">
      <div className="w-[51rem] bg-white shadow-lg m-4 p-4 font-bold hover:shadow-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className=" text-red-600">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordian Body */}
        {showItems && <FoodItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
